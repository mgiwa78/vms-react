import styled, { css } from "styled-components/macro";
import Table from "react-bootstrap/Table";
import Col from "react-bootstrap/Col";
import { Container, Row } from "react-bootstrap";

export const ApprovalWidgetContainer = styled(Col)`
  background-color: #fff;
  border-radius: 8px;
  margin-right: 50px;
  height: max-content;
  padding: 10px 30px 30px 30px;
  border: 1px solid #00000021;

  position: relative;
`;
export const ApprovalWidgetTableContainer = styled.div`
  max-height: 450px;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  &::-webkit-scrollbar {
    display: none;
  }
  border-top: 1px solid #071b729e;
`;
export const ApprovalWidgetTable = styled(Table)``;
export const ApprovalWidgetHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin: 12px 0;
  font-weight: 700;
  height: 30px;
  width: 100%;
`;
export const ApprovalWidgetTitle = styled.h3`
  color: #000;
  font-size: 22px;
  margin: 0;
`;
export const AWRow = styled.tr`
  &.headText {
  }
  height: 40px;
`;
export const AWHead = styled.thead`
  color: #000;
  position: sticky;
  background-color: #fff;
  top: -5px;
`;
export const AWBody = styled.tbody``;
export const AWH = styled.th`
  color: #000;
  text-transform: uppercase;

  font-size: 16px;
`;
export const AWPrioritySpan = styled.span`
  width: max-content;
  height: 5px;
`;
export const AWCell = styled.td`
  color: #000;
  width: max-content;
  font-size: 14px;
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
