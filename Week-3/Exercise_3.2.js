// Function using call
function greetUsingCall(greeting, name) {
    console.log(`${greeting}, ${name}`);
  }
  
  greetUsingCall.call(null, "Hello", "John"); // Hello, John
  
  // Function using bind
  function greetUsingBind(greeting, name) {
    console.log(`${greeting}, ${name}`);
  }
  
  const boundGreet = greetUsingBind.bind(null, "Hello");
  boundGreet("Jane"); // Hello, Jane
  
  // Function using apply
  function greetUsingApply(greeting, name) {
    console.log(`${greeting}, ${name}`);
  }
  
  greetUsingApply.apply(null, ["Hello", "Jim"]); // Hello, Jim