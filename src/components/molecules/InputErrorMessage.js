import { useContext } from 'react';
import SearchQueryContext from '../../context/searchQueryContext';
import StatusMessage from '../atoms/StatusMessage';

export default function InputErrorMessage({ ...rest }) {
    const { error } = useContext(SearchQueryContext);
    return <StatusMessage {...rest} statusMessage={error} />;
}
