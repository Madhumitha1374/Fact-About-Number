let userInput = document.getElementById('userInput');
let factEl = document.getElementById('fact');

function getnumber(event) {
    if (event.key === "Enter") {
        let userInputValue = userInput.value;
        console.log(userInputValue)
        let url = 'https://apis.ccbp.in/numbers-fact?number=' + userInputValue;
        let options = {
            method: "GET"
        }
        fetch(url, options)
            .then(function(response) {
                return response.json();
            })
            .then(function(jsonData) {
                let {
                    fact
                } = jsonData;
                factEl.textContent = fact;
            })
    }
}
userInput.addEventListener('keydown', getnumber);