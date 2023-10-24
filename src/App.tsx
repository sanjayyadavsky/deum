import AudioController from "./components/AudioController";
import DrumKeys from "./components/DrumKeys";
function App() {
	return (
		<div className="bg-gray-100 h-screen flex justify-center items-center">
			<div className="p-5 flex gap-x-10 border-2 border-blue-500  bg-gray-100">
				<DrumKeys/>
                <AudioController/>
			</div>
		</div>
	);
}

export default App;
