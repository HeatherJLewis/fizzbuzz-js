

// Here, we create our main function.
function fizzbuzz(number) {
    // Put your code here..
    for (let i = 0; i < number; i++) {
        if(i % 3 === 0 && i % 5 === 0){
            console.log('fizz buzz');
        } else if (i % 5 === 0)
        {
            console.log('buzz');
        } else if (i % 3 === 0) {
            console.log('fizz');

        } else {
            console.log(i)
        }
    }
}

// Now we run the main function...
fizzbuzz(10); // if we add a breakpoint here and use step into it will go into function
