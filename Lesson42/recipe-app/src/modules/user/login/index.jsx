import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import "./styles.css";

const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
const passwordPattern = /^.{8,}$/;

export const LoginForm = () => {
  const [emailInput, setEmailInput] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!emailError) {
      console.log(
        "Form submited with the following data:",
        emailInput,
        passwordInput,
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
        "Please enter a valid email address, e.g. name@domain.com.",
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
    <Container component="main" maxWidth="sm" sx={{ margin: "40px auto" }}>
      <form onSubmit={handleSubmit} noValidate>
        <Stack spacing={4}>
          <TextField
            id="email"
            label="Email"
            autoComplete="on"
            type="email"
            error={!!emailError}
            value={emailInput}
            onChange={handleEmailChange}
            helperText={emailError}
          />

          <TextField
            id="password"
            label="Password"
            autoComplete="on"
            type="password"
            error={!!passwordError}
            value={passwordInput}
            onChange={handlePasswordChange}
            helperText={passwordError}
          />

          <Stack spacing={4} direction="row" justifyContent={'space-around'}>
            <Button variant="text" fullWidth onClick={() => navigate("/user/register")}>
              Register
            </Button>
            <Button
              variant="contained"
              type="submit"
              fullWidth
              disabled={!!emailError || !!passwordError || isFormEmpty}
            >
              Login
            </Button>
          </Stack>
        </Stack>
      </form>
    </Container>
  );
};
