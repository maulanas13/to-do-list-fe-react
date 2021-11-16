import React, { useState, useRef } from "react";
import "./styles/RegisterPage.css"

function RegisterPage() {
    const [showPass, setShowPass] = useState("password");
    const [checkPass, setCheckPass] = useState("");
    const [registerInput, setRegisterInput] = useState({
        email: "",
        username: "",
        password: "",
    });

    const inputEmailRef = useRef();
    const inputUsernameRef = useRef();
    const inputPassRef = useRef();
    const inputConfirmPassRef = useRef();
    const regisBtnRef = useRef();

    // HANDLER FUNCTIONS SECTION
    const regisMailChangeHandler = (event) => {
        setRegisterInput((prevState) => {
        return { ...prevState, email: event.target.value.toLowerCase() };
        });
    };

    const regisUserChangeHandler = (event) => {
        setRegisterInput((prevState) => {
        return { ...prevState, username: event.target.value };
        });
    };

    const regisPassChangeHandler = (event) => {
        setRegisterInput((prevState) => {
        return { ...prevState, password: event.target.value };
        });
    };

    const confirmPassChangeHandler = (event) => {
        setCheckPass(event.target.value);
    };

    const showPassHandler = (event) => {
        if (event.target.checked) {
          setShowPass("text");
        } else {
          setShowPass("password");
        };
    };

    // KEYUP FUNCTION SECTION
    const onEnterSwitch = (event, inputRef) => {
        if (event.key === "Enter") {
        inputRef.current.focus();
        }
    }

    // CLICK FUNCTION SECTION
    const onSubmitRegister = async (event) => {
        event.preventDefault();
    }

    return (
        <div className="register-main-wrap">
            <div className="register-input-wrap">
                <h1>Welcome to Register!</h1>
                <form id="registerForm">
                    <p>Email <span className="text-danger">*</span></p>
                    <input
                        type="email"
                        className="form-control shadow-none"
                        ref={inputEmailRef}
                        value={registerInput.email}
                        onChange={regisMailChangeHandler}
                        onKeyUp={(event) => onEnterSwitch(event, inputUsernameRef)}
                    />
                    <p>Create Username <span className="text-danger">(case sensitive) *</span></p>
                    <input
                        type="text"
                        className="form-control shadow-none"
                        ref={inputUsernameRef}
                        value={registerInput.username}
                        onChange={regisUserChangeHandler}
                        onKeyUp={(event) => onEnterSwitch(event, inputPassRef)}
                    />
                    <p>Create Password <span className="text-danger">(case sensitive) *</span></p>
                    <input
                        type={showPass}
                        className="form-control shadow-none"
                        ref={inputPassRef}
                        value={registerInput.password}
                        onChange={regisPassChangeHandler}
                        onKeyUp={(event) => onEnterSwitch(event, inputConfirmPassRef)}
                    />
                    <p>Confirm Password <span className="text-danger">(must match) *</span></p>
                    <input
                        type={showPass}
                        className="form-control shadow-none"
                        ref={inputConfirmPassRef}
                        onChange={confirmPassChangeHandler}
                        onKeyUp={(event) => onEnterSwitch(event, regisBtnRef)}
                    />
                    <div className="mb-4">
                        <input
                            type="checkbox"
                            className="align-self-start"
                            onClick={showPassHandler}
                        />{" "}
                        Show Password
                    </div>
                </form>
                <div className="register-btn-wrap">
                    <button 
                        form="registerForm"
                        type="submit"
                        className="btn btn-success shadow-none"
                        ref={regisBtnRef}
                        onClick={onSubmitRegister}
                    >
                        Submit
                    </button>
                </div>
            </div>
        </div>
    )
}

export default RegisterPage;