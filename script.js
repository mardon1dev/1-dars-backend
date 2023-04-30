// 1-vazifa

function Count(str){
  let upper = 0;
  let lower = 0;
  let number = 0;
  let symbol = 0;
  for (let i = 0; i < str.length; i++){
    // if (!isNaN(str[i])) number++;
    if (str[i].match(/\d/)) number++;
    else if(str[i].match(/[a-z]/)) lower++;
    else if (str[i].match(/[A-Z]/)) upper++;
    else symbol++;
  }
  console.log("Upper case letters: " + upper);
  console.log("Lower case letters : " + lower);
  console.log("Number : " + number);
  console.log("Special characters : " + symbol);
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

