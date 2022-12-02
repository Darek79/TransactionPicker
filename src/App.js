import { PageWrapper, InputWrapper, InputErrorMessage, PointsWrapper } from './components';
import SearchQueryProvider from './context/SearchQueryProvider';
import './styles/formElement.css';
import './styles/statusElement.css';

function App() {
    return (
        <PageWrapper>
            <SearchQueryProvider url="/database/Transactions.json">
                <InputWrapper className="form__main " />
                <InputErrorMessage className="error__main" />
                <PointsWrapper />
            </SearchQueryProvider>
        </PageWrapper>
    );
}

export default App;
