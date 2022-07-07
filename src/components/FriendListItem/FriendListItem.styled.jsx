import styled from 'styled-components';

export const FriendListItem = styled.li`
background-color: #ffffff;
padding: 3px 8px 3px 8px;
border-radius: 3px;
box-shadow: 0 5px 7px -1px #3E5A80;
display: flex;
align-items: center;

&:not(:last-child) {
    margin-bottom: 10px;
}
`;

export const FriendStatusOn = styled.span`
width: 20px;
height: 20px;
margin-right: 8px;
background-color: #34ebae;
border-radius: 50%;
`;

export const FriendStatusOff = styled.span`
width: 20px;
height: 20px;
margin-right: 8px;
background-color: #eb3453;
border-radius: 50%;
`;

export const FriendAvatar = styled.img`
border-radius: 3px;
margin-right: 8px;
`;

export const FriendName = styled.p`
font-size: 22px
`;