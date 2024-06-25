const fetch = require("node-fetch");
const fs = require("fs");
require("dotenv").config();
const options = {
	method: "POST",
	headers: {
		"xi-api-key": process.env.XI_API_KEY,
		"Content-Type": "application/json",
	},
	body: JSON.stringify({
		text: "Hola Juan Chacón",
		model_id: "eleven_multilingual_v2",
		voice_settings: {
			stability: 0.5,
			similarity_boost: 0.5,
			style: 0.5,
			use_speaker_boost: true,
		},
		pronunciation_dictionary_locators: [],
	}),
};

fetch(
	"https://api.elevenlabs.io/v1/text-to-speech/pNInz6obpgDQGcFmaJgB?enable_logging=true&optimize_streaming_latency=1",
	options
)
	.then((response) => response.buffer())
	.then((buffer) => {
		fs.writeFile("output.mp3", buffer, () => {
			console.log("Archivo guardado exitosamente.");
		});
	})
	.catch((err) => console.error("Error:", err));
