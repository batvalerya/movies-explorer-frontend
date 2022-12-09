import { useState, useCallback } from "react";

function useFormWithValidation() {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setValid] = useState(false);

  const handleChange = (evt) => {
    const { value, name } = evt.target;

    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: evt.target.validationMessage });
    setValid(evt.target.closest("form").checkValidity());
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setValid(newIsValid);
    },
    [setValues, setErrors, setValid]
  );

  return { values, handleChange, errors, isValid, resetForm };
}

export default useFormWithValidation;