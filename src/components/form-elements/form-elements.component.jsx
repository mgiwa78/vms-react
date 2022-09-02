import React from "react";
import {
  FormInput,
  FormInputContainer,
  FormInputLabel,
  TextDrpDwnOptions,
  TextDrpDwnSelect,
} from "./form-elements.styles";

export const TextInput = ({
  InputPosition,
  label,
  placeholder,
  type,
  value,
  handleChange,
  lg,
  bg,
  name,
  checkIn,
  approvalSearch,
}) => {
  return (
    <FormInputContainer
      className={approvalSearch ? `${"approvalSearch"}` : ""}
      lg={lg}
    >
      <FormInputLabel>{label}</FormInputLabel>
      <FormInput
        bg={bg}
        InputPosition={InputPosition}
        placeholder={placeholder}
        onChange={handleChange}
        type={type}
        name={name}
        value={value}
        className={
          (checkIn ? `${"checkInForm"}` : "",
          approvalSearch ? `${"approvalSearch"}` : "")
        }
      ></FormInput>
    </FormInputContainer>
  );
};
export const TextDrpDwn = ({
  label,
  placeholder,
  options,
  handleChange,
  lg,
  bg,
  value,
  sortOption,
  name,
}) => {
  return (
    <FormInputContainer className={`${sortOption ? "sortOption" : ""}`} lg={lg}>
      <FormInputLabel>{label}</FormInputLabel>
      <TextDrpDwnSelect
        bg={bg}
        placeholder={placeholder}
        onChange={handleChange}
        name={name}
        className={`${sortOption ? "sortOption" : ""}`}
        value={value}
      >
        {options.map((option) => (
          <TextDrpDwnOptions key={`${option}_Option`} value={option}>
            {option}
          </TextDrpDwnOptions>
        ))}
      </TextDrpDwnSelect>
    </FormInputContainer>
  );
};
