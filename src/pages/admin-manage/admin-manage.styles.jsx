import styled from "styled-components/macro";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";

export const HeaderContainer = styled.div`
  background-color: #071b72;
  width: calc(100vw - 390px);

  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  padding: 0 50px;
  padding-bottom: 100px;
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

export const AdminManageContainer = styled.div``;
export const AdminManageBody = styled.div`
  padding: 150px 50px 0 50px;
`;
export const AdminManageBodyRow = styled(Row)`
  display: flex;

  &.widgwts {
  }
`;
export const AMBody = styled.tbody``;
export const AdminManageTable = styled(Table)`
  border-top: 1px solid #81818149;
`;
export const AdminManageTableTitle = styled.h3`
  color: #000;
  background-color: #fff;
  height: max-content;
  font-weight: 700;
`;
export const AdminManageTableTitleContainer = styled.div``;
export const AdminManageTableHead = styled.div`
  width: 100%;
  padding: 20px 20px 0px 20px;
  display: flex;
  height: 85px;
  z-index: -1;
  border-bottom: 1px solid #00000021;

  justify-content: space-between;
  .header_class {
    display: flex;

    width: 500px;
    justify-content: space-between;
  }
`;
export const AdminManageSECContainer = styled(Col)`
  border-radius: 10px;
  margin-bottom: 50px;
  border: 1px solid #00000021;
  min-height: 800px;
  background-color: #fff;
`;
export const AdminManageTableContainer = styled(Col)`
  border-radius: 10px;
  margin-bottom: 50px;

  &::-webkit-scrollbar {
    display: none;
  }

  padding: 0px 20px 0 20px;
  max-height: 700px;
  width: 100%;
  overflow-y: scroll;
`;
export const AdminManageTRow = styled.tr`
  height: 50px;
  &.body_row {
    border-top: 1px #81818149 solid;
  }
`;
export const AdminManageThead = styled.thead`
  padding: 10px;
  font-size: 20px;
  color: #00000068;
  position: sticky;
  background-color: #fff;
  top: -1px;
  position: sticky;
`;
export const AMTH = styled.th``;
export const AMTd = styled.td`
  &.name {
    color: #000;
    font-weight: 600;
  }
  &.position {
    text-transform: uppercase;
  }
`;
