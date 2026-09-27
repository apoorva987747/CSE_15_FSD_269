const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("data not found, something went wrong");
  }, 2000);
});

promise.then((result) => {
  console.log(result);
});

promise.catch((error) => {
  console.log(error);
});
