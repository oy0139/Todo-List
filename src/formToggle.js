export function formToggle() {
    const form = document.getElementById("my-form");
    const overlay = document.getElementById("form-overlay");

    form.classList.toggle("form-visible");
    overlay.classList.toggle("visible");
}