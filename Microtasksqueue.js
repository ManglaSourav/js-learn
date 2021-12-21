let promise = Promise.resolve();

promise.then(() => console.log("promise done!"));

console.log("code finished");
console.log("code finished");
console.log("code finished");



// Asynchronous tasks need proper management.For that, the ECMA standard specifies an internal queue PromiseJobs, 
// more often referred to as the “microtask queue” (V8 term).
// -The queue is first -in -first - out: tasks enqueued first are run first.
// -Execution of a task is initiated only when nothing else is running.
// https://javascript.info/microtask-queue#microtasks-queue