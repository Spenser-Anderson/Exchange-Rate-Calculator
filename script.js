const currencyEl1 = document.getElementById('currency-one');
const currencyEl2 = document.getElementById('currency-two');
const amountEl1 = document.getElementById('amount-one');
const amountEl2 = document.getElementById('amount-two');

const rateEl = document.getElementById('rate');
const swapEl = document.getElementById('swap');


//Fetch exchange rate and update the DOM
function calculate() {
const currency1 = currencyEl1.value;
const currency2 = currencyEl2.value;
//Double check the value of the currecny elements
//console.log(currency1, currency2);


fetch(`https://v6.exchangerate-api.com/v6/7cfcfcb538179968a3767fd6/latest/${currency1}`)
    .then(res => res.json())
    .then(data => {
        // console.log(data); //double check api data
    const rate = data.conversion_rates[currency2];
        rateEl.innerHTML = `1 ${currency1} = ${rate} ${currency2}`;
    //double check the conversion rates in the json data
    //console.log(rate);

    amountEl2.value = (amountEl1.value * rate).toFixed(2);



    })

}

//Event Listeners
currencyEl1.addEventListener('change', calculate);
amountEl1.addEventListener('input', calculate);
currencyEl2.addEventListener('change', calculate);
amountEl2.addEventListener('input', calculate);

swapEl.addEventListener('click', () =>{
    let temp = currencyEl1.value;
    currencyEl1.value = currencyEl2.value;
    currencyEl2.value = temp;
    calculate();
})



calculate();
