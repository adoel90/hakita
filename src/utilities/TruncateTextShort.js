function TruncateTextShort(input) {

    if (input.length > 16)
       return input.substring(0,16) + '...';
    else
       return input;
 };

 export default TruncateTextShort;