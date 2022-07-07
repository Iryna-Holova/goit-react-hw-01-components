import styled from 'styled-components';

export const TransactionTable = styled.table`
margin: 0 auto;
background-color: #ffffff;
box-shadow: 0 5px 7px -1px #3E5A80;
font-size: 10px;
border-collapse: collapse;
`;

export const TransactionHead = styled.thead`
text-transform: uppercase;
background-color: #648FCC;
color: #ffffff;
`;

export const TransactionHeadItem = styled.th`
font-weight: 400;
width: 120px;
padding-top: 3px;
padding-bottom: 3px;
&:not(:last-child) {
    border-right: 1px solid #C9E0FF;
}
`;