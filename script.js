// 1-vazifa

function Count(str){
  let upper = [];
  let lower = [];
  let number = [];
  let symbol = [];
  for (let i = 0; i < str.length; i++){
    // if (!isNaN(str[i])) number++;
    if (str[i].match(/\d/)) number.push(str[i]);
    else if(str[i].match(/[a-z]/)) lower.push(str[i]);
    else if (str[i].match(/[A-Z]/)) upper.push(str[i]);
    else symbol.push(str[i]);
  }
  console.log("Upper case letters: " + upper.join(""));
  console.log("Lower case letters : " + lower.join(""));
  console.log("Number : " + number.join(""));
  console.log("Special characters : " + symbol.join(""));
}

const input = document.querySelector("#input");
const saralash = document.querySelector(".saralash");

saralash.addEventListener("click", ()=>{
    Count(input.value);
})


// 2-mashq

const string = 'i have learned something new today.';
const array = string.split(" ");

for (let i = 0; i < array.length; i++) {
    array[i] = array[i].charAt(0).toUpperCase() + array[i].slice(1);
}
const string2 = array.join(" ");
console.log(`${string2}`);

// 3-mashq

const number  = 1234;
const srt = String(number);
const arr2 = [];

for (let i = 0; i < srt.length; i++) {
    arr2.push(srt[i] ** (i+1))
}
const arr3 = arr2.reduce(
    (a, b) => a + b, 0
)
console.log(arr3);

// 4-mashq

const badWords = /maraz|ahmoq|tentak|ovsar/gi;

const text = document.querySelector("#textarea");
const button  = document.querySelector(".find");
button.addEventListener("click", ()=>{
    const text2 = text.value.replace(badWords, "***");
    text.value = text2;
})

