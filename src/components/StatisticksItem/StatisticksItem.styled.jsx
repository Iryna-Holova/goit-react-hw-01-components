import styled from 'styled-components';

export const StatistickListItem = styled.li`
display: flex;
flex-direction: column;
justify-content: space-evenly;
width: 70px;
height: 70px;
align-items: center;
color: #ffffff;
background-color: ${({ backGround }) => (!backGround ? '#648FCC' : backGround)};
`;

export const StatisticsLabel = styled.span`
font-size: 12px;
`;

export const StatisticsValue = styled.span`
font-size: 22px;
`;
