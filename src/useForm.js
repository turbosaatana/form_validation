import { useState } from 'react';

const useForm = (callback, validate) => {
const[values, setValues] = useState({ name: "", day: "", grade:"" });
const[errors, setErrors] = useState({ name: "", day: "", grade:"" });

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setErrors(validate(values));
    console.log("Submit ok", values);
  };

  return {
      handleChange,
      handleSubmit,
      values,
      errors
  }
};

export default useForm;