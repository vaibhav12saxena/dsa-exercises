const examplePromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(200);
  }, 1000);
});

examplePromise
  .then((res) => {
    console.log(res);
  })
  .catch((err) => console.log(err));
