document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.querySelector("form");

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault(); 
    
        let name = document.querySelector("input[name='name']").value.trim();
        let email = document.querySelector("input[name='email']").value.trim();
        let message = document.querySelector("textarea[name='message']").value.trim();

        if (name === "" || email === "" || message === "") {
            alert("Please fill in all fields before submitting.");
            return;
        }

        alert(`Thank you, ${name}! Your message has been received.`);

        contactForm.reset();
    });
});
