import styled, { css } from "styled-components/macro";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Form } from "react-bootstrap";

export const EditProfileFormContainer = styled(Form)`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  border: 1px solid #00000021;

  margin-bottom: 50px;
  .dateContainer {
    display: flex;
    width: max-content;
  }
  .datePicker {
    width: 100px;
    &:nth-child(1) {
      margin-right: 10px;
    }
  }

  .Bttom {
    width: fit-content !important;
    margin-bottom: 15px;
    align-items: flex-end;
    &:last-child {
      margin-bottom: 0;
    }
    .datePickerContainer {
      height: max-content;
    }
  }
`;
export const FormRow = styled(Row)``;
export const FormTitle = styled.h3`
  font-size: 22px;

  text-transform: uppercase;
  font-weight: 700;
`;
