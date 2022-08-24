

//step-1: add event handler to calculate button

document.getElementById('calculate-btn').addEventListener('click', function () {


    const perPersonField = document.getElementById('per-player-field');
    const perPlayerStirng = perPersonField.value;
    const perPlayerValue = parseFloat(perPlayerStirng)
    console.log(perPlayerValue)

})