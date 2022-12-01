import { useState, useEffect } from 'react';
import { createTransactionData } from '../utils/createTransactionData';
import { getMonthIndexes } from '../utils/getMonthIndexes';
import { sortUserAmountArray } from '../utils/sortUserAmountArray';

export function useCalcPoints(userArray, error) {
    const [transActionArray, setTransActionArray] = useState([]);
    const [transActionDetails, setTransActionDetails] = useState({});

    useEffect(() => {
        if (error) {
            setTransActionArray([]);
            setTransActionDetails({});
        }
    }, [error]);

    useEffect(() => {
        if (userArray.length && !error) {
            const [{ first_name, last_name, transactions }] = sortUserAmountArray(userArray);
            const transactionsSplittedInMonths = getMonthIndexes(transactions);
            const readyTransactions = createTransactionData(transactionsSplittedInMonths, transactions);
            setTransActionArray(readyTransactions);
            setTransActionDetails({
                first_name,
                last_name,
                transActionArray: transactionsSplittedInMonths,
            });
        }
    }, [userArray, error]);

    return [transActionArray, transActionDetails];
}
