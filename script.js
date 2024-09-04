// Function to simulate adding product to cart
function addToCart(productName) {
    alert(productName + " has been added to your cart!");
}

// Handle comment form submission
document.getElementById('commentForm').onsubmit = function(event) {
    event.preventDefault();
    let name = document.getElementById('name').value;
    let comment = document.getElementById('comment').value;

    if (name && comment) {
        let commentSection = document.getElementById('commentSection');
        let newComment = document.createElement('p');
        newComment.innerHTML = "<strong>" + name + ":</strong> " + comment;
        commentSection.appendChild(newComment);
    } else {
        alert("Please fill in both fields!");
    }
};

// Handle contact form submission
document.getElementById('contactForm').onsubmit = function(event) {
    event.preventDefault();
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    if (email && message) {
        alert("Message sent! We'll get back to you soon.");
    } else {
        alert("Please fill in both fields!");
    }
};
