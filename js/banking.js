//function for getting deposit/withdraw amount
function getInputValue(inputId) {
    const inputValue = document.getElementById(inputId);
    const inputAmountText = inputValue.value;
    const amountValue = parseFloat(inputAmountText);
    //clear the deposit input field
    inputValue.value = '';
    return amountValue;
}

//function for updating deposit/withdraw amount
function updateTotalField(totalFieldId, amount) {
    const totalElement = document.getElementById(totalFieldId);
    const totalText = totalElement.innerText;
    const previousTotal = parseFloat(totalText);

    const newDepositTotal = previousTotal + amount;
    totalElement.innerText = newDepositTotal;
}

//function for updating balance
function updateBalance(amount, isAdd) {
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    if (isAdd == true) {
        const newBalanceTotal = previousBalanceTotal + amount;
        balanceTotal.innerText = newBalanceTotal;
    }
    else {
        const newBalanceTotal = previousBalanceTotal - amount;
        balanceTotal.innerText = newBalanceTotal;
    }
}

//handle deposit button event
document.getElementById('deposit-button').addEventListener('click', function () {
    const newDepositAmount = getInputValue('deposit-input');
    updateTotalField('deposit-total', newDepositAmount);
    updateBalance(newDepositAmount, true);
})

//handle withdraw event handler
document.getElementById('withdraw-button').addEventListener('click', function () {
    const newWithdrawAmount = getInputValue('withdraw-input');
    updateTotalField('withdraw-total', newWithdrawAmount);
    updateBalance(newWithdrawAmount, false);
})