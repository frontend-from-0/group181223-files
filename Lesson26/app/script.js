const API_KEY = 'qCnxm3oi9NS9mzAkGmh7_4B6V3p6DJnyFs_wKfNQFF4';
const URL = `https://api.unsplash.com/photos/random?count=10&client_id=qCnxm3oi9NS9mzAkGmh7_4B6V3p6DJnyFs_wKfNQFF4`;

// 0.
// 1. Select button fetch-button
// 2. Add event listener (click)
// 3. Write a fetch function
// 4. Get urls.regular and alt_description. Add them to the newly created <img> element.
// 5. Append img element to the image-container div.

const button = document.getElementById('fetch-button');
button.addEventListener('click', () => {
	fetch(`https://api.unsplash.com/photos/random?count=10&client_id=${API_KEY}`)
		.then((response) => response.json())
		.then((data) =>
			data.map((imgData) => {
				const newImage = document.createElement(`img`);
				newImage.src = imgData.urls.regular;
				newImage.alt = imgData.alt_description;
				newImage.classList.add('image');
				const imageContainer = document.querySelector(`#image-container`);
				imageContainer.appendChild(newImage);
			})
		)
		.catch((error) => console.log(error));
});
