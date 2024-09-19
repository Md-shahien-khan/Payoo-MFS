document.getElementById('btn-cash-out').addEventListener('click', function(event){
    event.preventDefault();
    console.log('cash out pressed');


    const cashOut = document.getElementById('input-cash-out').value;
    const cashOutNumber = parseFloat(cashOut)
    const pinNumber= document.getElementById('input-cash-out-pin').value;

    console.log(cashOut, pinNumber)
    // verify the pin number (this is not a right way)
    if(pinNumber === '12345'){
        const balance = document.getElementById('account-balance').innerText;
        const balanceNumber = parseFloat(balance);

        // reducing the balance
        const newBalance = balanceNumber - cashOutNumber;
        // update the ui
        document.getElementById('account-balance').innerText = newBalance;
    }
    else{
        console.log('failed to cashout')
    }
})