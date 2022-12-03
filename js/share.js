const shareButton = document.querySelector('.share-button');
const shareDialog = document.querySelector('.share-dialog');
const closeButton = document.querySelector('.close-button');

shareButton.addEventListener('click', event => {
    shareDialog.classList.add('is-open');
});

// closeButton.addEventListener('click', event => {
//     shareDialog.classList.remove('is-open');
// });

document.getElementById('pen-url').innerText = window.location.href;
document.getElementById('whatsapp').href = `whatsapp://send?text=${window.location.href}`;

const copyText = () => {
    /* Get the text field */
    let copyText = document.getElementById("pen-url");

    /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText.innerText);

    document.getElementById('copy-link').innerText = 'Copied!';

    setTimeout(function () {
        // Code to run after the pause
        document.getElementById('copy-link').innerText = 'Copy Link';
    }, 1500);
}