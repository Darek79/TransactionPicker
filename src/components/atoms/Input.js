import { forwardRef } from 'react';

const Input = forwardRef(function Input({ ...rest }, ref) {
    return <input {...rest} ref={ref} />;
});

export default Input;
