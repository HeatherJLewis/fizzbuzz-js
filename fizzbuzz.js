

// Here, we create our main function.
function fizzbuzz() {
    // Put your code here..
    for (let i = 254; i < 260; i++) {
        let result = [];

        if(i % 3 === 0){
            result.push('Fizz')
        };

        if(i % 13 === 0){
            result.push('Fezz')
        };

        if(i % 5 === 0){
            result.push('Buzz')
        };

        if(i % 7 === 0){
            result.push('Bang')
        };

        if(i % 11 === 0){
            result = (result[0] === 'Fezz') ? result.push('Bong') : ('Bong')
        }
        if(i % 17 === 0 && Array.isArray(result)){
            result = result.reverse()
        }

        if(Array.isArray(result)){
            result = result.join('')
        }

        if(result == ''){
            result = i;
        };

        console.log(result);

    }
}

// Now we run the main function...
fizzbuzz(); // if we add a breakpoint here and use step into it will go into function
