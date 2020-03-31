function TruncateText(input) {

    if (input.length > 5)
       return input.substring(0,32) + '...';
    else
       return input;
 };

 export default TruncateText;