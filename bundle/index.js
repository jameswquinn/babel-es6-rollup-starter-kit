var bar = () => {
  alert('foo');
}

function foo () {
  const z = () => {};
  bar();
}

foo();