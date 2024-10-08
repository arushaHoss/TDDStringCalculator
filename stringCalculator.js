function add(numbers) {
    try {
        if (numbers == "") {
            return 0;
        }
        else {
            let delimeter = /[\n,]/;
            if (numbers.startsWith("//")) {
                const parts = numbers.split("\n");
                let customDelimeter = parts[0].slice(2); // Extract custom delimiter

                if (customDelimeter.startsWith("[") && customDelimeter.endsWith("]")) {
                    customDelimeter = customDelimeter.replace(/[\[\]']+/g, ''); // Remove square brackets
                    customDelimeter += "+"; // Add the plus sign at the end
                }

                delimeter = new RegExp(`[${customDelimeter}]`);
                numbers = parts[1]
            }

            const numArray = numbers.split(delimeter); //Split by comma or new line
            const negatives = numArray.filter(num => parseInt(num) < 0);

            if (negatives.length > 0) {
                return `Negative numbers not allowed: ${negatives.join(',')}`;
            }

            const validNumbers = numArray.filter(num => parseInt(num) <= 1000);
            let sum = 0;
            for (let num of validNumbers) {
                sum += parseInt(num)
            }
            return sum;
        }
    } catch (err) {
        throw err
    }
}

module.exports = add;