document.getElementById("contact-form").addEventListener("submit", function(e){
    e.preventDefault();
    document.getElementById("form-status").textContent = "Thank you! Your message has been sent.";
    this.reset();
});
