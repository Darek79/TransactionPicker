export default function SpinnerComponent({ spinnerSrc, ...rest }) {
    return (
        <div {...rest}>
            <img src={spinnerSrc} alt="spinner" />
        </div>
    );
}
