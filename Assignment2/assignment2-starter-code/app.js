(function(){
    'use strict';

angular.module('ShoppingListCheckOff',[])
  .controller('ToBuyController',ToBuyController)
  .controller('AlreadyBoughtController',AlreadyBoughtController)
  .service('ShoppingListCheckOffService',ShoppingListCheckOffService);


ToBuyController.$inject=['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService){
 var buyitem=this;

buyitem.showall=ShoppingListCheckOffService.getBuylist();


buyitem.getoutlist=function (index){
    ShoppingListCheckOffService.getoutlist(index);
};
}

  AlreadyBoughtController.$inject=['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService){
  var boughtitem=this;

  boughtitem.showallbought=ShoppingListCheckOffService.getBoughtlist();

 };

function ShoppingListCheckOffService(){
    var service =this;
    var boughtlist=[];
    var buylist=[
        {itemname:"Cookies",quantity:10},{itemname:"Apples",quantity:5},
        {itemname:"Oranges",quantity:12},{itemname:"Chocoes",quantity:30},
        {itemname:"Tomatoes",quantity:18},{itemname:"Carrots",quantity:20},
        {itemname:"Potatoes",quantity:6},{itemname:"Noodles",quantity:2},
        {itemname:"Mangoes",quantity:8},{itemname:"Bananas",quantity:14}
    ];
    

    service.getBuylist=function(){
        return buylist;
    };

    service.getoutlist=function(index){
        var spliceditem=buylist[index];
        boughtlist.push(spliceditem);
        buylist.splice(index,1);

    };

    service.getBoughtlist=function(){
        return boughtlist;
    };

}

})();

