function TruncateTextShortInTASK(input) {

    if (input.length > 40)
       return input.substring(0,40) + '...';
    else
       return input;
 };

 export default TruncateTextShortInTASK;