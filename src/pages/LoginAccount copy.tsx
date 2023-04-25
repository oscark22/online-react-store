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
import React, { useContext } from "react";
import { useFormik } from "formik";
import { FormErrors, FormValues } from "../interfaces/UserForms";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import auth, { googleProvider } from "../firebase";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { AuthContext } from "../context/AuthContext";

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

const LoginAccount = () => {
  const authContext = useContext(AuthContext);

  const signInEmailAndPassword = (values: FormValues) => {
    signInWithEmailAndPassword(auth, values.email, values.password)
      .then((userCredential) => {
        mySwal
          .fire("Success!", "You have been logged in successfully", "success")
          .then(() => {
            location.replace("/");
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        mySwal.fire("Error", errorMessage, "error");
      });
  };

  const signInWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);

        if (!credential) {
          return;
        }

        const token = credential.accessToken;
        const user = result.user;

        location.replace("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);

        mySwal.fire("Error", errorMessage, "error");
      });
  };

  const formik = useFormik({
    initialValues: initialValues,
    validate: validate,
    onSubmit: signInEmailAndPassword,
  });

  return (
    <Container maxWidth="md" sx={{ justifySelf: "center" }}>
      <Header
        title="Sign In"
        subtitle="Insert the following data to sign in into your account."
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
            <Button type="submit">Sign in</Button>
          </Box>
        </Box>
      </form>
      <form onSubmit={formik.handleSubmit}>
        <Button variant="contained" onClick={signInWithGoogle} fullWidth>
          Google
        </Button>
      </form>
    </Container>
  );
};

export default LoginAccount;
