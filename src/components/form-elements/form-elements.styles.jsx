import styled, { css } from "styled-components/macro";
import Col from "react-bootstrap/Col";

export const FormInputContainer = styled(Col)`
  &.sortOption {
    &.col {
      flex: 0;
    }
  }
  &.approvalSearch {
    width: 300px;
  }
`;
export const FormInput = styled.input`
  color: #000000;
  border: 0 !important;

  padding-right: 1rem !important;
  padding-left: 1rem !important;
  line-height: 1.5;

  width: 100%;

  &::placeholder {
    color: #00000049;
  }
  &.checkInForm {
    height: 47px;
    width: 400px;
    margin-left: 20px;
  }
  &.approvalSearch {
    height: 47px;
    width: 300px;
    height: 36px;
    margin-top: 5px;
  }
  ${({ bg }) => css`
    background-color: #d1d1d165;
  `}
  ${({ InputPosition }) =>
    InputPosition === "login"
      ? css`
          font-size: 30px;
          padding-top: 1rem;
          padding-bottom: 1rem;
        `
      : InputPosition === "form_input"
      ? css`
          width: 100%;
          font-size: 17px;
          border-radius: 5px;

          padding-top: 0.2rem;
          padding-bottom: 0.2rem;
        `
      : InputPosition === "reportSearch"
      ? css`
          font-size: 17px;
          width: 450px;
          height: 32px;
          border-radius: 5px;
          margin-right: 20px;
          padding-top: 0.2rem;
          padding-bottom: 0.2rem;
        `
      : ""}
`;
export const FormInputLabel = styled.label`
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 10px;
  color: #0000007b;
  &.dateLabel {
    margin-bottom: 0;
  }
`;
export const TextDrpDwnSelect = styled.select`
  width: 100%;
  height: 35px;
  font-size: 20px;
  text-transform: capitalize;

  &.sortOption {
    width: 150px;
    margin: 0;
  }
`;
export const TextDrpDwnOptions = styled.option``;
