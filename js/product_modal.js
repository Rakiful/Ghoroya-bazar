// Function to open modal and update content
function openModal(productCard) {
    const modal = document.getElementById('productModal');
    const modalMainImage = document.getElementById('modalMainImage');
    const smallImagesContainer = document.querySelector('.small-images');
    const modalProductName = document.getElementById('modalProductName');
    const modalProductStock = document.getElementById('modal-product-stock');
    const modalProductPrice = document.getElementById('modalProductPrice');
    const modalRatingBox = document.getElementById('modal-rating-box');
    const modalProductDescription = document.getElementById('modalProductDescription');
    const productImages = productCard.querySelectorAll('.product-ex-img');
    const cardImage = productCard.querySelector('#card-img-top').src;
    const productName = productCard.querySelector('#product-name').textContent;
    const productStock = productCard.querySelector('#prodact-stock').textContent;
    const productPriceHTML = productCard.querySelector('#pricing').innerHTML;
    const productPrice = parseFloat(productCard.querySelector('#pricing .new-price').textContent.replace(/[^\d.-]/g, ''));
    const productDescription = productCard.querySelector('.card-text').textContent;
    
    // Update modal content
    modalMainImage.src = cardImage;
    modalProductName.textContent = productName;
    modalProductStock.textContent = `Availability: ${productStock}`;
    modalProductPrice.innerHTML = productPriceHTML;
    modalProductDescription.textContent = productDescription;

    // Clear existing small images
    smallImagesContainer.innerHTML = '';

    // Add new small images
    productImages.forEach((img) => {
        const imageBox = document.createElement('div');
        imageBox.className = 'image-box';
        const smallImg = document.createElement('img');
        smallImg.src = img.src;
        smallImg.className = 'image';
        imageBox.appendChild(smallImg);
        smallImagesContainer.appendChild(imageBox);

        // Add click event to update main image
        smallImg.addEventListener('click', () => {
            modalMainImage.src = smallImg.src;
        });
    });

    // Show the modal
    modal.style.display = 'flex';

    // Attach the updateCart function to the quantity input with the dynamic price
    document.getElementById("modalQuantity").addEventListener('input', function() {
        updateCart(productPrice);
    });

     // Set the product name in the modal's input field
     document.getElementById('getProductName').value = productName;


}

// Add click event listeners to all order buttons
document.querySelectorAll('.order-btn').forEach(button => {
    button.addEventListener('click', (event) => {
        const productCard = event.target.closest('.product-card');
        openModal(productCard);
    });
});

// Add click event listener to modal close button
document.querySelector('.close-button').addEventListener('click', () => {
    document.getElementById('productModal').style.display = 'none';
});

// Close modal when clicking outside of it
window.addEventListener('click', (event) => {
    const modal = document.getElementById('productModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

document.querySelector('select[name="Your city"]').addEventListener('change', function() {
    var deliveryChargeInput = document.getElementById('getDeleveryCharge');
    if (this.value === 'in Chittagong') {
        deliveryChargeInput.value = 60;
    } else if (this.value === 'Out of Chittagong') {
        deliveryChargeInput.value = 120;
    }
});

// Update cart function to be used in modal
function updateCart(productPrice) {
    var a = document.getElementById("modalQuantity").value;
    var b = a * productPrice;
    document.getElementById("modalSubTotal").value = b.toFixed(2);
    
    var c = (b * 0) / 100;  // Tax is 0%
    document.getElementById("modalSalesTax").value = c.toFixed(2);
    
    var deliveryCharge = parseFloat(document.getElementById("getDeleveryCharge").value) || 0;
    var d = b + deliveryCharge;
    document.getElementById("modalTotal").value = d.toFixed(2);
}

// Function to handle delivery charge selection
function updateDeliveryCharge() {
    var selectBox = document.querySelector('select[name="Your city"]');
    var selectedValue = selectBox.value;

    if (selectedValue === "in Chittagong") {
        document.getElementById("getDeleveryCharge").value = 60;
    } else if (selectedValue === "Out of Chittagong") {
        document.getElementById("getDeleveryCharge").value = 120;
    } else {
        document.getElementById("getDeleveryCharge").value = 0;
    }

    // Recalculate the total
    updateCart(getProductPrice());
}

// Function to correctly extract the product price from modal
function getProductPrice() {
    // Extract the price from modalProductPrice (assuming price is in the span with class 'new-price')
    var priceText = document.querySelector('#modalProductPrice .new-price').innerText;
    var price = parseFloat(priceText.replace('৳', '').trim());
    return price;
}

// Add event listener for delivery charge selection
document.querySelector('select[name="Your city"]').addEventListener('change', updateDeliveryCharge);

// Add event listener for quantity input in the modal
document.getElementById("modalQuantity").addEventListener('keyup', () => {
    updateCart(getProductPrice());
});





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