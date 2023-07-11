import React from "react";
import InputField from "../../../components/formControl/inputField/inputField";
import { useForm } from "react-hook-form";

const TodoForm = (props: any) => {
  const { onSubmit } = props;

  const form = useForm({
    defaultValues: {
      title: "",
    },
  });

  const handleSubmit = (values: any) => {
    console.log("todoForm", values);
  };

  return (
    <form onSubmit={form.handleSubmit(handleSubmit)}>
      <InputField name="title" label="todo" form={form} />
    </form>
  );
};

export default TodoForm;
