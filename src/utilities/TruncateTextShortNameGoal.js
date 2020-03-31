function TruncateTextShortNameGoal(input) {
   if(input !== null && input !== undefined){

      if (input.length > 24)
         return input.substring(0,24) + '...';
      else
         return input;
   }
 };

 export default TruncateTextShortNameGoal;