import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import InputField from "../../../../components/formControl/inputField/inputField";
import { Button, LinearProgress } from "@mui/material";
import PassWordField from "../../../../components/formControl/PassWordField";

const LoginForm = (props: any) => {
  const { onSubmit } = props;

  // tạo schema để validate
  const schema = yup.object({
    identifier: yup
      .string()
      .required("Please enter email")
      .min(4, "must 4")
      .email("please enter valid email"),
    password: yup.string().required("Please enter passWord"),
  });

  const {
    formState: { errors, touchedFields, isValid, isSubmitting },
    handleSubmit,
    control,
    getValues,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      identifier: "",
      password: "",
    },
  });

  const handleSubmitInput = async (values: any) => {
    await onSubmit(values);
    console.log("submitRegisterForm");
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(handleSubmitInput)}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <InputField
          control={control}
          name="identifier"
          rules={{ required: true }}
          errors={errors}
          touchedFields={touchedFields}
          getValues={getValues}
          isValid={isValid}
          label={"Email"}
        />
        <PassWordField
          control={control}
          name="password"
          rules={{ required: true }}
          errors={errors}
          touchedFields={touchedFields}
          getValues={getValues}
          isValid={isValid}
          label={"password"}
        />

        <Button
          type={"submit"}
          disabled={isSubmitting}
          style={{ float: "left", marginRight: "auto" }}
        >
          Sign In
        </Button>
      </form>
      {isSubmitting && <LinearProgress />}
    </div>
  );
};
export default LoginForm;
