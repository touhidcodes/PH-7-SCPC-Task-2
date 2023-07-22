// Explain what a callback function is and provide a simple example?

// Example 1:
const hello = (name, callback) => {
  console.log(`Hi, I am ${name}`);
  callback();
};

function callMe() {
  console.log("junior MERN Stack Developer");
}

hello("Touhid", callMe);

// Example 2:
const timeOutFunction = (callback) => {
  setTimeout(() => {
    console.log("Async operation completed.");
    callback();
  }, 3000);
};

function callbackFunction() {
  console.log("Callback function executed.");
}

timeOutFunction(callbackFunction);
