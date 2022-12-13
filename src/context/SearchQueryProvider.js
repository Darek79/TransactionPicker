import { useMemo, useReducer } from 'react';
import SearchQueryContext from './searchQueryContext';
import DispatchQueryContext from './disptachQueryContext';
import reducer from '../reducer/mainReducer';

export default function SearchQueryProvider({ url, children }) {
    const [state, dispatch] = useReducer(reducer, '');

    const dipatchFn = useMemo(() => {
        function inputSetter(value) {
            dispatch({ type: 'SETINPUT', value });
        }
        return { inputSetter };
    }, []);

    return (
        <DispatchQueryContext.Provider value={dipatchFn}>
            <SearchQueryContext.Provider value={{ state }}>{children}</SearchQueryContext.Provider>
        </DispatchQueryContext.Provider>
    );
}
