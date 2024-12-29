const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

function playSound(frequency = 440, duration = 1) {
	const oscillator = audioCtx.createOscillator();
	const envelope = audioCtx.createGain(); // Create a gain node to control the volume
	oscillator.connect(envelope); // Connect the oscillator to the audio context destination (output)
	envelope.connect(audioCtx.destination); // Connect the oscillator to the audio context destination (output)

	envelope.gain.setValueAtTime(0, audioCtx.currentTime); // Set the initial volume to 0 (silent)
	envelope.gain.linearRampToValueAtTime(0.05, audioCtx.currentTime + 0.05); // Gradually increase the volume to 1 (full volume)
	envelope.gain.linearRampToValueAtTime(0, audioCtx.currentTime + duration); // Gradually decrease the volume to 0 (silent)

	oscillator.frequency.setValueAtTime(frequency, audioCtx.currentTime); // Set the initial frequency = frequency; // Set the frequency of the oscillator (in Hz)

	oscillator.start(); // Start the oscillator
	oscillator.stop(audioCtx.currentTime + duration); // Stop the oscillator after the specified duration
}