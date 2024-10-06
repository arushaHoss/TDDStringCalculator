function add(numbers) {
    if (numbers == "") {
        return 0;
    }
    else {
        let delimeter = /[\n,]/;
        if (numbers.startsWith("//")) {
            const parts = numbers.split("\n");
            delimeter = new RegExp(parts[0].slice(2)); // Extract custom delimiter
            numbers = parts[1]
        }
        const numArray = numbers.split(delimeter); //Split by comma or new line

        let sum = 0;
        for (let num of numArray) {
            sum += parseInt(num)
        }
        return sum;
    }

}

module.exports = add;