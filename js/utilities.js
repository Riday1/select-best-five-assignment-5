


//fuction to set the button disabled after clicked the (select) button 
function selectButtonAndDisableThem(buttonId) {
    document.getElementById(buttonId).setAttribute('disabled', true)
    document.getElementById(buttonId).classList.add('bg-secondary')
}




//function to set the (appendChild) into the order list 
function setAppendChildToParentNode(elementValue) {
    const listItem = document.createElement('li')
    listItem.innerText = elementValue
    document.getElementById('list-item-container').appendChild(listItem)
}


//function to get the input Value from the input field
function getInputFieldValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputValueStirng = inputField.value;
    const inputValue = parseFloat(inputValueStirng);
    return inputValue;
}

//function to set the innerText into element 
function setElementValueById(elementId, value) {
    const element = document.getElementById(elementId)
    element.innerText = value;
}
