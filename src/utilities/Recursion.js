
function Recursion(count){

    /*
        What is Recursion?
        
        First, check definition of recursion: 
        
        Recursion is a technique for iterating over an operation by having a function call itself repeatedly 
        until it arrives at a result.
        
        OK, that actually wasn’t too bad of an explanation. 
        Easier than most definitions given. But let’s make it even easier to understand: a function that calls itself.

    */
    
    //*Termination condition : safety check built into our function
    if(!Number.isInteger(count) || count < 0){

      console.log("Input mesti angka, dan tidak boleh kurang dari 0");
      alert("Input mesti angka, dan tidak boleh kurang dari 0");

      return;
    };

    //*Base case condition : Ketika kondisi ini masuk, return final result and the function is end !
    if(count === 0){
        console.log(`Got it ${count}`);

        return;
    };

    console.log(count);
    count--

    return Recursion(count);

  };

  export default Recursion;