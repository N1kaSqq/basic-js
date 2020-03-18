module.exports = function getSeason( date ) {
  if(date == undefined) throw new Error("Error");
   let num =  date.getMonth();
   
   if(num<2){
     return "winter";
   } else if(num<5) {
      return "spring";
    } else if(num<8) {
      return "summer";
    } else if(num<11) {
      return "autumn";
    } else if(num==11) {
      return "winter";
    } 
  return 'Unable to determine the time of year!';
   
   
};
