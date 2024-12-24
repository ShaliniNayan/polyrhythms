const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

function playSound(frequency = 440, duration = 1) {
	const oscillator = audioCtx.createOscillator();
	oscillator.connect(audioCtx.destination); // Connect the oscillator to the audio context destination (output)
	oscillator.frequency.setValueAtTime(frequency, audioCtx.currentTime); // Set the initial frequency = frequency; // Set the frequency of the oscillator (in Hz)
	oscillator.start(); // Start the oscillator
	oscillator.stop(audioCtx.currentTime + duration); // Stop the oscillator after the specified duration
}