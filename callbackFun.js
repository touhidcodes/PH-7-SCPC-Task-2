// Explain what a callback function is and provide a simple example?

const timeOutFunction = (callback) => {
  setTimeout(() => {
    console.log("Async operation completed.");
    callback;
  }, 3000);
};

function callbackFunction() {
  console.log("Callback function executed.");
}

doSomethingAsync(callbackFunction);
