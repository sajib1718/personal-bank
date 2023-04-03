document.getElementById('btn-withdraw').addEventListener('click', function () {
    const withDrawField = document.getElementById('withdraw-field');
    const newWithDrawAmountString = withDrawField.value;
    const newWithDraw = parseFloat(newWithDrawAmountString);

    withDrawField.value = '';

    if (isNaN(newWithDraw)) {

        alert('please provide valid amonut');
        return;
    }



    const withDrawTotalElement = document.getElementById('withdraw-total');
    const withDrawTotalElementString = withDrawTotalElement.innerText;
    const previousWithDraw = parseFloat(withDrawTotalElementString);




    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);



    if (newWithDraw > previousBalanceTotal) {
        alert('Insufficient Balance');
        return;
    }
    const newWithDrawTotal = previousWithDraw + newWithDraw;
    withDrawTotalElement.innerText = newWithDrawTotal;

    const newBalanceTotal = previousBalanceTotal - newWithDrawTotal;
    balanceTotalElement.innerText = newBalanceTotal;

})

document.getElementById('btn-logout').addEventListener('click', function () {
    window.location.href = 'index.html';


})