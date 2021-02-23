import React from "react";
import { useForm } from "react-hook-form";

function TreasureForm() {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(watch("example")); // watch input value by passing the name of it
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input name="firstName" ref={register} />
        <select name="gender" ref={register}>
          <option value="female">female</option>
          <option value="male">male</option>
          <option value="other">other</option>
        </select>
        <input type="submit" />
      </form>
    </>
  );
}

export default TreasureForm;
