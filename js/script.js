function updateAlert(){
    alert("Its completion is still in progress. It will be completed very soon.")
};


//facebook Share
document.getElementById('fbShareButton').addEventListener('click', function () {
    // Get the modal content dynamically
    const modalImage = document.getElementById('modalMainImage').src; // Modal main image
    const modalProductName = document.getElementById('modalProductName').innerText; // Modal product name (caption)
    const modalUrl = window.location.href; // Current URL (with modal open)

    // Create Facebook Share URL
    const fbShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(modalUrl)}&quote=${encodeURIComponent(modalProductName)}&picture=${encodeURIComponent(modalImage)}`;

    // Open the Facebook share dialog in a new window
    window.open(fbShareUrl, '_blank');
});