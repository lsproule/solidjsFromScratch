import { createSignal, createEffect, createMemo, untrack } from "./reactive";

const [count, setCount] = createSignal(0);
const [count2, setCount2] = createSignal(2);
const [show, setShow] = createSignal(true);

const sum = createMemo(() => count() + count2());

const h1 = document.createElement("h1");
const button = document.createElement("button");
button.textContent = "+1";
button.onclick = () => setCount(count() + 1);

createEffect(() => {
  if (show()) console.log(count());
  h1.textContent = `Cuenta es ${count()}`;
});

console.log(sum());
setCount(10);
console.log(sum());
setCount2(10);

document.body.textContent = "";
document.body.append(...[h1, button]);
