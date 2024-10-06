function add(numbers) {
    if (numbers == "") {
        return 0;
    }
    else{
        const numArray = numbers.split(',');
        let sum = 0;
        for(let num of numArray){
            sum += parseInt(num)
        }
        return sum; 
    }
    
}

module.exports = add;