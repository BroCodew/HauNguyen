import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import InputField from "../../../components/formControl/inputField/inputField";
import { Button } from "@mui/material";

const TodoForm = (props: any) => {
  const { onSubmit } = props;

  // tạo schema để validate
  const schema = yup
    .object({
      title: yup.string().required("Please enter title").min(4, "must 4"),
    })
    .required();

  const {
    formState: { errors, touchedFields, isValid },
    handleSubmit,
    control,
    getValues,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      title: "",
    },
  });

  const handleSubmitInput = (values: any) => {
    onSubmit(values);
  };
  return (
    <form onSubmit={handleSubmit(handleSubmitInput)}>
      <InputField
        control={control}
        name="title"
        rules={{ required: true }}
        errors={errors}
        touchedFields={touchedFields}
        getValues={getValues}
        isValid={isValid}
      />
      <Button type={"submit"}></Button>
      <input type="submit" value="submit" />
    </form>
  );
};

export default TodoForm;
