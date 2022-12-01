export function sortUserAmountArray(userArray) {
    userArray[0].transactions.sort((a, b) => a.date - b.date);
    return userArray;
}
