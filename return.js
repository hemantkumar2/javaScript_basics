//find the square of the following number
function square(num){
    console.log(square of the given number is)
    return x*x;
}






//check weather the number is even or not

function isEven(num){
    
    if(num%2==0){
       return true;
    }
    else{
        return false;
    }

    //OR

    function isEven(num){
        return num%2===0;
    }




    //program for factorial
    function factorial(num){
        var result=1;
        for(var i=1;i<=num;i++){
            result= result*i;
        }
        return result;
    }