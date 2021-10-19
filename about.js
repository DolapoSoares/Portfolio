/*-------------Contact Me-----------*/

    var fields = {}

    document.addEventListener("click", function(){
        fields.Name = document.getElementById("name");
        fields.Email = document.getElementById("email");
        fields.subject = document.getElementById("subject");
        fields.Message = document.getElementById("message");

    })

    function isEmail(email) {
        let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
        return regex.test(String(email).toLowerCase());
       }
       function fieldValidation(field, validationFunction) {
        if (field == null) return false;
       
        let isFieldValid = validationFunction(field.value)
        if (!isFieldValid) {
        field.className = 'placeholderRed';
        } else {
        field.className = '';
        }
       
        return isFieldValid;
       }
    
       function fieldValidation(field, validationFunction) {
        if (field == null) return false;
       
        let isFieldValid = validationFunction(field.value)
        if (!isFieldValid) {
        field.className = 'placeholderRed';
        } else {
        field.className = '';
        }
       
        return isFieldValid;
       }
       function isValid() {
        var valid = true;
        
       
        valid &= fieldValidation(fields.Name, isNotEmpty);
        valid &= fieldValidation(fields.Email, isEmail);
        valid &= fieldValidation(fields.Subject, isNotEmpty);
        valid &= fieldValidation(fields.Message, isNotEmpty);
       
        return valid;
       }
       class User {
        constructor(Name,Email,Subject,Message) {
        this.Name = Name;
        this.Email = Email;
        this.Subject = Subject;
        this.Message = Message;
        }
       }

       function sendMessage(){
           if (isValid()){
               let usr = new User(Name.value, Email.value, Subject.value, Message.value);

               alert(`${user.Name} thanks for reaching out`)
           }else{
               alert("There was an error")
           }
       }