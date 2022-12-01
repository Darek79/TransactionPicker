import { useState } from 'react';
import SearchQueryContext from './searchQueryContext';
import { useFetchUser } from '../hooks/useFetchUser';
export default function SearchQueryProvider({ children }) {
    const [value, setValue] = useState('');

    const [transActionArray, transActionDetails, error, isLoading] = useFetchUser(
        value,
        './database/Transactions.json'
    );
    return (
        <SearchQueryContext.Provider
            value={{ value, setValue, transActionArray, transActionDetails, error, isLoading }}
        >
            {children}
        </SearchQueryContext.Provider>
    );
}
