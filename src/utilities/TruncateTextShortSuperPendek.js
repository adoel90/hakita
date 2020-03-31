function TruncateTextShortSuperPendek(input) {

    if (input.length > 12)
       return input.substring(0,12) + '...';
    else
       return input;
 };

 export default TruncateTextShortSuperPendek;