export function formToggle() {
    const formElement = document.getElementById("my-form")

    formElement.classList.toggle('form-visible');

    if (formElement.classList.contains('form-visible')) {
        formElement.style.visibility = 'visible';
    } else {
        formElement.style.visibility = 'hidden';
    }
}