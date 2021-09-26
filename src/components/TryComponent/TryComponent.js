import React, { useRef } from "react";
import { useDispatch } from "react-redux";

const TryComponent = (props) => {
  const dispatch = useDispatch();

//   const email = useSelector((state) => state.email);
//   const password = useSelector((state) => state.password);

  const inputEmail = useRef();
  const inputPassword = useRef();


  const onSubmitHandler = (event) => {
    event.preventDefault();
    dispatch({
      type: "ADD_INFO",
      email: inputEmail.current.value,
      password: inputPassword.current.value,
    });

    inputEmail.current.value = "";
    inputPassword.current.value = "";
  };

  return (
    <div className="container">
      <form onSubmit={onSubmitHandler}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            ref={inputEmail}
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            ref={inputPassword}
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default TryComponent;
