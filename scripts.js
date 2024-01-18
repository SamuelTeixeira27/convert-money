const convertButton = document.querySelector(".convert-button");
const currencySelect = document.querySelector(".currency-select");

function convertValues() {
  const inputCurrencyValue = parseFloat(document.querySelector(".input-currency").value.replace("R$", "").replace(".", "").replace(",", "."));

  const currencyValueToConvert = document.getElementById("currency-value-to-convert");
  const inputCurrencyValueConverted = document.getElementById('currency-value');

  const dolarToday = 5.2;
  const euroToday = 6.2;
  const bitcoinToday = 9.2;

  if (currencySelect.value == 'dolar') {
    inputCurrencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputCurrencyValue / dolarToday);
  }

  if (currencySelect.value == 'euro') {
    inputCurrencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inputCurrencyValue / euroToday);
  }

  currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
  }).format(inputCurrencyValue);

  if (currencySelect.value == "bitcoin") {
    inputCurrencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "BTC"
    }).format(inputCurrencyValue / bitcoinToday);
  }
}

function changeCurrency() {
  const currencyName = document.getElementById("currency-name");
  const currencyImage = document.querySelector(".currency-img");

  if (currencySelect.value == "dolar") {
    currencyName.innerHTML = "Dólar americano";
    currencyImage.src = "./img/dolar.png";
  }

  if (currencySelect.value == "euro") {
    currencyName.innerHTML = "EURO";
    currencyImage.src = "./img/euro.png";
  }

  if (currencySelect.value == "bitcoin") {
    currencyName.innerHTML = "bitcoin";
    currencyImage.src = "img/bitcoin 1.png";
  }

  convertValues();
}

currencySelect.addEventListener("change", changeCurrency);
convertButton.addEventListener("click", convertValues);
