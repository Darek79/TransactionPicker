export function calcPoints(arrayWithIndexes, arrayWithTransactions) {
    let start = arrayWithIndexes[0];
    let end = arrayWithIndexes[1];
    let points = 0;

    do {
        if (arrayWithTransactions[start].transaction > 50 && arrayWithTransactions[start].transaction < 100) {
            let pointsBelow100 = Math.floor(arrayWithTransactions[start].transaction) - 50;
            points += pointsBelow100;
        }
        if (arrayWithTransactions[start].transaction > 100) {
            let pointsAbove100 = (Math.floor(arrayWithTransactions[start].transaction) - 100) * 2;
            points += 50;
            points += pointsAbove100;
        }
        start++;
    } while (start <= end);

    return points;
}
