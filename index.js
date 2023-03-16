const emailInput = document.getElementById('emailInput');
const button = document.querySelector('.btnForm');

function _getEmail () {
    button.addEventListener('click', (event) =>{
    const userEmail = emailInput.value;

    window.location.href=`/contact-us-page/contact.html?email=${userEmail}`;
})
}

_getEmail()