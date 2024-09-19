// add money to the account

// step 1 add event listener to the add money button
document.getElementById('btn-add-money').addEventListener('click', function(event){
    // prevent page reload after form submit
    event.preventDefault();

    // step 2 get the amount money we want to add
    const addMoneyInput = document.getElementById('input-add-money').value;
    // step 3 get the amount money we want to add
    const pinNumberInput = document.getElementById('input-pin-number').value;


    // lets verify the pin (this is not a correct i did because i know the basic only)
    if(pinNumberInput === '12345'){
        console.log('addid money to account');
        // step 5 get the current balance
        const balance = document.getElementById('account-balance').innerText;
        // step 6 add add money input with balance 
        const addMoneyNumber = parseFloat(addMoneyInput);
        const balanceNumber = parseFloat(balance);
        const newBalance = addMoneyNumber + balanceNumber;
        
        // step 6 update balance in the ui or dom
        document.getElementById('account-balance').innerText = newBalance;
    }
    else{
        alert('failer to add money please try again');
    }
    
    
})