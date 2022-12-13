import ErrorContext from './errorContext';
import { useState } from 'react';
export default function ErrorMessageProvider({ children }) {
    const [state, setErrorMessage] = useState('');

    return <ErrorContext.Provider value={{ state, setErrorMessage }}>{children}</ErrorContext.Provider>;
}
