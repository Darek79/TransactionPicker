import { useContext } from 'react';
import SearchQueryContext from '../../context/searchQueryContext';
import PointsItem from './PointsItem';
import './../../styles/pointsWrapperElement.css';

export default function PointsWrapper({ ...rest }) {
    const { transActionArray, transActionDetails, isLoading } = useContext(SearchQueryContext);

    if (isLoading) {
        return (
            <div className="pointsWrapper__main--spinner">
                <img src="./spinner.gif" alt="spinner" />
            </div>
        );
    }

    return (
        <div className="pointsWrapper__main">
            {!transActionArray.length ? null : (
                <div className="pointsWrapper__main--username">
                    <h2>{`${transActionDetails.first_name} ${transActionDetails.last_name}`}</h2>
                </div>
            )}
            <div className="pointsWrapper__main--items">
                {transActionArray &&
                    transActionArray.map((el, i) => {
                        return (
                            <PointsItem
                                key={el.date}
                                date={el.date}
                                total_transactions={
                                    transActionDetails.transActionArray[i][1] -
                                    transActionDetails.transActionArray[i][0]
                                }
                                points_total={el.points}
                            />
                        );
                    })}
            </div>
        </div>
    );
}
