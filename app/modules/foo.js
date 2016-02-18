var bar = () => {
  alert('foo');
}

export default function () {
  const z = () => {};
  bar();
}
