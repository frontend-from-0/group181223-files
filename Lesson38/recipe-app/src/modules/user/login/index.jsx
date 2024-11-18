import { useState } from "react";
import './styles.css';

const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
const passwordPattern = /^.{8,}$/;

export const LoginForm = () => {
  const [emailInput, setEmailInput] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!emailError) {
      console.log(
        "Form submited with the following data:",
        emailInput,
        passwordInput
      );
      setEmailInput("");
      setPasswordInput("");
    } else {
      console.error("Form submitted is invalid input");
    }
  };

  const handleEmailChange = (e) => {
    setEmailInput(e.target.value);
    if (emailPattern.test(e.target.value)) {
      setEmailError("");
    } else {
      setEmailError(
        "Please enter a valid email address, e.g. name@domain.com."
      );
    }
  };
  const handlePasswordChange = (e) => {
    setPasswordInput(e.target.value);
    if (passwordPattern.test(e.target.value)) {
      setPasswordError("");
    } else {
      setPasswordError("Password should be minimum 8 characters.");
    }
  };

  const isFormEmpty = emailInput.length === 0 || passwordInput.length === 0;

  return (
    <form className="login-container" onSubmit={handleSubmit} noValidate>
      <div className="input-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={emailInput}
          onChange={handleEmailChange}
          placeholder="name@gmail.com"
          className={emailError ? "error" : ""}
        />
        {emailError && <p className="error-message">{emailError}</p>}
      </div>
      <div className="input-group">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={passwordInput}
          onChange={handlePasswordChange}
          className={emailError ? "error" : ""}
        />
        {passwordError && <p className="error-message">{passwordError}</p>}
      </div>
      <input
          type="submit"
          value="Update email"
          disabled={!!emailError || !!passwordError || isFormEmpty}
          className="btn-success"
        />
    </form>
  );
};
