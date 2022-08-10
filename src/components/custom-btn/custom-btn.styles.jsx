import styled from "styled-components/macro";
import Button from "react-bootstrap/Button";

export const PrimarBtn = styled(Button)`
  height: 55px;
  width: 120px;
  font-size: 20px;

  &:focus {
    box-shadow: none;
  }
  &:hover {
    background-color: #094196;
  }
`;
