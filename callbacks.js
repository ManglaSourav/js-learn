const doThings = (data, callback) => {
  setTimeout(() => {
    console.log('form setTimeout', data);
    callback();
  }, 1000);
  console.log('from do things');
  
};

doThings('data', () => {
  console.log('from callack');
});
