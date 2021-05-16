function checkInput() {
    let firstName = document.getElementById("firstName").value
    let lastName = document.getElementById("lastName").value
    if ('alt' in window) {
        alt.emit('AUTH:Login', JSON.stringify({ firstName, lastName }))
    }
}
