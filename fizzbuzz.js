

// Here, we create our main function.
function fizzbuzz() {
    // Put your code here..
    for (let i = 1; i < 11; i++) {
        let result = '';
        if(i % 3 === 0){
            result += 'Fizz';
        } else if (i % 5 === 0)
        {
            result += 'Buzz';
        } else if (i % 7 === 0){
            result += 'Bang'
        } else {
            result = i;
        }
    console.log(result);

    }
}

// Now we run the main function...
fizzbuzz(); // if we add a breakpoint here and use step into it will go into function
