document.addEventListener("DOMContentLoaded", function () {
    const heroContents = document.querySelectorAll(".hero-content");
    let currentIndex = 0;

    function showHeroContent(index) {
        heroContents.forEach((content, i) => {
            if (i === index) {
                content.style.opacity = "1";
            } else {
                content.style.opacity = "0";
            }
        });
    }

    function rotateHeroContents() {
        showHeroContent(currentIndex);
        currentIndex = (currentIndex + 1) % heroContents.length;
    }

    // Initially, show the first hero content for 3 seconds
    setTimeout(function () {
        rotateHeroContents();
        // Then continue rotating every 3 seconds
        setInterval(rotateHeroContents, 4000);
    }, 1000); // Show the first hero for 3 seconds
});

// Function to handle file upload
function handleFileUpload(file) {
    // Simulate file upload with a timeout (you can replace this with actual upload logic)
    let progress = 0;
    const interval = setInterval(() => {
        progress += 10;
        if (progress <= 100) {
            document.getElementById('uploadBtn').textContent = `Uploading ${progress}%`;
        } else {
            clearInterval(interval);
            document.getElementById('uploadBtn').textContent = 'Upload';
            // Show success message popup
            alert('Resume uploaded successfully');
        }
    }, 1000);
}

// Add click event listener to the "Upload" button
document.getElementById('uploadBtn').addEventListener('click', () => {
    // Trigger the file input click event when the button is clicked
    document.getElementById('fileInput').click();
});

// Add change event listener to the file input
document.getElementById('fileInput').addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file) {
        // Call the function to handle file upload
        handleFileUpload(file);
    }
});

