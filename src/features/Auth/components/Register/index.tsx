import React from "react";
import RegisterForm from "../ResigterForm";
import { useDispatch } from "react-redux";
import { register } from "../../../../redux/reducer/userLogin";
import { unwrapResult } from "@reduxjs/toolkit";
import { useSnackbar } from "notistack";

const Register = (props: any) => {
  const { closeDialog } = props;
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = async (values: any) => {
    try {
      values.username = values.email;
      const action: any = register(values);
      const resultAction: any = await dispatch(action);
      const data = unwrapResult(resultAction);
      closeDialog();
      console.log("data", data);
      enqueueSnackbar("Register successfully", { variant: "success" });
    } catch (errors) {
      enqueueSnackbar("Register unsuccessfully", { variant: "error" });

      console.log("đay la ỗi call api dki", errors);
    }
  };
  return <RegisterForm onSubmit={handleSubmit} />;
};
export default Register;
