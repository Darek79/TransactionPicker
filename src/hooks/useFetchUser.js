import { useState, useEffect } from 'react';
import { createTransactionData } from '../utils/createTransactionData';
import fetchFromDB from '../utils/fetchFromDB';
import { filterForUser } from '../utils/filterForUser';
import { getMonthIndexes } from '../utils/getMonthIndexes';
import { sortUserAmountArray } from '../utils/sortUserAmountArray';

export function useFetchUser(value, url) {
    const [transActionArray, setTransActionArray] = useState([]);
    const [transActionDetails, setTransActionDetails] = useState({});
    const [isLoading, setLoading] = useState(false);
    const [error, setErrorMessage] = useState('');
    useEffect(() => {
        if (value) {
            setLoading(p => !p);
            fetchFromDB(url).then(fetchedTransactions => {
                setErrorMessage(p => '');
                if (Array.isArray(fetchedTransactions)) {
                    const userArray = filterForUser(fetchedTransactions, value);
                    if (!userArray.length) {
                        setTransActionArray([]);
                        setErrorMessage('Sorry no user was found');
                        setLoading(p => !p);
                        return;
                    }
                    const [{ first_name, last_name, transactions }] = sortUserAmountArray(userArray);
                    const transactionsSplittedInMonths = getMonthIndexes(transactions);
                    console.log(transactionsSplittedInMonths);
                    const readyTransactions = createTransactionData(transactionsSplittedInMonths, transactions);
                    setTransActionArray(readyTransactions);
                    setTransActionDetails({
                        first_name,
                        last_name,
                        transActionArray: transactionsSplittedInMonths,
                    });
                    setLoading(p => !p);
                }
                if (typeof fetchedTransactions === 'string') {
                    setErrorMessage(fetchedTransactions);
                }
            });
        }
    }, [value, url]);

    return [transActionArray, transActionDetails, error, isLoading];
}
