import { useState, useEffect, useContext } from 'react';
import ErrorContext from '../context/errorContext';
import { filterForUser } from '../utils/filterForUser';

export function useFetchUserFromDB(value, url, fetchHandler) {
    const { setErrorMessage } = useContext(ErrorContext);
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [userArray, setUserArray] = useState([]);
    useEffect(() => {
        if (value) {
            setLoading(p => !p);
            fetchHandler(url).then(fetchedTransactions => {
                setError(p => '');
                if (Array.isArray(fetchedTransactions)) {
                    const userArray = filterForUser(fetchedTransactions, value);
                    if (!userArray.length) {
                        setError('----');
                        setErrorMessage('Sorry no user was found');
                        setLoading(p => !p);
                        return;
                    }
                    setUserArray(userArray);
                    setLoading(p => !p);
                }
                if (typeof fetchedTransactions === 'string') {
                    setError(fetchedTransactions);
                }
            });
        }
    }, [value, url, fetchHandler, setErrorMessage]);

    return [userArray, error, isLoading];
}
