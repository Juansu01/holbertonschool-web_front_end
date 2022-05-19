
function displayFullName(fullName) {
    alert("Welcome " + fullName + "!")
}

function welcome(firstName, lastName) {
    let fullName
    fullName = firstName + " " + lastName;

    function displayFullName(fullName) {
        alert("Welcome " + fullName + "!")
    }
    displayFullName(fullName)
}
