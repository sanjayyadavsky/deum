import  { useState, useRef } from "react";

// VolumeSlider Component
function VolumeSlider() {
	const [volume, setVolume] = useState<number>(50); // Initialize volume to 50 (midpoint)
	const sliderRef = useRef<HTMLInputElement>(null);

	// Function to handle volume change
	const handleVolumeChange = () => {
		if (sliderRef.current) {
			const newVolume = parseInt(sliderRef.current.value, 10);
			setVolume(newVolume);
		}
	};

	return (
		<div className="w-60 h-8 relative ">
			<input
				type="range"
				className="w-full mt-10 rounded absolute top-2/4 transform-translate-y-2/4" 
				min={0}
				max={100}
				value={volume}
				onChange={handleVolumeChange}
				ref={sliderRef}
				style={{ left: "0" }}
			/>

			<div className="text-center p-2 bg-slate-400">Volume: {volume}</div>
		</div>
	);
}

export default VolumeSlider;
