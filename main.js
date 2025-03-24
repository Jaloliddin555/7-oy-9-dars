async function convertCurrency() {
    let amount = document.getElementById("amount").value;
    let fromCurrency = document.getElementById("from").value;
    let toCurrency = document.getElementById("to").value;
    let resultElement = document.getElementById("result");

    if (amount === "" || amount <= 0) {
        resultElement.innerText = "Bor sonni yoz";
        return;
    }

    try {
        let response = await fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`);
        let data = await response.json();
        let rate = data.rates[toCurrency];

        if (rate) {
            let convertedAmount = (amount * rate).toFixed(2);
            resultElement.innerText = `Chiqqani: ${convertedAmount} ${toCurrency.toUpperCase()}`;
        } else {
            resultElement.innerText = "Valyuta kursi topilmadi";
        }
    } catch (error) {
        resultElement.innerText = "Valyuta kursi hatosi";
    }
}