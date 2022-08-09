import styled from "styled-components/macro";

export const CheckInContainerRight = styled.div`
  background-color: #f9f3f3;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const CheckInLoginTextContainer = styled.div`
  height: 50%;
  padding: 0px 20px;
  font-weight: 600;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const CheckInLoginText = styled.div`
  font-size: 20px;
  color: #0000006c;
  width: 440px;
`;
export const CheckInRightContainer = styled.div`
  width: 450px;
  text-align: left;
`;
export const CheckInRightTitle = styled.p`
  font-size: 27px;
  font-weight: 600;
  margin: 0;
`;
export const CheckInSubText = styled.p`
  font-size: 16px;
  font-weight: 600;
  color: #00000071;
  margin-bottom: 23;
`;
export const CheckInForm = styled.form`
  display: flex;
  text-align: left;
  flex-direction: column;
`;
export const CheckInFormBtm = styled.div``;
export const CheckInFormInput = styled.input`
  width: 100%;
  line-height: 1.5;
  color: #000000;
  background-color: #ffffff;
  font-size: 30px;
  border: 0 !important;
  margin-bottom: 15px;

  border-radius: 0.85rem !important;
  padding-right: 1.5rem !important;
  padding-left: 1.5rem !important;
  padding-top: 1rem !important;
  padding-bottom: 1rem !important;

  &::placeholder {
    color: #00000049;
  }
`;
export const CheckInFormLabel = styled.label`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 10px;
  color: #000000;
`;
