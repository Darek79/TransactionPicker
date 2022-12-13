import { PageWrapper, InputWrapper, InputErrorMessage, PointsWrapper } from './components';
import { sanitizeInput } from './utils/sanitizeInput';
import SearchQueryProvider from './context/SearchQueryProvider';
import './styles/formElement.css';
import './styles/statusElement.css';
import fetchFromDB from './utils/fetchFromDB';
import ErrorMessageProvider from './context/ErrorMessageProvider';

function App() {
    return (
        <PageWrapper>
            <ErrorMessageProvider>
                <SearchQueryProvider>
                    <InputWrapper sanitizeHanlder={sanitizeInput} className="form__main " />
                    <InputErrorMessage className="error__main" />
                    <PointsWrapper url="/Transactions.json" fetchFromDB={fetchFromDB} />
                </SearchQueryProvider>
            </ErrorMessageProvider>
        </PageWrapper>
    );
}

export default App;
