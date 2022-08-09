import React from "react";
import {
  ListItem,
  ListValue,
  QRSvg,
  ValidUserCheckinContainer,
  ValidUserLeft,
  ValidUserList,
  ValidUserListItem,
  ValidUserProfile,
  ValidUserRight,
  ValidUserRow,
  ValidUserRowID,
  ValidUserRowItem,
} from "./check-in-valid-user.styles";

const ValidUserCheckin = () => {
  return (
    <ValidUserCheckinContainer>
      <ValidUserLeft>
        <ValidUserList>
          <ListItem>Personel ID:</ListItem>
          <ListItem>Name:</ListItem>
          <ListItem>Department:</ListItem>
          <ListItem>Check-In:</ListItem>
        </ValidUserList>
        <ValidUserList>
          <ListValue>223-112-FIN</ListValue>
          <ListValue>Andrew Garfield</ListValue>
          <ListValue>Finance</ListValue>
          <ListValue>08:14:23 AM</ListValue>
        </ValidUserList>
      </ValidUserLeft>

      <ValidUserRight>
        <ValidUserProfile
          style={{
            backgroundImage:
              "url('https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166_960_720.jpg')",
          }}
        ></ValidUserProfile>
      </ValidUserRight>
    </ValidUserCheckinContainer>
  );
};

export default ValidUserCheckin;
