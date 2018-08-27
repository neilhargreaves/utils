function processArray(array, fn, fnArgs) {
  let index = 0;

  return new Promise((resolve, reject) => {
    function next() {
      if (index % 100 === 0)
        console.log("Progress:", index + "/" + array.length);

      if (index < array.length) {
        if(fnArgs) {
          fn(array[index++], ...fnArgs).then(next);
        }
        else {
          fn(array[index++]).then(next);
        }
      } else {
        resolve();
      }
    }
    next();
  })
}

module.exports = processArray;
