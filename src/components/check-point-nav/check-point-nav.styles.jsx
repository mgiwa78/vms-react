import styled from "styled-components/macro";

export const CheckPointNavContainer = styled.div`
  display: flex;
  padding: 20px 100px;

  justify-content: space-between;
`;
export const CheckPointNavLeft = styled.div`
  display: flex;
`;
export const CheckPointNavRight = styled.div``;
export const CheckPointLink = styled.div`
  font-size: 25px;
  color: #06162e;
  padding: 15px 20px;
  border-radius: 5px;
  font-weight: 600;

  &:hover {
    color: #fff;
    background-color: #06162e;
    border: none;
  }
`;
