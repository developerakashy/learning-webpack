"use strict";

var count = 0;
function inc() {
  count++;
  document.getElementById('h1').innerText = count;
}
component('button', null, 'Increment', {
  click: function click() {
    inc();
  }
});
component('h1', 'h1', '0');

