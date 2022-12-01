export function filterForUser(fetchedTransactions, filterValue) {
    return fetchedTransactions.filter(el => `${el.first_name} ${el.last_name}`.includes(filterValue));
}
