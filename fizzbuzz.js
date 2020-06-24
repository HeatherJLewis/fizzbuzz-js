

// Here, we create our main function.
function fizzbuzz() {
    // Put your code here..
    for (let i = 1; i < 200; i++) {
        let result = '';

        if(i % 3 === 0){
            result += 'Fizz'
        };

        if(i % 13 === 0){
            result += 'Fezz'
        };

        if(i % 5 === 0){
            result += 'Buzz'
        };

        if(i % 7 === 0){
            result += 'Bang'};

        if(i % 11 === 0){
            result = (result === 'Fezz') ? result += 'Bong' : 'Bong'
        }


        if(result == ''){
            result = i;
        };

        console.log(result);

    }
}

// Now we run the main function...
fizzbuzz(); // if we add a breakpoint here and use step into it will go into function
