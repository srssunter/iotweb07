//callback function 
//คือเขียน Anonymous function กับ Arrow function
//ให้เป็นอากิวเมนต์ส่งให้พารามิเตอร์

function funcA(x,y,z){
    console.log(`Hello ${x}`);
    console.log(`Hi ${y}`);
    z()
}

function funcB(data){
    let result = 10 * 20;
    console.log(`Value is ${data(result,100)}`);
}

//  call function

funcA('dog', 'cat', function()   {
    console.log('Goodbye');
})               

funcB((a,b) => {
    return a * b * 10
})