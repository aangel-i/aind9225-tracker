// Create an object called 'task'
  // Populate the properties based on the provided data model


// Create a function called 'addTask'
  // Give the function input parameters for: name, type, rate, time, client
  // Paste your object definition from above in the function
  // Replace the property values with the input paramaters
  // Add the object to the taskList array

  let taskList = [];


  function addTask (name, type, rate, time, client) {
    let task = {
      name: name, 
      type: type, 
      id: Date.now(), 
      date:new Date().toISOString(),
      rate: rate,
      time: time,
      client: client,
    }
    taskList.push(task);
  }


const form = document.getElementById("taskform");
const tasklist = document.getElementById("tasklist");

form.addEventListener("submit", function(event) {
  event.preventDefault();
  console.log(form.elements.taskName.value);
});





addTask("Initial Sketches", "Concept Ideation", 50, 5, "Google");
addTask("Web javascript coding", "coding", 60, 3, "Atlassian");
addTask("Full illustration for book", "illustration", 40, 5, "Disney");
addTask("prototyping app", "prototype", 55, 4, "Microsoft");



// Call the function with test values for the input paramaters
// let task = addTask("taskName", "taskType", 22, 2, "Google");
console.log(taskList);

// Log the array to the console.
// fred stop editing the main replit hehe. make a fork.
