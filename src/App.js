import { PageWrapper, InputWrapper, InputErrorMessage, PointsWrapper } from './components';
import { sanitizeInput } from './utils/sanitizeInput';
import SearchQueryProvider from './context/SearchQueryProvider';
import './styles/formElement.css';
import './styles/statusElement.css';

function App() {
    return (
        <PageWrapper>
            <SearchQueryProvider url="/Transactions.json">
                <InputWrapper sanitizeHanlder={sanitizeInput} className="form__main " />
                <InputErrorMessage className="error__main" />
                <PointsWrapper />
            </SearchQueryProvider>
        </PageWrapper>
    );
}

export default App;
