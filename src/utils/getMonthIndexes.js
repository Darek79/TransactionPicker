export function getMonthIndexes(arr) {
    let monthIndexes = [];
    let lastIndex = 0;
    arr.forEach((el, i) => {
        const dateActualIndex = new Date(el.date).getMonth();
        let dateActualIndexNext;
        if (i + 1 < arr.length) {
            dateActualIndexNext = new Date(arr[i + 1].date).getMonth();
            if (dateActualIndex < dateActualIndexNext) {
                if (!monthIndexes.length) {
                    monthIndexes.push([lastIndex, i]);
                    lastIndex = i + 1;
                    return;
                }
                if (monthIndexes.length === 1) {
                    monthIndexes.push([lastIndex, i]);
                    lastIndex = i + 1;
                    monthIndexes.push([lastIndex, arr.length - 1]);
                    return;
                }
            }
        }
    });
    return monthIndexes;
}
