import Toggle from "./Toggle";
import VolumeOptimizer from "./VolumeOptimizer";

function AudioController() {
	return (
		<div className="flex items-center flex-col justify-between">
			<div className="flex flex-col">
				<span>Power</span>
				<Toggle />
			</div>
			<VolumeOptimizer />
			<div className="flex flex-col">
				<span>Bank</span>
				<Toggle />
			</div>
		</div>
	);
}

export default AudioController;
