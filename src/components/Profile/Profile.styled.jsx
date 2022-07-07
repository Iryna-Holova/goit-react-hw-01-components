import styled from 'styled-components';

export const ProfileCard = styled.div`
text-align: center;
width: 300px;
margin-right: auto;
margin-left: auto;
margin-bottom: 50px;
background-color: #ffffff;
border-radius: 5px;
box-shadow: 0px 4px 10px 4px #3E5A80;
`;

export const ProfileDescription = styled.div`
padding: 20px;
`;

export const ProfileImage = styled.img`
margin-left: auto;
margin-right: auto;
margin-bottom: 20px;
width: 150px;
height: 150px;
object-fit: cover;
border-radius: 50%;
`;

export const ProfileName = styled.p`
font-size: 20px;
font-weight: 700;
margin-bottom: 10px;
`;

export const ProfileTag = styled.p`
color: #648FCC;
margin-bottom: 10px;
`;

export const ProfileLocation = styled.p`
color: #648FCC;
`;

export const Stats = styled.ul`
display: flex;
background-color: #C9E0FF;
border-bottom-left-radius: 5px;
border-bottom-right-radius: 5px;
`;

export const StatsItem = styled.li`
padding-top: 10px;
padding-bottom: 10px;
flex-basis: calc(100% / 3);
display: flex;
flex-direction: column;
text-align: center;
border-top: 1px solid rgba(0, 0, 0, 0.2);

&:not(:last-child) {
  border-right: 1px solid rgba(0, 0, 0, 0.2);
}
`;

export const StatsLabel = styled.span`
color: #648FCC;
margin-bottom: 3px;
font-size: 16px;
`;

export const StatsQuantity = styled.span`
font-weight: 700;
`;