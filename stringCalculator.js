function add(numbers) {
    if (numbers == "") {
        return 0;
    }
    else{
        const numArray = numbers.split(/[\n,]/); //Split by comma or new line
        let sum = 0;
        for(let num of numArray){
            sum += parseInt(num)
        }
        return sum; 
    }
    
}

module.exports = add;