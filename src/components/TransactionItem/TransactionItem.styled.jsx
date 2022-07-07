import styled from 'styled-components';

export const TransactionItemRow = styled.tr`
&:nth-child(2n) {
    background-color: #e9ebf7;
}
`;

export const TransactionItemUnit = styled.td`
padding-top: 3px;
padding-bottom: 3px;

&:not(:last-child) {
    border-right: 1px solid #C9E0FF;
}
`;