const readline = require('readline');

function processArray(array, fn, fnArgs) {
  let index = 0;

  return new Promise((resolve, reject) => {
    function next() {
      if (index % 100 === 0)
        console.log("Progress:", index + "/" + array.length);

      if (index < array.length) {
        //readline.clearLine(process.stdout); //clear current line
        //readline.cursorTo(process.stdout, 0);
        //process.stdout.write(`Processing ${ index + 1 } of ${ array.length }`);
        //readline.cursorTo(process.stdout, 0); //instantly return to 0 so other text is not pushed over
        if(fnArgs) {
          fn(array[index++], ...fnArgs).then(next);
        }
        else {
          fn(array[index++]).then(next);
        }
      } else {
        //readline.clearLine(process.stdout); //clear current line
        //readline.cursorTo(process.stdout, 0);
        resolve();
      }
    }
    next();
  })
}

module.exports = processArray;
