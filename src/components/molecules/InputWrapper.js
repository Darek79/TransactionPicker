import { createRef, useRef, useEffect, useContext } from 'react';
import SearchQueryContext from '../../context/searchQueryContext';
import { sanitizeInput } from '../../utils/sanitizeInput';
import Button from '../atoms/Button';
import Input from '../atoms/Input';
import Label from '../atoms/Label';
import './../../styles/buttonElement.css';
import './../../styles/inputElement.css';

export default function InputWrapper({ ...rest }) {
    const { value, setValue } = useContext(SearchQueryContext);
    const inputValueRef = createRef();
    const formElementRef = useRef();
    function getValueByEnter(event) {
        if (event.key === 'Enter' && inputValueRef.current.value.length > 3) {
            setValue(sanitizeInput(inputValueRef.current.value));
        }
    }

    function getValueByButton(event) {
        event.preventDefault();
        if (inputValueRef.current.value.length > 3) {
            setValue(sanitizeInput(inputValueRef.current.value));
        }
    }

    function resetInputValue(event) {
        event.preventDefault();
    }

    useEffect(() => {
        if (value) {
            formElementRef.current.reset();
        }
    }, [value]);

    useEffect(() => {
        inputValueRef.current.focus();
        setValue('');
    }, [inputValueRef, setValue]);
    return (
        <form onSubmit={resetInputValue} ref={formElementRef} {...rest}>
            <Label htmlFor="searchInput" optionalLabelText="Please enter a name :" />
            <Input
                minLength="3"
                maxLength="50"
                type="text"
                onKeyDown={getValueByEnter}
                ref={inputValueRef}
                name="searchInput"
                className="input__main"
            />
            <Button type="button" requiredText="Search" onClick={getValueByButton} className="button__search" />
        </form>
    );
}
