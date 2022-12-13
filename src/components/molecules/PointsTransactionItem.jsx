export default function PointsItem({ total_transactions, points_total, date, date_txt, transaction_txt, points_txt }) {
    return (
        <header>
            <p>
                {date_txt}
                <span>{`${date}`}</span>
            </p>
            <p>
                {transaction_txt}
                <span>{`${total_transactions}`}</span>
            </p>
            <p>
                {points_txt}
                <span>{`${points_total}`}</span>
            </p>
        </header>
    );
}
