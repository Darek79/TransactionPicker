import { useState, useEffect } from 'react';
import { filterForUser } from '../utils/filterForUser';

export function useFetchUserFromDB(value, url, fetchHandler) {
    const [isLoading, setLoading] = useState(false);
    const [error, setErrorMessage] = useState('');
    const [userArray, setUserArray] = useState([]);
    useEffect(() => {
        if (value) {
            setLoading(p => !p);
            fetchHandler(url).then(fetchedTransactions => {
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
    }, [value, url, fetchHandler]);

    return [userArray, error, isLoading];
}
