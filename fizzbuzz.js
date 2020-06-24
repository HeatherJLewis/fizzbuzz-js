class MultipleClass {
    constructor(multiple, string) {
        this.multiple = multiple,
        this.string = string
    }

    multipleFn(number, result) {
        if(number % this.multiple === 0){

            result.push(this.string);

            return result;
        }
    }

    printOnlyThisWord(number, result) {
        if(number % this.multiple === 0){
            result = (result[0] === 'Fezz') ? result.push(this.String) : (this.String)
        }

    }
}

const multipleOf3 = new MultipleClass(3, 'Fizz');
const multipleOf5 = new MultipleClass(5, 'Buzz');
const multipleOf7 = new MultipleClass(7, 'Bang');
const multipleOf13 = new MultipleClass(13, 'Fezz');
// const multipleOf19 = new MultipleClass(19)

// Here, we create our main function.
function fizzbuzz() {
    // Put your code here..
    for (let i = 30; i < 35; i++) {
        let result = [];

        multipleOf3.multipleFn(i, result)

        multipleOf13.multipleFn(i, result)

        multipleOf5.multipleFn(i, result)

        multipleOf7.multipleFn(i, result)

        if(i % 11 === 0){
            result = (result[0] === 'Fezz') ? result.push('Bong') : ('Bong')
        }

        if(i % 17 === 0 && Array.isArray(result)){
            result = result.reverse()
        }

        if(Array.isArray(result)){
            result = result.join('')
        }

        if(result == []){
            result = i;
        };

        console.log(result);

    }
}

// Now we run the main function...
fizzbuzz(); // if we add a breakpoint here and use step into it will go into function
