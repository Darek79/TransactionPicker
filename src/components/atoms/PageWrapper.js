import './../../styles/pageWrapper.css';

export default function PageWrapper({ children }) {
    return (
        <div className="wrapper__main">
            <main className="wrapper__main--containter">{children}</main>
        </div>
    );
}
