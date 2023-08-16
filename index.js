import { createSignal, createEffect, createMemo, untrack } from "./reactive";

const [count, setCount] = createSignal(0);
const [count2, setCount2] = createSignal(2);
const [show, setShow] = createSignal(true);

const sum = createMemo(() => count() + count2());

createEffect(() => {
  if (show()) console.log(count());
  else console.log(untrack(() => count2()));
});

console.log(sum());
setShow(false);
setCount(10);
console.log(sum());
setCount2(10);
