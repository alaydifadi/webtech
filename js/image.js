const UNSPLASH_ACCESS_KEY = 'nNtXkusZhW-iggADJlW4VZLLQoDkXozl3zjjopgCIKE';

async function fetchUnsplashImages(query) {
    const endpoint = `https://api.unsplash.com/search/photos?query=${query}&client_id=${UNSPLASH_ACCESS_KEY}`;
    try {
        const response = await fetch(endpoint);
        const data = await response.json();
        return data.results; // Return an array of image results
    } catch (error) {
        console.error('Error fetching images from Unsplash:', error);
        return [];
    }
}

async function populateCarousel() {
    const images = await fetchUnsplashImages('servers devices');
    const carouselInner = document.getElementById('carouselImages');

    if (images.length > 0) {
        images.forEach((image, index) => {
            // Create a carousel item
            const carouselItem = document.createElement('div');
            carouselItem.className = `carousel-item ${index === 0 ? 'active' : ''}`;

            // Create the image element
            const imgElement = document.createElement('img');
            imgElement.src = image.urls.regular;
            imgElement.className = 'd-block w-100';
            imgElement.alt = `Server Image ${index + 1}`;
            imgElement.style.objectFit = 'cover'; // Ensure the image fits well
            imgElement.style.height = '400px'; // Set consistent height for all images

            // Append image to carousel item
            carouselItem.appendChild(imgElement);

            // Append carousel item to carousel inner
            carouselInner.appendChild(carouselItem);
        });
    } else {
        console.error('No images found to display.');
    }
}

// Populate the carousel when the page loads
document.addEventListener('DOMContentLoaded', populateCarousel);
