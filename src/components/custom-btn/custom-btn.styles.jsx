import styled, { css } from "styled-components/macro";
import Button from "react-bootstrap/Button";

export const PrimaryBtn = styled.div`
  background-color: #0d57c571;
  height: 55px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  font-size: 20px;
  cursor: pointer;

  &:focus {
    box-shadow: none;
  }
  &:hover {
    background-color: #6665dd;
  }
  &.off {
    background-color: #696969;
  }
  &.danger {
    background-color: #ff596497;
  }
  &.checkInBtn {
    margin-top: 40px;
  }

  ${({ btnType }) =>
    btnType === "red"
      ? css`
          background-color: #ff596497;
          border: none;
          margin-left: 20px;
          &:hover {
            background-color: #ff5964;
          }
        `
      : ""}

  ${({ form_btn }) =>
    form_btn
      ? css`
          width: max-content;
          margin-left: 20px;
          height: 35px;
          font-size: 17px;
        `
      : ""}
`;
