export default function PointsItem({ total_transactions, points_total, date }) {
    return (
        <header>
            <p>
                {`Date: `}
                <span>{`${date}`}</span>
            </p>
            <p>
                {`Total transactions: `}
                <span>{`${total_transactions}`}</span>
            </p>
            <p>
                {`Points total: `}
                <span>{`${points_total}`}</span>
            </p>
        </header>
    );
}
