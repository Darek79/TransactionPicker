import PropTypes from 'prop-types';

export default function Label({ optionalLabelText, ...rest }) {
    return <label {...rest}>{optionalLabelText}</label>;
}

Label.propTypes = {
    optionalLabelText: PropTypes.string,
};
