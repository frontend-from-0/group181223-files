// Events to check that page is loaded (should be applied to window object):
// DOMContentLoaded - DOM fully loaded
// load - all elements (including images and styles) are loaded
window.addEventListener('load', function () {
	const imageElements = document.querySelectorAll('img');
	const previousButton = document.getElementById('btnPrev');
	const nextButton = document.getElementById('btnNext');
	const indicatorElements = document.getElementsByClassName('indicator');

	// Create application state to keep track of the current index
	let activeImg = 0;
	nextButton.addEventListener('click', showNextImage);
	previousButton.addEventListener('click', showPrevImage);

	// Show images function
	function showImage(activeIndex) {
		for (let i = 0; i < imageElements.length; i++) {
			imageElements[i].classList.remove('active');
		}

		for (let i = 0; i < indicatorElements.length; i++) {
			indicatorElements[i].classList.remove('active');
		}

    // Alternative solution:
    // if (imageElements.length === indicatorElements.length) {
    //   for (let i = 0; i < imageElements.length; i++) {
    //     imageElements[i].classList.remove('active');
    //     indicatorElements[i].classList.remove('active');
    //   }
    // }

		imageElements[activeIndex].classList.add('active');
		indicatorElements[activeIndex].classList.add('active');
	}

	// handle next click
	function showNextImage() {
		console.log('Active image', activeImg);
		// increase activeImg. What happens if the current index is > than number of images that we have?
		// if(activeImg >= imageElements.length - 1) {
		//   activeImg=0;
		// } else ++activeImg;

		if (activeImg < imageElements.length - 1) {
			++activeImg;
		} else {
			activeImg = 0;
		}
		showImage(activeImg);
	}

	// handle previous click
	function showPrevImage() {
		if(activeImg <=0){
			activeImg = imageElements.length -1;
		} else{
			--activeImg;
		}
		showImage(activeImg);
	}

	// Add event listeneters for button clicks

	// Switch images after 3 seconds automatically using setInterval function
	// Use 3000 value for 3 second delay
  setInterval(showNextImage, 3000);
});
