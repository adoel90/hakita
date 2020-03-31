function TruncateTextGoalResult(input) {

    if (input.length > 78)
       return input.substring(0,77) + '...';
    else
       return input;
 };

 export default TruncateTextGoalResult;