// A function that returns a promise that resolves after a random delay
function doTask(task) {
    return new Promise((resolve, reject) => {
      let delay = Math.floor(Math.random() * 5000); 
      console.log(`Starting ${task} with ${delay} ms delay`);
      setTimeout(() => {
        if (Math.random() < 0.9) {
          console.log(`Finished ${task}`);
          resolve(task);
        } else {
          console.log(`Failed ${task}`);
          reject(new Error(`Error in ${task}`));
        }
      }, delay);
    });
  }
  
  // A function that executes three tasks asynchronously using async/await
  async function executeTasksAsync() {
    try {
      let result1 = await doTask("doTask1");
      let result2 = await doTask("doTask2");
      let result3 = await doTask("doTask3");
      console.log(`All tasks done: ${result1}, ${result2}, ${result3}`);
    } catch (error) {
      console.error(error.message);
    }
  }
  
  // A function that executes three tasks asynchronously using generators and promises
  function executeTasksGenerator() {
    function* taskGenerator() {
      yield doTask("doTask1");
      yield doTask("doTask2");
      yield doTask("doTask3");
    }
  
    // A helper function that iterates over the generator and handles the promises
    function run(generator) {
      let iterator = generator(); 
      let next = iterator.next();   
      // A recursive function that handles each promise and calls the next one
      function handlePromise(promise) {
        promise.then((result) => { 
          if (!next.done) { 
            next = iterator.next(result); 
            handlePromise(next.value); 
          } else { 
            console.log(`All tasks done: ${result}`);
          }
        }).catch((error) => { 
          console.error(error.message);
        });
      }
  
      handlePromise(next.value); 
    }
  
    run(taskGenerator); 
  
  }
  
  executeTasksAsync();
  executeTasksGenerator();