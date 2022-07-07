import { TransactionItemRow, TransactionItemUnit } from "./TransactionItem.styled";
import PropTypes from "prop-types";

export const TransactionItem = ({ type, amount, currency }) => {
    return (
        <TransactionItemRow>
            <TransactionItemUnit>{type}</TransactionItemUnit>
            <TransactionItemUnit>{amount}</TransactionItemUnit>
            <TransactionItemUnit>{currency}</TransactionItemUnit>
        </TransactionItemRow>
    );
};

TransactionItem.propTypes = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
};