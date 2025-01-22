const formSubmissionStatus = document.getElementById('contact-form-submission-status');
const contactFormSubmitBtn = document.getElementById('contact-form-submit-btn');

function contactFormSubmissionFunc(event) {
    event.preventDefault();
    const contactName = document.getElementById('contact-name').value;
    const contactEmail = document.getElementById('contact-email').value;
    const contactNumber = document.getElementById('contact-number').value;
    const messageInput = document.getElementById('message-input').value;

    if (contactName === "" || contactEmail === "" || contactNumber === "" || messageInput === "") {
        formSubmissionStatus.style.color = "red";
        formSubmissionStatus.textContent = "Please fill in all fields.";
    } else {
        formSubmissionStatus.style.color = "green";
        formSubmissionStatus.textContent = "Thank you for your message" + " " + contactName + "," + " " + "We shall reply to you as soon as possible";
    }
}
contactFormSubmitBtn.addEventListener('click', contactFormSubmissionFunc);