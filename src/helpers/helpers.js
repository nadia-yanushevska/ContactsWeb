export function formatNumber(number) {
    const numberStr = String(number);
    const numberArr = [];

    numberArr.push(numberStr.slice(0, 3));
    numberArr.push(numberStr.slice(3, 5));
    numberArr.push(numberStr.slice(5));

    return numberArr.join('-');
}
