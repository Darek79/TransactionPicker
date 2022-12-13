import PointsTransactionItem from './PointsTransactionItem';
import './../../styles/pointsWrapperElement.css';
export default function PointsItemBlock({ transactions }) {
    return (
        <div className="pointsWrapper__main">
            <div className="pointsWrapper__main--username">
                <h2>{`${transactions.first_name} ${transactions.last_name}`}</h2>
            </div>
            <div className="pointsWrapper__main--items">
                {transactions.readyTransactions.map((el, i) => {
                    return (
                        <PointsTransactionItem
                            date_txt={`Date: `}
                            transaction_txt={`Total transactions: `}
                            points_txt={`Total points: `}
                            data-testid={`points-value-${i}`}
                            key={el.date}
                            date={el.date}
                            total_transactions={
                                transactions.transActionArray[i][1] - transactions.transActionArray[i][0]
                            }
                            points_total={el.points}
                        />
                    );
                })}
            </div>
            <div className="pointsWrapper__main--total">
                <p>
                    {`Total Points: `}
                    <span>{`${transactions.readyTransactions.reduce((a, b) => a + b.points, 0)}`}</span>
                </p>
            </div>
        </div>
    );
}
