import PropTypes  from 'prop-types';
import { Table, TableHeader, TableData, TableRow, Thead, Tbody } from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
    return (
        <Table>
            <Thead>
                <TableRow>
                    <TableHeader>Type</TableHeader>
                    <TableHeader>Amount</TableHeader>
                    <TableHeader>Currency</TableHeader>
                </TableRow>
            </Thead>

            <Tbody>
                {items.map(({ id, type, amount, currency }) => (
                    <TableRow key={id} >
                        <TableData>{type}</TableData>
                        <TableData>{amount}</TableData>
                        <TableData>{currency}</TableData>
                    </TableRow>
                ))}
            </Tbody>
            
        </Table>
    );
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ).isRequired,
}