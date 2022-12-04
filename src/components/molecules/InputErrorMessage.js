import { useContext } from 'react';
import SearchQueryContext from '../../context/searchQueryContext';
import StatusMessage from '../atoms/StatusMessage';

export default function InputErrorMessage({ ...rest }) {
    const { error } = useContext(SearchQueryContext);

    if (!error) {
        return null;
    }

    return <StatusMessage {...rest} statusMessage={error} />;
}
