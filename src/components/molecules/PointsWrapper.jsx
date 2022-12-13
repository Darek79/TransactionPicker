import { useContext } from 'react';
import SearchQueryContext from '../../context/searchQueryContext';
import SpinnerComponent from './SpinnerComponent';
import { useFetchUserFromDB } from '../../hooks/useFetchUserFromDB';
import { useCalcPoints } from '../../hooks/useCalcPoints';
import PointsItemBlock from './PointsItemBlock';
import './../../styles/pointsWrapperElement.css';

export default function PointsWrapper({ url, fetchFromDB, ...rest }) {
    const { state } = useContext(SearchQueryContext);
    const [userArray, error, isLoading] = useFetchUserFromDB(state, url, fetchFromDB);
    const transactions = useCalcPoints(userArray, error);

    if (isLoading) {
        return <SpinnerComponent className="pointsWrapper__main--spinner" spinnerSrc="./spinner.gif" />;
    }
    return <>{!transactions.first_name ? null : <PointsItemBlock transactions={transactions} />} </>;
}
