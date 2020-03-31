function TruncateTextInDashboard(input) {

    if (input.length > 14)
       return input.substring(0,5) + '...';
    else
       return input;
 };

 export default TruncateTextInDashboard;