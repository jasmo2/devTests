/*
* Write a function that will console.log the numbers from 1 to 100.
* For numbers which are multiples of three print "Fizz" instead of the number.
* For numbers which are multiples of five print "Buzz" instead of the number.
* For numbers which are multiples of both three and five print "FizzBuzz" instead of the number.
* For numbers that do not meet any of these conditions print the number.
* Execute the function with node and paste the output into the chat window to compare.
*
*
* Expected output
* 1
* 2
* Fizz
* 4
* Buzz
* Fizz
* 7
* 8
* Fizz
* Buzz
* 11
* Fizz
* 13
* 14
* FizzBuzz
* 16
* 17
* Fizz
* 19
* Buzz
* Fizz
* 22
* 23
* Fizz
* Buzz
* 26
* Fizz
* 28
* 29
* FizzBuzz
* 31
* 32
* Fizz
* 34
* Buzz
* Fizz
* 37
* 38
* Fizz
* Buzz
* 41
* Fizz
* 43
* 44
* FizzBuzz
* 46
* 47
* Fizz
* 49
* Buzz
* Fizz
* 52
* 53
* Fizz
* Buzz
* 56
* Fizz
* 58
* 59
* FizzBuzz
* 61
* 62
* Fizz
* 64
* Buzz
* Fizz
* 67
* 68
* Fizz
* Buzz
* 71
* Fizz
* 73
* 74
* FizzBuzz
* 76
* 77
* Fizz
* 79
* Buzz
* Fizz
* 82
* 83
* Fizz
* Buzz
* 86
* Fizz
* 88
* 89
* FizzBuzz
* 91
* 92
* Fizz
* 94
* Buzz
* Fizz
* 97
* 98
* Fizz
* Buzz
*/

function FizzBuzz() {
    for (let index = 1; index <= 100; index++) {
        result = index;
        if (index % 5 === 0 && index % 3 === 0) {
            result = "FizzBuzz";
        } else if (index % 3 === 0) {
            result = "Fizz";
        } else if (index % 5 === 0) {
            result = "Buzz";
        }
        console.log(result);
    }
}

FizzBuzz();