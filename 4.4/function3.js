function compareArray(list) {
    let result = 0;
    
    for(let i = 0; i < list.length; i++) {
        if(list[result] > list[i]) {
            result = i
        }
    }
    return result
}

console.log(compareArray([20, 3, 6, 17, 10, 10]))