import { calcPoints } from './calcPoints';

const month = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];

export function createTransactionData(arrayWithIndexes, arrayWithTransactions) {
    return arrayWithIndexes.map((el, i) => {
        const calculatedPoints = calcPoints(el, arrayWithTransactions);
        const formatedDate = new Date(arrayWithTransactions[el[0]].date);
        return { points: calculatedPoints, date: `${month[formatedDate.getMonth()]}/${formatedDate.getFullYear()}` };
    });
}
