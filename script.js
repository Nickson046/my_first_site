document.getElementById("contact-form").addEventListener("submit", function(e){
    e.preventDefault();
    document.getElementById("form-status").textContent = "Thank you! Your message has been sent.";
    this.reset();
});


const form = document.getElementById("contact-form");
window.addEventListener("scroll", () => {
    const rect = form.getBoundingClientRect();
    if(rect.top < window.innerHeight) {
        form.classList.add("visible");
    }
});
