
// The main difference between throttling and debouncing is that throttling executes the function 
// at a regular interval, while debouncing executes the function only after some cooling period.

let count = 0;
const getData = () => {
  console.log("fetching data", count++);
};

const debounce = function (fn, delay = 200) {
  let timer;
  return function () {
    const context = this;
    const args = arguments;
    clearInterval(timer);
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, delay);
  };
};

const betterFunction = debounce(getData, 300);

const throttle = function (fn, limit) {
  let flag = true;
  return function () {
    const context = this;
    const args = arguments;
    if (flag) {
      fn.apply(context, args);
      flag = false;
      setTimeout(() => {
        flag = true;
      }, limit);
    }
  };
};

const throttledFunc = throttle(getData, 1000);
