console.log(6 === 4+2)
console.log("hello")
console.log(6 === add(2, 4))
console.log(6 === sub(2, 4))
console.log(6 === mult(2, 4))
console.log(6 === divide(2, 4))

function add(int1, int2){
    return(int1 + int2);
}

function sub(int1, int2){
    return(int1 - int2);
}

function mult(int1, int2){
    return(int1 * int2);
}

function divide(int1, int2){
    return(int1 / int2);
}

function assert(expected, actual, message){
    
    if( expected === actual){
        console.log(message)
    }
        else{
            console.log("this test passed")
        }    
}
    assert(6, add(2,4), "it's true!");
    assert(6, add(4,4), "it's false");