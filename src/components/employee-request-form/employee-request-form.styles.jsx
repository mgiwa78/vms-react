import styled, { css } from "styled-components/macro";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export const EmployeeRquestFormContainer = styled(Col)`
  background-color: #fff;
  padding: 20px;
  height: max-content;

  border-radius: 8px;
  box-shadow: 1px 1px 9px 0px #071b7229;
  margin-bottom: 50px;

  .dateContainer {
    margin-top: 40px;
    width: max-content;
  }
  .datePicker {
    width: 160px;
    margin-right: 20px;
    input {
    }
  }
  .Bttom {
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
