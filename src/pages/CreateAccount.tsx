import {
  Box,
  Button,
  Container,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import Header from "../comps/Header";
import { ErrorSharp, Visibility, VisibilityOff } from "@mui/icons-material";
import React from "react";
import { useFormik } from "formik";
import { FormErrors, FormValues } from "../interfaces/UserForms";
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const mySwal = withReactContent(Swal);

const initialValues = {
  email: "",
  password: "",
};

const validate = (values: FormValues): FormErrors => {
  const errors: FormErrors = {};

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.password) {
    errors.password = "Required";
  } else if (values.password.length < 10) {
    errors.password = "Password needs to be at least 10 characters long.";
  }

  return errors;
};

export const signUpEmailAndPassword = (values: FormValues) => {
  console.log("here");
  createUserWithEmailAndPassword(auth, values.email, values.password)
    .then((userCredential) => {
      mySwal
        .fire("Success!", "The account was created successfully", "success")
        .then(() => location.replace("/"));
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      mySwal.fire("Error", errorMessage, "error");
    });
};

const CreateAccount = () => {
  const formik = useFormik({
    initialValues: initialValues,
    validate: validate,
    onSubmit: signUpEmailAndPassword,
  });

  return (
    <Container maxWidth="md" sx={{ justifySelf: "center" }}>
      <Header
        title="Sign Up"
        subtitle="Insert the following data to create an account."
      />
      <form onSubmit={formik.handleSubmit}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 1,
          }}
        >
          <TextField
            fullWidth
            id="email"
            name="email"
            label="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            autoComplete="on"
          />
          <TextField
            fullWidth
            id="password"
            name="password"
            label="Password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
            autoComplete="on"
          />
          <Box>
            <Button type="submit">Sign up</Button>
          </Box>
        </Box>
      </form>
    </Container>
  );
};

export default CreateAccount;
