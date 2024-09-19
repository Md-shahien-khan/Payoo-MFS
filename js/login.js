// step 1 -  setting event handler to  the login button
document.getElementById('button-login').addEventListener('click', function(event){
    // step 2 prevent default behavior (prevent reloading browser)
    event.preventDefault();
    console.log('login button clicked');


    // step 3 getting the phone number
    const phoneNumber = document.getElementById('phone-number').value;
    console.log(phoneNumber);


        
})