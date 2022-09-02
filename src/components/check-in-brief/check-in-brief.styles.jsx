import styled from "styled-components/macro";
import { Col, Container, Table } from "react-bootstrap";

export const CheckInBriefContainer = styled(Col)`
  background-color: #fff;
  border-radius: 8px;
  height: max-content;
  padding: 10px 30px 30px 30px;
  display: flex;
  flex-direction: column;
  border: 1px solid #00000021;
`;
export const CheckInBriefTableContainer = styled.div`
  max-height: 450px;
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
  font-size: 22px;
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

  font-size: 18px;
`;
export const CBCell = styled.td`
  color: #000;
  font-size: 14px;

  width: max-content;

  &.time {
    color: #000000;
  }
`;
