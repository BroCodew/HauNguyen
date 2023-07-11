import { TextField } from "@mui/material";
import React from "react";
import { Controller } from "react-hook-form";

const InputField = (props: any) => {
  const { form, name, label, disabled, control } = props;
  return (
    <Controller
      rules={{
        required: true,
      }}
      control={control || null}
      render={({ field: { onChange, onBlur, value } }) => (
        <TextField placeholder="First name" onBlur={onBlur} value={value} />
      )}
      name="firstName"
    />
    //     <Controller render={({ field: { onChange, onBlur, value } }) => (
    //         <TextField
    //           placeholder="First name"
    //           onBlur={onBlur}
    //           value={value}
    //         />
    //   )}))
  );
};

export default InputField;
