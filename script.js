const buttonCheck = document.getElementById("check-btn");
const textInput = document.getElementById("text-input");
const result = document.getElementById("result");

const checkIfInputHasValue = () => {
  const value = textInput.value;

  if (!value) {
    alert("Please input a value");
    return;
  }
  result.innerHTML = verifiedPalindrome(value);
};

buttonCheck.addEventListener("click", checkIfInputHasValue);

const verifiedPalindrome = (value) => {
  const regex = /[^a-zA-Z0-9]/g;
  const text = value.replace(regex, "");
  const reverseText = text.split("").reverse().join("").split(" ").join("");
  const originalText = text.split(" ").join("");

  return originalText.toLowerCase() === reverseText.toLowerCase()
    ? (result.innerHTML = `<strong>${value}</strong> is a palindrome`)
    : (result.innerHTML = `<strong>${value}</strong> is not a palindrome`);
};
