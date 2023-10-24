import { useState, useEffect } from "react";
import DrumButton from "./DrumButton";

type DrumSound = {
	key: string;
	sound: string;
};

function DrumKeys() {
	const drumSounds: DrumSound[] = [
		{ key: "Q", sound: "kick" },
		{ key: "W", sound: "snare" },
		{ key: "E", sound: "hihat" },
		{ key: "A", sound: "tom1" },
		{ key: "S", sound: "tom2" },
		{ key: "D", sound: "crash" },
		{ key: "Z", sound: "ride" },
		{ key: "X", sound: "splash" },
		{ key: "C", sound: "china" },
	];

	const [audioData, setAudioData] = useState<Record<string, string>>({});

	const fetchAudioData = async () => {
		try {
			const soundUrls: Record<string, string> = {
				kick: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
				snare: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
				hihat: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
				tom1: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
				tom2: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
				crash: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
				ride: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
				splash: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
				china: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
			};

			const audioData: Record<string, string> = {};
			for (const sound of drumSounds) {
				if (soundUrls[sound.sound]) {
					audioData[sound.sound] = soundUrls[sound.sound];
				}
			}

			setAudioData(audioData);
		} catch (error) {
			console.error("Error fetching audio data:", error);
		}
	};

	const playDrumSound = (sound: string) => {
		if (audioData[sound]) {
			const audio = new Audio(audioData[sound]);
			audio.play();
		} else {
			console.error(`Sound data for "${sound}" is missing.`);
		}
	};

	useEffect(() => {
		fetchAudioData();
	}, []);

	return (
		<div className="grid grid-cols-3 gap-5">
			{drumSounds.map((drum) => (
				<DrumButton key={drum.key} onClick={() => playDrumSound(drum.sound)}>
					{drum.key}
				</DrumButton>
			))}
		</div>
	);
}

export default DrumKeys;
