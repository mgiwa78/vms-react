import styled from "styled-components/macro";

export const FormInputContainer = styled.div``;
export const FormInput = styled.input`
  width: 100%;
  line-height: 1.5;
  color: #000000;
  background-color: #ffffff;
  font-size: 30px;
  border: 0 !important;
  margin-bottom: 15px;

  border-radius: 0.85rem !important;
  padding-right: 1.5rem !important;
  padding-left: 1.5rem !important;
  padding-top: 1rem !important;
  padding-bottom: 1rem !important;

  &::placeholder {
    color: #00000049;
  }
`;
export const FormInputLabel = styled.label`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 10px;
  color: #000000;
`;
