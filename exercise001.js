const promise = new Promise((resolve, reject) => {
  // Generate random number between 0 and 9
  const randomInt = Math.floor(Math.random() * 10);

  if (randomInt % 2 === 0) {
    // Success
    setTimeout(() => resolve("done"), 2000);
  } else {
    // Failure
    setTimeout(() => reject("error"), 2000);
  }
});

// Task 1 : Promise solution
promise
  .then((response) => {
    console.log(`Yay! Promise resolved with response: ${response}`);
  })
  .catch((error) => {
    console.log(`Boo. Promise rejected with response: ${error}`);
  });


// Task 2 : Async/await solution
const asyncPromise = async () => {
  try {
    const response = await promise;
    if (response) {
      console.log(`Yay! Promise resolved with response: ${response}`);
    }
  } catch (error) {
    console.log(`Boo. Promise rejected with response: ${error}`);
  }
};

asyncPromise();

// Extra : top level await
try {
  const topLevelAwaitResponse = await promise;
  if (response) {
    console.log(
      `Yay! Promise resolved with response: ${topLevelAwaitResponse}`
    );
  }
} catch (error) {
  console.log(`Boo. Promise rejected with response: ${error}`);
}

// note : this one sometimes fails with error:- 'ReferenceError: response is not defined'
