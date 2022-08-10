import React from "react";
import {
  FormInput,
  FormInputContainer,
  FormInputLabel,
} from "./form-elements.styles";

export const TextInput = ({
  label,
  placeholder,
  type,
  value,
  handleChange,
}) => {
  return (
    <FormInputContainer>
      <FormInputLabel>{label}</FormInputLabel>
      <FormInput
        placeholder={placeholder}
        onChange={handleChange}
        type={type}
      ></FormInput>
    </FormInputContainer>
  );
};
