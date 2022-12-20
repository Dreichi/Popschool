let my_function = function(a, b) {
    let result = a + b;
    return result;
}

let foo = my_function;

result = foo(1, 2);
console.log(result);

my_number1 = 123;
my_number2 = 42;
result = foo(my_number1, my_number2);
console.log(result);