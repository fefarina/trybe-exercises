function names(list) {
    let result = list[0];

    for(let i = 0; i < list.length; i++) {
        if(result.length < list[i].length) {
            result = list[i];
        }
    }
    return result;
}


console.log(names(['Jose', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));