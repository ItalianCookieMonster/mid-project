const SERVER_URL = "http://localhost:8000/contacts";

window.onload() = () => {

    const name = getElementbyId('name');
    const email = getElementbyId('email');
    const phone = getElementbyId('phone');
    const message = getElementbyId('txt');

    function _handleSubmitButton() {
        const newContact = {
            name,
            email,
            phone,
            message
        }

        return newContact
    }

    function saveContactData() {
    fetch("SERVER_URL", {
        method: "POST", 
        body: JSON.stringify(newContact)
    }).then(res => {
        console.log("Request complete! response:", res);
    });
    
    }

    function _bindEvents {
        const submitButton = document.querySelector('#button');
	    submitButton.addEventistener('click', _handleSubmitButton);

    }







}