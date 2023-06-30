

window.onload = function(){
    let emailState = false;

    let emailModal = document.getElementsByClassName('email-modal')[0];
    console.log(emailModal);

    let closeModal = document.getElementsByClassName('email-modal__close-btn')[0];

    let emailInput = document.getElementsByClassName('email-modal__input')[0];

    closeModal.addEventListener('click', () => {
        emailModal.classList.remove('email-modal--visible');
    });
    
    let showModal = () => {
        if(emailState == false){
            emailModal.classList.add('email-modal--visible');
            emailState = true;
        }
    }

    document.body.addEventListener('mouseleave', () => {
        showModal();
    });

    console.log(document)
}