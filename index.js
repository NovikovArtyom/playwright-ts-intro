const user = {
    "firstName": "Гена",
    "lastName": "Букин",
    "achievments": {
        "important": "хет-трик в финале турнира Кожаный мяч"
    }
}

const company = {
    "name": "Apple",
    "location": "Калифорния, США",
    "achievments": {
        "important": "Сделали iPhone"
    }
}

function printInfo(obj){
    console.dir(obj)
}

function printOnlyAch( {achievments} ){
    console.dir(achievments)
}

printInfo(user);
printInfo(company);

printOnlyAch(user);
printOnlyAch(company);