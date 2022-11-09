const random = (from, to) => {
  return Math.floor(Math.random() * (to - from + 1)) + from;
};

const maxNum = (n) => {
  const arr = [];
  for (i = 0; i < n; i++) {
    arr.push(random(1, 100));
  }
  console.log(arr);
  console.log(Math.max(...arr));
};

const sum = (num) => {
  let sum = 0;
  while (num) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }
  console.log(sum);
};

const choose = () => {
  const secret = random(1, 100);
  console.log(secret);
  let choose = prompt("choose number between 1 to 100");
  while (choose != secret) {
    choose = prompt(choose > secret ? "Too big" : "Too small");
  }
  prompt("Bool");
};

const nextChar = (c) => {
  const plus13 = c.charCodeAt(0) + 13;
  if (c >= "a" && c <= "z") {
    return String.fromCharCode(plus13 > 122 ? 96 + plus13 - 122 : plus13);
  } else if (c >= "A" && c <= "Z") {
    return String.fromCharCode(plus13 > 90 ? 64 + plus13 - 90 : plus13);
  } else {
    return c;
  }
};

const rot13 = (word) => {
  let newWord = "";
  Array.from(word).map((letter) => (newWord += nextChar(letter)));
  console.log(newWord);
  return newWord;
};

const isStrongPassword = (password) => {
  const regexp =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
  if (password.match(regexp)) {
    return true;
  }
  return false;
};
