(function () {
  'use strict';

  var bar = function bar() {
    alert('foo');
  };

  function foo () {
    var z = function z() {};
    bar();
  }

  foo();

}());