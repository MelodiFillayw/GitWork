// Task 1: Declare The Task Array and The Interval ID
const oneTimeTasks = [];
let intervalId;
// TODO: Begin by declaring an array to hold your one-time tasks (`oneTimeTasks`) and variables for any interval IDs you'll need for continuous tasks (`monitoringTaskId`).

// Task 2: Add One-Time Task Function
function addOneTimeTask (func, delay)
{
	function addOneTimeTask(func, delay) {
		setTimeout(func, delay);
	}
 // TODO: Write a function named `addOneTimeTask` that accepts a function (`func`) and a delay (`delay`) as parameters. This function should add an object containing both parameters into the `oneTimeTasks` array.
}

// Task 3: Run One-Time Tasks Function
function runOneTimeTasks () {
	oneTimeTasks.forEach(task => { 
		setTimeout(task.func, task.delay);
	});
	// TODO: Create a function named `runOneTimeTasks` that iterates over the `oneTimeTasks` array and uses `setTimeout` to schedule each task according to its delay.
}

// Task 4: Start Monitoring Function
function startMonitoring (){
	setInterval(function() {
		console.log("System is being monitored...");
	} , 2000)
	// TODO: Write a function named `startMonitoring` that uses `setInterval` to simulate continuous monitoring. This function should print a message every few seconds and store the interval ID in `monitoringTaskId`.
}

// Task 5: Stop Monitoring Function
function stopMonitoring () {
clearInterval(monitoringTaskId);
	// TODO: Implement a function named `stopMonitoring` that stops the continuous monitoring by using `clearInterval` on `monitoringTaskId`.
}

// Task 6: Start Countdown Function
function startCountdown (duration) {
		let countdown = duration;

	const intervalId = setInterval(() => {
		countdown--;
		console.log(countdown);

			if (countdown <= 0) {
				clearInterval(intervalId);
				console.log("Countdown finished!")
			}
	
	} , 1000)

	// TODO: Create a function named `startCountdown` that takes a duration parameter. Use `setInterval` to decrease the countdown every second and print the remaining time. Use `clearInterval` to stop the countdown when it reaches zero, printing a "Liftoff!" message.
}

// Task 7: Schedule Pre-Launch Activities and Launch
// TODO: Use the functions you've created to schedule the pre-launch system check, start and stop monitoring, and execute the countdown. Make sure to adjust the delays appropriately to simulate a real mission timeline.
function scheduleMission () {

	const preLaunchCheckDelay = 2000;
	const startMonitoringDelay = 3000;
	const monitoringDuration = 5000;
	const countDownStartDelay = 1000;

console.log("Scheduling pre-launch syatems check...");
setTimeout(() => {

	console.log("Pre-launch syatems check complete");

console.log("Scheduling monitoring to start...");
setTimeout(() => {

console.log("Monitoring started.");

console.log("Scheduling monitoring to stop...");
setTimeout(() => {

console.log("Monitoring stopped.");

console.log("Scheduling countdown...");
setTimeout(() => {

console.log("Countdown started.");

				}, countDownStartDelay);
			}, monitoringDuration);
		}, startMonitoringDelay);
	},preLaunchCheckDelay);
}

scheduleMission(); // Starts the mission.
