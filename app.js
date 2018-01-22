document.addEventListener("DOMContentLoaded", function() {
    var inputForm = document.querySelector("#frm1");

    inputForm.addEventListener("submit", checkForm);

    function checkForm(event) {
        event.preventDefault();

        var formFields = document.querySelectorAll("#frm1 input");

        for (var i = 0; i < formFields.length; i++) {
            var thisField = formFields[i];

            //Check for blank entries
            if (thisField.value === "") {
                alert("Please fill in all fields");
                return;
            }

            if (thisField.getAttribute("id") === "credit-card") {
                var ccPattern = /^[0-9]{16}$/;
                if (ccPattern.test(thisField.value)) {
                    continue;
                } else {
                    alert("Please enter a valid credit card number");
                    return;
                }
            }

            if (thisField.getAttribute("id") === "cvc") {
                var ccPattern = /^[0-9]{3}$/;
                if (ccPattern.test(thisField.value)) {
                    continue;
                } else {
                    alert("Please enter a valid credit card number");
                    return;
                }
            }


            if (thisField.getAttribute("id") === "expiration") {
                var passPattern = /^(?=.*[a-zA-Z])(?=.*[0-9]).{4,}$/;

                if (passPattern.test(thisField.value)) {
                    continue;
                } else {
                    alert("Expiration date must be valid");
                        return;
                }
            }
        }

        alert("Thanks for submitting!");
        inputForm.reset();
    }
});
// - In this lab we will be creating validation on a payment form using either conditional statements or regular expressions.
// - Here is the specification for the form:
// 	- FIRST NAME: Must not be blank
// 	- LAST NAME: Must not be blank
// 	- CREDIT CARD NUMBER: 16 Digits only numbers
// 	- EXPIRATION DATE: Format MM/DD numbers only
// 	- CVC: 3 Digits only numbers
