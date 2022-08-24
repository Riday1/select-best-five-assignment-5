function getInputFieldValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputValueStirng = inputField.value;
    const inputValue = parseFloat(inputValueStirng);
    return inputValue;
}


function setElementValueById(elementId, value) {
    const element = document.getElementById(elementId)
    element.innerText = value;
}
