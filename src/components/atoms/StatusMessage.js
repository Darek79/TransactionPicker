import PropTypes from 'prop-types';

export default function StatusMessage({ statusMessage, ...rest }) {
    return (
        <div {...rest}>
            <h3>{statusMessage}</h3>
        </div>
    );
}

StatusMessage.propTypes = {
    statusMessage: PropTypes.string,
};
