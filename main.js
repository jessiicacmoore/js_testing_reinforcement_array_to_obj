function arrayToObj(arr) {
   return(
      arr.reduce((lib, [director, movie]) => {
         lib[director] = movie;
         return lib;
      }, {})
   )
}

module.exports = arrayToObj;
