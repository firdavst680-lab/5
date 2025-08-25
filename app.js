let input = document.getElementById("amount");
let from = document.getElementById("from");
let to = document.getElementById("to");
let result = document.getElementById("result");
let btn = document.getElementById("btn");

let API =
    "https://api.currencyapi.com/v3/latest?apikey=cur_live_tNNfQ0oK1Jhard0JRyuK8oP5pZLhw86Hn88ozhwm";
fetch(API)
    .then((res) => res.json())
    .then((ketmon) => {
        for (let code in ketmon.data) {
            from.innerHTML += `
            <option value=${code}>${code}</option>
            `;
            to.innerHTML += `
            <option value=${code}>${code}</option>
            `;
        }
    });


btn.addEventListener("click", (e) => {
  e.preventDefault();
  let amount = input.value;
  let fromCurr = from.value;
  let toCurr = to.value;
  
  fetch(API)
    .then((res) => res.json())
    .then((tisha) => {
      let data = tisha.data;
      console.log(data);

      let fromRate = data[fromCurr].value;
      let toRate = data[toCurr].value;

      let converted = (amount / fromRate) * toRate;
      result.textContent = `${amount} ${fromCurr} = ${converted.toFixed(2)} ${toCurr}`;
    });
});