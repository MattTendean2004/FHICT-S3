const usdAmount = 100;
fetch('https://api.exchangerate-api.com/v4/latest/USD')
.then(response => {
if (!response.ok) {
throw new Error('Network response was not OK');
}
return response.json();
})
.then(data => {
const exchangeRate = data.rates.EUR;
const eurAmount = usdAmount * exchangeRate;
console.log(`${usdAmount} USD is approximately ${eurAmount.toFixed(2)} EUR`);
})
.catch(error => {
console.error(error);
});
