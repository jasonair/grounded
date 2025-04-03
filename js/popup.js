// Function to show the social media popup
function showSocialPopup() {
    document.getElementById('socialPopup').style.display = 'block';
}

// Function to close the social media popup
function closeSocialPopup() {
    document.getElementById('socialPopup').style.display = 'none';
}

// Close popup when clicking outside of it
window.onclick = function(event) {
    const popup = document.getElementById('socialPopup');
    if (event.target == popup) {
        popup.style.display = 'none';
    }
}