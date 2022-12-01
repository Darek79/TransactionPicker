import { useState } from 'react';
import SearchQueryContext from './searchQueryContext';
import { useFetchUserFromDB } from './../hooks/useFetchUserFromDB';
import { useCalcPoints } from '../hooks/useCalcPoints';

export default function SearchQueryProvider({ url, children }) {
    const [value, setValue] = useState('');
    const [userArray, error, isLoading] = useFetchUserFromDB(value, url);
    const [transActionArray, transActionDetails] = useCalcPoints(userArray, error);
    return (
        <SearchQueryContext.Provider
            value={{ value, setValue, transActionArray, transActionDetails, error, isLoading }}
        >
            {children}
        </SearchQueryContext.Provider>
    );
}
