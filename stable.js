import { toBase64, uploadFile } from "./ai_camp_day3.js";

let input = document.querySelector(".user-input");
let submit = document.querySelector(".submit");

async function query(data) {
	const response = await fetch(
		"https://router.huggingface.co/nscale/v1/images/generations",
		{
			headers: {
				Authorization: `Bearer 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`,
				"Content-Type": "application/json",
			},
			method: "POST",
			body: JSON.stringify(data),
		}
	);
	const result = await response.json();
	console.log(result);

	const b64string = result.data[0].b64_json;

	console.log(b64string);

	const mimeType = "image/png";
	const uri = `data:${mimeType};base64,${b64string}`;
	console.log(uri);

	return uri;
}

submit.addEventListener("click", () => {
	
	console.log(input.value);
	
	if (input.value != "") {
		query({
			response_format: "b64_json",
			prompt: input.value,
			model: "stabilityai/stable-diffusion-xl-base-1.0",
		}).then(async (response) => {

			let imageURL = await uploadFile(response);
			console.log(imageURL);

			let img = document.createElement('img');
			img.src = imageURL;
			document.body.appendChild(img);
		});
	}
});