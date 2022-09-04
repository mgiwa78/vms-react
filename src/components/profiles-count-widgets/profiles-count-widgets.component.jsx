import React from "react";
import {
  ProfileWGTContainer,
  ProfileWGTCount,
  ProfileWGTTitle,
} from "./profile-count-widgets.styles";

const ProfileWGT = ({ value }) => {
  return (
    <ProfileWGTContainer>
      <ProfileWGTCount>{value}</ProfileWGTCount>
      <ProfileWGTTitle>Total Profiles</ProfileWGTTitle>
    </ProfileWGTContainer>
  );
};

export default ProfileWGT;
