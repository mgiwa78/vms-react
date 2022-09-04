import styled from "styled-components/macro";
import { Col, Table } from "react-bootstrap";

export const CheckInBriefContainer = styled(Col)`
  background-color: #fff;
  border-radius: 8px;
  height: max-content;
  padding: 10px 30px 30px 30px;
  display: flex;
  height: 615px;

  flex-direction: column;
  border: 1px solid #00000021;
  position: relative;
`;
export const CheckInBriefTableContainer = styled.div`
  max-height: 499px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  &::-webkit-scrollbar-track {
    width: 10px;
  }
  border-top: 1px solid #071b729e;
`;
export const CheckInBriefTable = styled(Table)`
  max-width: 600px;
`;
export const CheckInBriefHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 12px 0;
  font-weight: 700;
  height: 30px;

  align-items: baseline;
`;
export const CheckInBriefTitle = styled.h3`
  font-size: 20px;
`;
export const CBRow = styled.tr`
  &.headText {
  }
  height: 40px;
`;
export const CBHead = styled.thead`
  color: #000;
  position: sticky;
  background-color: #fff;
  top: -5px;
`;
export const CBBody = styled.tbody``;
export const CBH = styled.th`
  color: #000;
  text-transform: uppercase;

  font-size: 14px;
`;
export const CBCell = styled.td`
  color: #000;
  font-size: 13px;

  width: max-content;

  &.time {
    color: #000000;
  }
`;
export const CIBPagination = styled.div`
  width: 100%;
  justify-content: space-between;
  display: flex;
  height: 50px;
  background-color: #00000016;
  margin-top: 20px;
  align-items: center;
  padding: 0 20px;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  position: absolute;
  bottom: 0;
  left: 0;
`;
export const CIBPageBtn = styled.div`
  width: max-content;
  height: max-content;
  padding: 2px 10px;
  min-height: 30px;
  min-width: 32px;
  cursor: pointer;
  border-radius: 8px;
  background-color: #b3b3b3a8;
  &:hover {
    background-color: #919090;
  }
  &.disabled {
    background-color: #d7d7d77f;
  }
`;
