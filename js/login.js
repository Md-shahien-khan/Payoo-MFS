// step 1 -  setting event handler to  the login button
document.getElementById('button-login').addEventListener('click', function(event){
    // step 2 prevent default behavior (prevent reloading browser)
    event.preventDefault();

    // step 3 getting the phone number and pin number
    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;
    console.log(phoneNumber, pinNumber);


    // step 4 validate the phone and pin
    // this is a temporary way
    if(phoneNumber === '12345' && pinNumber === '12345'){
        console.log('you are logged in');
        window.location.href = '/home.html';
    }
    else{
        alert('wrong phone number or pin')
    }
        
})