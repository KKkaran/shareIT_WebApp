import React, { useEffect, useState } from "react";
import { debounce } from "lodash";

export const Login = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [isFormValid, setIsFormValid] = useState(true);

  // Define a debounced version of the onChange function
  const debouncedOnChange = debounce((e) => {
    console.log("onchange function");
    setCredentials({
      ...credentials,
      [e.target.name]: e?.target?.value,
    });
  }, 500);

  const onSubmitLogin = (e) => {
    e.preventDefault();
    if (!credentials.email || !credentials.password) {
      setIsFormValid(false);
      return;
    }
    //proceed with login
    console.log("proceeding");
  };

  useEffect(() => {
    console.log(credentials);
  }, [credentials]);

  return (
    <div className="container p-3 d-flex flex-column justify-content-center pt-5">
      <div className="row text-center">
        <h2>LOGIN</h2>
      </div>
      <form onSubmit={onSubmitLogin}>
        <div className="row justify-content-center form-group">
          <input
            className="col-sm-12 col-md-6 col-lg-4 m-1 rounded"
            type="text"
            placeholder="email"
            name="email"
            onChange={debouncedOnChange} // Use debouncedOnChange here
            required
          />
        </div>
        {!isFormValid && !credentials.email && (
          <div className="row justify-content-center form-group">
            <p className="col-sm-12 col-md-6 col-lg-4 m-1 rounded">
              This is required
            </p>
          </div>
        )}
        <div className="row justify-content-center">
          <input
            className="col-sm-12 col-md-6 col-lg-4 m-1 rounded"
            type="password"
            placeholder="password"
            name="password"
            onChange={debouncedOnChange} // Use debouncedOnChange here
            required
          />
        </div>
        {!isFormValid && !credentials.password && (
          <div className="row justify-content-center form-group">
            <p className="col-sm-12 col-md-6 col-lg-4 m-1 rounded">
              This is required
            </p>
          </div>
        )}
        <div className="row justify-content-center m-2">
          <input
            style={{ backgroundColor: "coral" }}
            type="submit"
            className="col-sm-12 col-md-6 col-lg-4 m-1 rounded"
            onClick={onSubmitLogin}
          />
        </div>
      </form>
    </div>
  );
};
