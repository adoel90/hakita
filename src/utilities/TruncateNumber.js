function TruncateNumber(input) {

    if (input.length > 2)
       return input.substring(0,2) + '...';
    else
       return input;
 };

 export default TruncateNumber;