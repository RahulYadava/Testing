(() => {
  'use strict'

  // Function to validate the form
  function validateForm(form) {
    if (!form.checkValidity()) {
      form.classList.add('was-validated')
      return false; // Return false if form is invalid
    }
    return true; // Return true if form is valid
  }

  // Your function that gets called when the button is clicked
  function yourFunction() {
    const form = document.querySelector('.needs-validation');
    if (validateForm(form)) {
      // Perform your action here if the form is valid
      console.log('Form is valid. Performing action...');
    } else {
      console.log('Form is invalid. Action not performed.');
    }
  }

  // Bind your function to the button click event
  const button = document.querySelector('.your-button-class');
  button.addEventListener('click', yourFunction);

})();
