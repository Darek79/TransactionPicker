import { useContext } from 'react';
import ErrorContext from '../../context/errorContext';
import StatusMessage from '../atoms/StatusMessage';

export default function InputErrorMessage({ ...rest }) {
    const { state: error } = useContext(ErrorContext);

    if (!error) {
        return null;
    }
    return <StatusMessage {...rest} statusMessage={error} />;
}
