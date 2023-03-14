const SERVER_URL = "http://localhost:8000/contacts";

window.onload = () => {

    function _handleSubmitButton() {
        const name = document.querySelector('#name').value;
        const email = document.querySelector('#email').value;
        const phone = document.querySelector('#phone').value;
        const message = document.querySelector('#txt').value;

        const newContact = {
            name,
            email,
            phone,
            message
        }

        if(_validateForm(name)){
            _saveContactData(newContact)
    }

    }

    function _saveContactData(contact) {
    fetch(SERVER_URL, {
        method: "POST", 
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'
        },
        body: JSON.stringify(contact)
    })
    .then(response => {
        if (response.status >= 200 && response.status < 300) {
            alert('Form submitted successfully!');
        } else {
            alert('There was an error submitting the form. Please try again later.');
        }
    })
    .catch(error => {
        console.error(error);
        alert('There was an error submitting the form. Please try again later.');
    });
    }

    function _validateForm(name, email) {
        if (name == "") {
            alert("Name must be filled out");
            return false
        } else if (name === "Ironhack") {
            alert("You cannot be Ironhack, because I am Ironhack.")
            return false
        } 

        const filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    
        if (!filter.test(email)) {
            alert('Please provide a valid email address');
            return false;
        }

        return true

    }

    function _bindEvents() {
        const submitButton = document.getElementById('button');
        
        submitButton.addEventListener('click', _handleSubmitButton);
    }

    _bindEvents();


}