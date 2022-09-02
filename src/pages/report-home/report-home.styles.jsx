import styled, { css } from "styled-components/macro";
import Table from "react-bootstrap/Table";
import Col from "react-bootstrap/Col";
import { Container } from "react-bootstrap";

export const HeaderContainer = styled.div`
  background-color: #071b72;
  width: calc(100vw - 390px);

  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  border-radius: 8px;
  margin-bottom: 30px;
  box-shadow: 1px 1px 9px #071b7247;
`;
export const HeaderExitIcon = styled.img``;
export const HeaderTtitle = styled.div`
  font-weight: 600;
  font-size: 30px;
  display: flex;
  justify-content: flex-end;
  align-items: baseline;
  margin-top: 10px;
`;
export const HeaderItems = styled.ul`
  display: flex;
  list-style: none;
  margin-left: 20px;
`;
export const HeaderItem = styled.li`
  font-size: 15px;
  color: #071b7267;
  margin-right: 0px;
  &:hover {
    color: #071b7229;
  }
`;

export const ReportContainer = styled(Col)`
  border-radius: 8px;
  height: max-content;
  padding: 20px 20px;
  border: 1px solid #00000021;

  display: flex;
  flex-direction: column;
`;
export const ReportTableContainer = styled.div`
  max-height: 450px;
  background-color: #fff;
  padding: 0 20px;
  overflow-y: scroll;
  border-top: 1px solid #071b729e;
`;
export const ReportTable = styled(Table)``;
export const ReportHeader = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 700;
  background-color: #fff;
  padding: 20px 30px;

  height: max-content;
  align-items: flex-start;
  align-content: flex-start;
  .header_class {
    display: flex;
    width: 500px;
    justify-content: space-between;
  }
`;
export const ReportTitle = styled.h3`
  color: #000;
`;
export const RRow = styled.tr`
  &.headText {
  }
  height: 40px;
`;
export const RHead = styled.thead`
  color: #000;
  background-color: #fff;
  top: -5px;
`;
export const RBody = styled.tbody``;
export const RH = styled.th`
  color: #000;
  text-transform: uppercase;

  font-size: 18px;
`;
export const RPrioritySpan = styled.span`
  width: max-content;
  height: 5px;
`;
export const RCell = styled.td`
  color: #000;
  width: max-content;
  .priority {
    border-radius: 10px;
    padding: 3px 10px;
    font-weight: 600;
    background-color: #ffffff;

    ${({ priority }) =>
      priority === "High"
        ? css`
            color: white;
            background-color: #ff000076;
          `
        : priority === "Medium"
        ? css`
            background-color: #df8e14a6;

            color: white;
          `
        : priority === "Low"
        ? css`
            color: white;
            background-color: #c2c2c2e4;
          `
        : ""}
  }
`;

export const ReportHomeContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  background-color: #f3f5f9;
  height: 100vh;
  flex-direction: column;
`;
export const Reports = styled.div`
  display: flex;
`;
export const ReportBody = styled.div`
  margin-top: 150px;
`;
