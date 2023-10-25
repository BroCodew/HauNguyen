import {TextField} from "@mui/material";
import {Controller, useController} from "react-hook-form";

const InputField = (props?: any) => {
  const {errors, name, touchedFields, control, label, getValues} =
    props;


  const {
    fieldState: {isTouched},
  } = useController({
    name,
    control,
    rules: {required: true},
  });


  return (
    <>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <TextField
            variant={"outlined"}
            onBlur={onBlur}
            onChange={onChange}
            value={value}
            fullWidth
            error={!!errors[name]}
            label={label}
            helperText={errors[name] && `${errors[name]?.message}`}
          />
        )}
        name={name}
      />


    </>
  );
};

export default InputField;


