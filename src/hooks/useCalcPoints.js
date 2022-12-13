import { useState, useEffect, useContext } from 'react';
import ErrorContext from '../context/errorContext';

import { createTransactionData } from '../utils/createTransactionData';
import { getMonthIndexes } from '../utils/getMonthIndexes';
import { sortUserAmountArray } from '../utils/sortUserAmountArray';
// ErrorContext
export function useCalcPoints(userArray, error) {
    const { setErrorMessage } = useContext(ErrorContext);
    const [transActionDetails, setTransActionDetails] = useState({
        readyTransactions: [],
        transActionDetails: {},
        first_name: '',
        last_name: '',
    });

    useEffect(() => {
        if (error) {
            setTransActionDetails({});
        }
    }, [error]);

    useEffect(() => {
        if (userArray.length && !error) {
            setErrorMessage('');
            const [{ first_name, last_name, transactions }] = sortUserAmountArray(userArray);
            const transactionsSplittedInMonths = getMonthIndexes(transactions);
            const readyTransactions = createTransactionData(transactionsSplittedInMonths, transactions);
            setTransActionDetails({
                readyTransactions,
                first_name,
                last_name,
                transActionArray: transactionsSplittedInMonths,
            });
        }
    }, [userArray, error, setErrorMessage]);

    return transActionDetails;
}
