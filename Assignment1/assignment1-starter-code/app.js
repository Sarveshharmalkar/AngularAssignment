(function(){
   "use strict";
   
   angular.module("LunchCheck",[])
   .controller("LunchCheckController",LunchCheckController);

   LunchCheckController.$inject = ['$scope'];
   function LunchCheckController($scope){
       $scope.string="";


       $scope.calculatestring=function(){
         var justdoing=doing($scope.string);
        $scope.displaystringlength=justdoing;
     };
   };
   function doing(fullstring){
       let stringtosplit=fullstring.split(",");
        // return stringtosplit;
           if(stringtosplit.length==0){
               return "Please enter data first";
           }
           else if(stringtosplit.length<=3){
               return "Enjoy!";
           }
           else{
               return "Too much!";
           }

    //   let k=0;
    //   for(let i=0;i<fullstring.length;i=i+1){
    //       if(fullstring[i]==","){
    //         k=k+1;
    //       }
    //    }
    //  let j=k+1;
    //  if(fullstring.length==0){
    //      return "Please enter data first";
    //  }
    //  else if(j<=3){
    //      return "Enjoy!";
    //  }
    //  else{
    //      return "Too much!";
    //  }
   } 

})();