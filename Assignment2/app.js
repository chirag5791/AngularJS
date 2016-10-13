(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService) {

    this.items = ShoppingListCheckOffService.buyItem;

    this.buy = function (itemIndex) {
      ShoppingListCheckOffService.removeItem(itemIndex);
    };
  }

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    this.items = ShoppingListCheckOffService.boughtItem;
  }

  function ShoppingListCheckOffService() {    
    var service = this;

    // List of shopping items
    service.buyItem = [
      {
        'name': 'cookies',
        'quantity': '10 boxs',
      },
      {
        'name': 'Milk',
        'quantity': '3 bottles',
      },
      {
        'name': 'Banana',
        'quantity': '1 dozen',
      },
      {
        'name': 'Cheese',
        'quantity': '1 box',
      },
      {
        'name': 'Wine',
        'quantity': '1 bottle',
      }
    ]

    // List of bought items
    service.boughtItem = [];

    service.removeItem = function (itemIdex) {
      var item = service.buyItem[itemIdex];

      service.buyItem.splice(itemIdex, 1);

      //add item to alreadyBought list
      service.addItem(item.name,item.quantity);
    };

    service.addItem = function (itemName, quantity) {
      var item = {
        name: itemName,
        quantity: quantity
      };
      service.boughtItem.push(item);
    };
  }
})();