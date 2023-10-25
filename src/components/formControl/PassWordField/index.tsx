import { Controller, useController } from "react-hook-form";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useState } from "react";
import { FormHelperText } from "@mui/material";

const PassWordField = (props: any) => {
  const { errors, name, touchedFields, control, label, getValues } = props;
  const {
    fieldState: { isTouched },
  } = useController({
    name,
    control,

    rules: { required: true },
  });

  const [showPassword, setShowPassWord] = useState(false);

  const toggleShowPassWord = () => {
    setShowPassWord(!showPassword);
  };
  return (
    <>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        name={name}
        render={({ field: { onChange, onBlur, value } }) => (
          <FormControl
            error={!!errors[name]}
            sx={{ m: 1, width: "100%" }}
            variant="standard"
            // fullWidth="true"
          >
            <InputLabel htmlFor={name}>Password</InputLabel>
            <Input
              onBlur={onBlur}
              onChange={onChange}
              id={name}
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={toggleShowPassWord}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
            {errors[name] && (
              <FormHelperText>{errors[name]?.message}</FormHelperText>
            )}
          </FormControl>
        )}
      />
    </>
  );
};

export default PassWordField;
