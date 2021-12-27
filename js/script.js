let elForm = document.querySelector(".form");
let elFormInput = document.querySelector(".form__input");
let elResult = document.querySelector(".form__result");

elForm.addEventListener('submit', function (evt) {
    evt.preventDefault();

    let inputValue = elFormInput.value;

    function daysOfTheWeek(number) {

        let daysWeek = number % 7;

        switch (daysWeek) {

            case (1):
                return "Monday";

            case (2):
                return "Tuesday";

            case (3):
                return "Wednesday";

            case (4):
                return "Thursday";

            case (5):
                return "Friday";

            case (6):
                return "Saturday";

            case (0):
                return "Sunday";

            default:
                return "bunday kun yuq";
        }

    }

    elResult.textContent = daysOfTheWeek(inputValue);
    console.log(daysOfTheWeek(inputValue));
})