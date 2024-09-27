function updateAlert(){
    alert("Its completion is still in progress. It will be completed very soon.")
};


//Admin login method
const adminLoginForm = document.getElementById('admin-login-form');

adminLoginForm.addEventListener("submit",function(){
    event.preventDefault();

    let hasError = false ;

    // Get all input Values
    const username = document.getElementById('admin-username').value;
    const password = document.getElementById('admin-password').value;

    
    // clear all error
    document.getElementById("usernameError").innerText="";
    
    document.getElementById("passError").innerText="";

    // Set All Error
    if (username === ""){
        document.getElementById("usernameError").innerText="Username is Requred";
        hasError = true;
    }
    if (password === ""){
        document.getElementById("passError").innerText="Password is Requred";
        hasError = true ;
    }
    
    const realUsername = "arif";
    const realPassword = "aharon@shop";

    if(!hasError){
        if (username === realUsername & password === realPassword){
            document.querySelector(".admin-panel-login").style.display="none"
            document.querySelector(".admin-panel").style.display="block"
            alert("Login Sucessfull");
        }else if(username === realUsername & password !== realPassword){
            document.getElementById("passError").innerText="Invalid Password";
        }else{
            document.getElementById("usernameError").innerText="Invalid Username";
            document.getElementById("passError").innerText="Invalid Password";
        }
    }

});





function highlightText() {
    let inputText = document.getElementById('searchInput').value.trim(); // সার্চ করা টেক্সট
    let productCards = document.getElementsByClassName('product-card'); // সব product-card এলিমেন্ট নেওয়া
    let productNotFoundMessage = document.querySelector('.unfind-error'); // "Product Not Found" বার্তা
    
    document.querySelectorAll('.section-title').forEach(function(element) {
        element.style.display = 'none';
    });

    // সব কন্টেন্ট রিসেট করা এবং সকল section লুকানো
    for (let i = 0; i < productCards.length; i++) {
        productCards[i].style.display = 'none'; // প্রথমে সব লুকান
    }

    // সার্চ টেক্সট ফাঁকা না হলে
    if (inputText !== "") {
        let found = false; // টেক্সট পাওয়া গেছে কি না তা চিহ্নিত করা
        // প্রতিটি product-card এলিমেন্টের মধ্যে লুপ চালানো
        for (let i = 0; i < productCards.length; i++) {
            let productCard = productCards[i];
            let productName = productCard.querySelector('.product-name').innerText;

            // সার্চ করা টেক্সট যদি পাওয়া যায়
            if (productName.toLowerCase().includes(inputText.toLowerCase())) {
                found = true; // টেক্সট পাওয়া গেলে সেটি true হবে
                productCard.style.display = 'block'; // এলিমেন্টটি দেখান
            }
        }

        // যদি টেক্সট পাওয়া না যায়
        if (!found) {
            productNotFoundMessage.classList.remove('d-none'); // বার্তা দেখান
            document.getElementById('category-list').classList.remove('d-none');
        } else {
            productNotFoundMessage.classList.add('d-none'); // বার্তা লুকান
        }
    } else {
        // যদি ইনপুট ফাঁকা হয়, বার্তা লুকান
        productNotFoundMessage.classList.add('d-none');
    }
}