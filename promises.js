/**
 * A promise is an object that may produce a single value some time in the future:
 *  either a resolved value, or a reason that it’s not resolved (e.g., a network error occurred).
 *  A promise may be in one of 3 possible states: fulfilled, rejected, or pending.
 *  Promise users can attach callbacks to handle the fulfilled value or the reason for rejection.
 * 
 * A promise is an object which can be returned synchronously from an asynchronous function.
 * It will be in one of 3 possible states:
    1.Fulfilled: onFulfilled() will be called (e.g., resolve() was called)
    2.Rejected: onRejected() will be called (e.g., reject() was called)
    3.Pending: not yet fulfilled or rejected
 */

//  example 1

const wait = time =>
  new Promise((resolve, reject) => {
    if (time) {
      setTimeout(resolve('done'), time);
    }
    reject('time is not defined');
  });

wait(1000)
  .then(data => console.log('hello', data))
  .catch(() => console.log('promise is rejected'))
  .finally(() => console.log('cool'));
