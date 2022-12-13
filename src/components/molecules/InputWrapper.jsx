import { createRef, useRef, useEffect, useContext, memo } from 'react';
import DispatchQueryContext from '../../context/disptachQueryContext';
import Button from '../atoms/Button';
import Input from '../atoms/Input';
import Label from '../atoms/Label';
import './../../styles/buttonElement.css';
import './../../styles/inputElement.css';

export default memo(function InputWrapper({ sanitizeHanlder, ...rest }) {
    const { inputSetter } = useContext(DispatchQueryContext);
    const inputValueRef = createRef();
    const formElementRef = useRef();
    function getValueByEnter(event) {
        if (event.key === 'Enter' && inputValueRef.current.value.length > 3) {
            inputSetter(sanitizeHanlder(inputValueRef.current.value));
            formElementRef.current.reset();
        }
    }

    function getValueByButton(event) {
        event.preventDefault();
        if (inputValueRef.current.value.length > 3) {
            inputSetter(sanitizeHanlder(inputValueRef.current.value));
            formElementRef.current.reset();
        }
    }

    function resetInputValue(event) {
        event.preventDefault();
    }

    useEffect(() => {
        inputValueRef.current.focus();
    }, [inputValueRef]);

    return (
        <form aria-label="form" onSubmit={resetInputValue} ref={formElementRef} {...rest}>
            <Label htmlFor="searchInput" optionalLabelText="Please enter a name :" />
            <Input
                minLength="3"
                maxLength="50"
                type="text"
                onKeyDown={getValueByEnter}
                ref={inputValueRef}
                id="searchInput"
                className="input__main"
                aria-label="searchInput"
            />
            <Button type="button" requiredText="Search" onClick={getValueByButton} className="button__search" />
        </form>
    );
});
