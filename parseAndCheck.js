function parseAndCheck(arr) {
    const result = [];
    for (let value of arr) {
        const parsedValue = parseFloat(value);
        if (isNaN(parsedValue)) {
            throw new Error("Invalid Number");
        }
        result.push(parsedValue);
    }
    return result;
}