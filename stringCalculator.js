function add(numbers) {
    try {
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
            const negatives = numArray.filter(num => parseInt(num) < 0);

            if (negatives.length > 0) {
                return `Negative numbers not allowed: ${negatives.join(',')}`;
            }

            let sum = 0;
            for (let num of numArray) {
                sum += parseInt(num)
            }
            return sum;
        }
    } catch (err) {
        throw err
    }
}

module.exports = add;