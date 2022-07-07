import { TransactionItem } from "components/TransactionItem/TransactionItem";
import { TransactionTable, TransactionHead, TransactionHeadItem } from "components/TransactionHistory/TransactionHistory.styled";
import PropTypes from "prop-types";

export const TransactionHistory = ({ items }) => {
    return (
        <TransactionTable>
            <TransactionHead>
                <tr>
                    <TransactionHeadItem>Type</TransactionHeadItem>
                    <TransactionHeadItem>Amount</TransactionHeadItem>
                    <TransactionHeadItem>Currency</TransactionHeadItem>
                </tr>
            </TransactionHead>
            <tbody>
                {items.map(({id, type, amount, currency}) => (
                    <TransactionItem
                        key={id}
                        type={type}
                        amount={amount}
                        currency={currency}
                    />
                ))}
            </tbody>
        </TransactionTable>
    );
};

TransactionHistory.propTypes = {
    items: PropTypes.array.isRequired,
};