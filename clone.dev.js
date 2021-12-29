"use strict";

var tabItems = document.querySelectorAll('.tab-item');
var tabContentItems = document.querySelectorAll('.tab-content-item'); // Select tab content item

function selectItem(e) {
  // Remove all show and border classes
  removeBorder();
  removeShow(); // Add border to current tab item

  this.classList.add('tab-border'); // Grab content item from DOM

  var tabContentItem = document.querySelector("#".concat(this.id, "-content")); // Add show class

  tabContentItem.classList.add('show');
} // Remove bottom borders from all tab items


function removeBorder() {
  tabItems.forEach(function (item) {
    item.classList.remove('tab-border');
  });
} // Remove show class from all content items


function removeShow() {
  tabContentItems.forEach(function (item) {
    item.classList.remove('show');
  });
} // Listen for tab item click


tabItems.forEach(function (item) {
  item.addEventListener('click', selectItem);
});