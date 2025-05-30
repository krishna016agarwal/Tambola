const c = document.querySelector(".main");
const s = document.querySelector(".start");
const n = document.querySelector(".number");
const m = document.querySelector(".new");
const l = [];
var e;
(function(){
   e=prompt("enter a number");
})()


getrandomnumber = () => {
  if (l.length === 0) {
    alert("Game over");
    return null;
  }

  const index = Math.floor(Math.random() * l.length); // index from 0 to l.length - 1
 

  function speakNumber(number) {
    const utterance = new SpeechSynthesisUtterance(number.toString());
    speechSynthesis.speak(utterance);
  }

  const number = l[index];
  n.innerText = number;
  const g = document.querySelector(`.a${number}`);
  g.classList.remove("number");
  g.classList.add("open");
  speakNumber(number);
  l.splice(index, 1); // Remove the number from array
  return number;
};
m.addEventListener("click", () => location.reload());

s.addEventListener("click", () => {
  getrandomnumber();
});

for (let i = 1; i <= e; i++) {
  l.push(i);
  c.innerHTML += `
  <div class="number a${i}"> ${i} </div>`;
}
