function add(numbers) {
    if (numbers == "") {
        return 0;
    }
    else if(numbers.length == 1){
        return parseInt(numbers); 
    }
    
}

module.exports = add;