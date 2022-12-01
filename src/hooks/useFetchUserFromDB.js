import { useState, useEffect } from 'react';
import fetchFromDB from '../utils/fetchFromDB';
import { filterForUser } from '../utils/filterForUser';

export function useFetchUserFromDB(value, url) {
    const [isLoading, setLoading] = useState(false);
    const [error, setErrorMessage] = useState('');
    const [userArray, setUserArray] = useState([]);
    useEffect(() => {
        if (value) {
            setLoading(p => !p);
            fetchFromDB(url).then(fetchedTransactions => {
                setErrorMessage(p => '');
                if (Array.isArray(fetchedTransactions)) {
                    const userArray = filterForUser(fetchedTransactions, value);
                    if (!userArray.length) {
                        setErrorMessage('Sorry no user was found');
                        setLoading(p => !p);
                        return;
                    }
                    setUserArray(userArray);
                    setLoading(p => !p);
                }
                if (typeof fetchedTransactions === 'string') {
                    setErrorMessage(fetchedTransactions);
                }
            });
        }
    }, [value, url]);

    return [userArray, error, isLoading];
}
