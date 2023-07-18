import styled from '@emotion/styled';

export const FriendsList = styled.ul`
  width: 475px;
  margin-left: auto;
  margin-right: auto;
`;

export const FriendItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;

  padding: 20px;
  margin-bottom: 20px;
  box-shadow: -1px 1px 7px 1px rgba(0, 0, 0, 0.49);
  &:last-child {
    margin-bottom: 0;
  }
`;

export const Status = styled.span`
  width: 30px;
  height: 30px;
  background-color: ${props => (props.isOnline ? 'green' : 'red')};
  border-radius: 50%;
`;

export const Avatar = styled.img`
  width: 100px;
  margin-left: 30px;
`;

export const Name = styled.p`
  margin-left: 30px;
  font-size: 30px;
  font-weight: 700;
`;

export const Online = styled.p`
  background-color: green;
`;

export const Offline = styled.p`
  background-color: red;
`;