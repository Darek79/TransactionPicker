import PropTypes from 'prop-types';

export default function Button({ requiredText, ...rest }) {
    return <button {...rest}>{requiredText}</button>;
}

Button.propType = {
    requiredText: PropTypes.string.isRequired,
};
