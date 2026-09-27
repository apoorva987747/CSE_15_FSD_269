function sum() {
  setTimeout(() => {
    console.log("2");
  }, 2000);
}

function example() {
  console.log("1");

  sum();
  console.log("3");
}
example();
