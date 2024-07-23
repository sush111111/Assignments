/*
Task 9: Create a Promise-Based Calculator
Write a Promise-based calculator that takes two numbers and an operation (addition, subtraction, multiplication, or division) as input. Perform the corresponding operation and resolve the Promise with the result. Handle division by zero and any invalid operations by rejecting the Promise with an appropriate error message.
*/
function calculator(num1,num2,op){
    return new Promise((resolve,reject) => {
        if(typeof num1 !== 'number' || typeof num2 !== 'number'){
            reject("Both inputs must be numbers")
            return;
        }

        switch(op){
            case '+':
                resolve(num1+num2)
                break;

            case '-':
                resolve(num1-num2)
                break;

            case '*':
                resolve(num1*num2)
                break;

            case '/':
                if(num2 == 0){
                    reject("Division by 0 is not allowed.")
                    return;
                }
                resolve(num1/num2)
                break;

            default:
                reject("invalid operation, only + - * / supported")
                break
        }
    })
}

calculator(20,10,'+')
   .then(result => console.log('result: ', result))
   .catch(error => console.log('error: ', error))

calculator(20,10,'-')
   .then(result => console.log('result: ', result))
   .catch(error => console.log('error: ', error))

calculator(20,10,'*')
   .then(result => console.log('result: ', result))
   .catch(error => console.log('error: ', error))

calculator(20,10,'/')
   .then(result => console.log('result: ', result))
   .catch(error => console.log('error: ', error))

calculator(20,0,'/')
   .then(result => console.log('result: ', result))
   .catch(error => console.log('error: ', error))