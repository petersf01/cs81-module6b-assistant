
// This code defines a PersonalAssistant class
function PersonalAssistant(name) {
  this.name = name;
  this.tasks = [];
  this.mood = 'neutral';
}

// This method greets the user
PersonalAssistant.prototype.greet = function() {
  console.log(`Hello, my name is ${this.name}. How can I assist you today?`);
}

// This method adds a task to the task list
PersonalAssistant.prototype.addTask = function(task) {
  this.tasks.push(task);
  // set the mood after adding a task
  this.setMood();
};

// This method completes the first task in the list
PersonalAssistant.prototype.completeTask = function() {
  if (this.tasks.length > 0) {
    console.log(`Task completed: ${this.tasks[0]}`);
    this.tasks.shift();
  }
  // set the mood after completing a task
  this.setMood();
}

// This method reports the current mood of the assistant
PersonalAssistant.prototype.reportMood  = function() {
  console.log(`Current mood: ${this.mood}`);
}

// This method sets the mood of the assistant based on the number of tasks
PersonalAssistant.prototype.setMood = function() {
  if (this.tasks.length === 0) {
    this.mood = 'happy';
  } else if (this.tasks.length <= 2) {
    this.mood = 'optimistic';
  } else {
    this.mood = 'stressed';
  }
}

