



//step-1: add event handler to calculate button

document.getElementById('calculate-btn').addEventListener('click', function () {

    //get the number of total player from order list 

    const playerLIst = document.querySelectorAll('#list-item-container li')
    const playerNumber = playerLIst.length;


    //sep-2: get the value of perPlayer field
    const perPlayerValue = getInputFieldValue('per-player-field')

    const perPlayerTotalCost = perPlayerValue * playerNumber;

    if (isNaN(perPlayerTotalCost)) {
        alert('enter a number ')
        return;
    }
    else if (playerNumber == 0) {
        alert('select a player');
        return;
    }

    //step-3: set the value to PlayerExpensess Element
    setElementValueById('total-player-Cost', perPlayerTotalCost)


})

//step-4
document.getElementById('calculate-total-btn').addEventListener('click', function () {


    //step-5 : get the manager Cost from manager input field
    const managerCost = getInputFieldValue('manager-field')
    //step-6 : get the Coach Cost from cost input field
    const coachCost = getInputFieldValue('coach-field')

    //ste-7 : get the value of Per Player from the element 
    if (isNaN(managerCost)) {
        alert("Enter a number")
        return;
    }
    else if (isNaN(coachCost)) {
        alert("Enter a number")
        return;
    }
    const perPlayerTotalElement = document.getElementById('total-player-Cost')

    const perPlayerTotalElementString = perPlayerTotalElement.innerText;
    const perPlayerTotalAmout = parseFloat(perPlayerTotalElementString);

    //step-8: calculate total cost 
    const totalCost = perPlayerTotalAmout + coachCost + managerCost;

    console.log(totalCost)

    //step-9 : set the total Cost to the totalElement 

    setElementValueById('totalCost', totalCost)


})