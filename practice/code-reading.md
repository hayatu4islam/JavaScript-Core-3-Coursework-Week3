# Code reading

## Question 1

Take a look at the following code:

```
1    let x = 1;
2    function f1()
3    {
4        let x = 2;
5        console.log(x);
6    }
7    console.log(x);
```

Explain why line 4 and line 6 output different numbers.
// The first x is global while the second x is local to the function.
## Question 2

Take a look at the following code:

```
let x = 10

function f1()
{
    console.log(x)
    let y = 20
}

console.log(f1())
console.log(y)
```

What will be the output of this code. Explain your answer in 50 words or less.

The output of the code is as shown below:
10
undefined
ReferenceError: y is not defined
The first console.log(f1()) prints the value of x that is declared globally, so there is not problem with that. Since the function f1() does not have a return value, it prints undefined.
Finally, an attempt to print the value of y produces a reference error because y is not defined. Even though y is defined, but it was defined locally in the function body. So anywhere outside the function, the variable is not available.
## Question 3

Take a look at the following code:

```
const x = 9;

function f1(val) {
  val = val + 1;
  return val;
}

f1(x);
console.log(x);

const y = { x: 9 };

function f2(val) {
  val.x = val.x + 1;
  return val;
}

f2(y);
console.log(y);
```

What will be the output of this code. Explain your answer in 50 words or less.

The output is:
9
{ x: 10 }
Calling f1(x) does not print anything because there is no code to print the value. The value of x, which is declared globally, is printed. Similarly, f2(y) was only invoked but not printed. The value of object y is printed after declared globally.