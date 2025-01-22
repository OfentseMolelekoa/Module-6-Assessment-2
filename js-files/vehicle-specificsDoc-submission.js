const documentSubmitBtn = document.getElementById('submit-document-btn');
const fileInput = document.getElementById('vehicle-specifics-file-input');


function changeSubmissionStatusText() {
    const docSubmissionStatusText = document.getElementById('doc-submission-status');

    // conditional statement checks if the file lentgh (name) is equal to 0 (if true = no file upload)
    // an error message is displayed Error: Please upload a document before submitting
    // if the file lentgh is more than 0 (file might be uploaded) a success status is displayed
    // Success: Your document has been submitted. We will get in touch with you soon
    if (fileInput.files.length === 0) {
        docSubmissionStatusText.style.color = 'red';
        docSubmissionStatusText.textContent = "Error: Please upload a document before submitting.";
    } else {
        docSubmissionStatusText.style.color = 'green';
        docSubmissionStatusText.textContent = "Success: Your document has been submitted. We will get in touch with you soon";
    }
}

documentSubmitBtn.addEventListener('click', changeSubmissionStatusText);
