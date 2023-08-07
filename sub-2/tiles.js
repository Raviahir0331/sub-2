function CheckLogin(){
    let email = document.getElementById('form3Example3c').value;
    let password = document.getElementById('form3Example4c').value;
    console.log("Username = " + email + " Password = " + password);
    if(email.length == 0&&password.length == 0){
        alert("email or password must be required")
    }
    let storedData = JSON.parse(sessionStorage.getItem("userDatabase"));
    let matchData = storedData.filter(function (e) {
        return e.email == email && e.password == password;
    });
    console.log(matchData);
    if (matchData.length == 0) {
        console.log("invalid login");
        //return false;
    }
    else {
        console.log("login sucssesfull");
        //return true;
    }
    return true;
    //console.log(matchData);
}
const userdata = [];
function checkRegister() {

    let name = document.getElementById('form3Example1c').value;
    let email = document.getElementById('form3Example3c').value;
    let password = document.getElementById('form3Example4c').value;
    let repeat = document.getElementById('form3Example4cd').value;
    let gender = "";
    if (document.getElementById('Male').checked) {

        gender = "Male";
    } else {
        gender = "Female";

    }
    let address = document.getElementById('ravi12').value;
    let city = document.getElementById('city').value;
    let dob = document.getElementById('dob').value;

    if (name.length == 0) {
        //  alert("name must be fiiled");
        return false;
    }

    if (email.length == 0) {
        // alert("email-id must be filled out");
        return false;
    }
    else if (password.length == 0) {
        // alert("please Enter the password");
        return false;
    }
    if (repeat.length == 0) {
        // alert(" repeat password must be required");
        return false;
    }
    else if (address.length == 0) {
        // alert("Enter the Your Address");
        return false;
    }
    else if (dob.length == 0) {
        // alert("ENTER YOUR BIRTHDATE");
        return false;
    }
    else {
        // console.log("Username = " + name + "Email = " + email + "password = " + password + "repeat password= " + repeat);
        // console.log("gender= " + gender + "address=" + address + "city=" + city + "dob=" + dob);
        userdata.push({
            name: name,
            email: email,
            password: password,
            repeat: repeat,
            gender: gender,
            address: address,
            city: city,
            dob: dob

        });
        console.log(JSON.stringify(userdata));
        //session code
        sessionStorage.setItem("userDatabase", JSON.stringify(userdata));

        // store testArrayarray

      //  let storedata = JSON.parse(sessionStorage.getItem("userDatabase"));

        // getting data in array

      //  console.log(storedata)
        return true;
    }


}