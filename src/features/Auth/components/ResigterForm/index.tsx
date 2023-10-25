import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import InputField from "../../../../components/formControl/inputField/inputField";
import { Button, LinearProgress } from "@mui/material";
import PassWordField from "../../../../components/formControl/PassWordField";

const RegisterForm = (props: any) => {
  const { onSubmit } = props;

  // tạo schema để validate
  const schema = yup.object({
    fullName: yup
      .string()
      .required("Please enter fullName")
      .min(4, "must 4")
      .test("Should two word", "Please enter two word", (value) => {
        return value.split(" ").length >= 2;
      }),
    email: yup
      .string()
      .required("Please enter email")
      .min(4, "must 4")
      .email("please enter valid email"),
    password: yup.string().required("Please enter passWord").min(4, "must 4"),
    retypePassword: yup
      .string()
      .required("Please enter retypePassword")
      .oneOf([yup.ref("password")], "password not match"),
  });

  const {
    formState: { errors, touchedFields, isValid, isSubmitting },
    handleSubmit,
    control,
    getValues,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      retypePassword: "",
    },
  });

  const handleSubmitInput = async (values: any) => {
    await onSubmit(values);
    console.log("submitRegisterForm");
  };
  // isSubmitting && return (<div>ádsadasd</div>)

  return (
    <div>
      <form onSubmit={handleSubmit(handleSubmitInput)}>
        <InputField
          control={control}
          name="fullName"
          rules={{ required: true }}
          errors={errors}
          touchedFields={touchedFields}
          getValues={getValues}
          isValid={isValid}
          label={"Full Name"}
        />
        <InputField
          control={control}
          name="email"
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
        <PassWordField
          control={control}
          name="retypePassword"
          rules={{ required: true }}
          errors={errors}
          touchedFields={touchedFields}
          getValues={getValues}
          isValid={isValid}
          label={"Retype password"}
        />
        <Button type={"submit"} disabled={isSubmitting}>
          Create an account
        </Button>
      </form>
      {isSubmitting && <LinearProgress />}
    </div>
  );
};
export default RegisterForm;
