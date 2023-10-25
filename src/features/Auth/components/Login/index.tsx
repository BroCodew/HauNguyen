import React from "react";
import RegisterForm from "../ResigterForm";
import { useDispatch } from "react-redux";
import { login } from "../../../../redux/reducer/userLogin";
import { unwrapResult } from "@reduxjs/toolkit";
import { useSnackbar } from "notistack";
import LoginForm from "../LoginForm";

const Login = (props: any) => {
  const { closeDialog } = props;
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = async (values: any) => {
    try {
      values.username = values.email;
      const action: any = login(values);
      const resultAction: any = await dispatch(action);
      const data = unwrapResult(resultAction);
      closeDialog();
      console.log("data", data);
    } catch (errors) {
      enqueueSnackbar("Login unsuccessfully", { variant: "error" });

      console.log("đay la ỗi call api dki", errors);
    }
  };
  return <LoginForm onSubmit={handleSubmit} />;
};
export default Login;
