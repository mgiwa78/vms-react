import styled, { css } from "styled-components/macro";
import Table from "react-bootstrap/Table";
import Col from "react-bootstrap/Col";

export const ApprovalReportContainer = styled(Col)`
  background-color: #fff;
  border-radius: 8px;
  height: max-content;
  padding: 30px 50px;
  position: relative;
`;
export const ApprovalReportTableContainer = styled.div`
  max-height: 450px;
  overflow-y: scroll;
  margin-top: 20px;
  border-top: 1px solid #071b729e;
`;
export const ApprovalReportTable = styled(Table)``;
export const ApprovalReportHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 12px 0;
  font-weight: 700;
  width: 100%;
  height: 40px;
  align-items: baseline;
  align-content: flex-start;
  .header_class {
    display: flex;

    width: 500px;
    justify-content: space-between;
  }
`;
export const ApprovalReportTitle = styled.h3`
  color: #000;
  font-size: 25px;
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
  font-size: 14px;

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
  .approveCell {
  }
`;

export const ApprovalHomeContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  background-color: #f3f5f9;
  height: max-content;
  min-height: 100vh;
  width: 100%;
  flex-direction: column;
`;
export const ApprovalBody = styled.div`
  padding: 150px 50px 50px 50px;
`;
export const ApprovalReports = styled.div`
  display: flex;
`;
export const ApprovalBtn = styled.div`
  border-radius: 5px;
  display: flex;
  justify-content: flex-start;
  color: #071b72;
  width: max-content;
  padding: 0px 10px;
  text-transform: uppercase;
  cursor: pointer;
  font-weight: 700;
  &:hover {
    color: white;
    background-color: #5d7afc;
  }
`;
