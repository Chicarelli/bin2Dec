function changedInput(typeInput) {
  if (typeInput === "binary") {
    cleanBinaryValue();
    setDecimalValue(convertBinary(getBinaryValue()));
    return;
  }

  cleanDecimalValue();
  setBinaryValue(convertDecimal(getDecimalValue()));
  return;
}

const getBinaryValue = () => getBinaryInput().value;
const getDecimalValue = () => getDecimalInput().value;

const getBinaryInput = () => document.getElementById("binary");
const getDecimalInput = () => document.getElementById("decimal");

const setBinaryValue = (newValue) => (getBinaryInput().value = newValue);
const setDecimalValue = (newValue) => (getDecimalInput().value = newValue);

const cleanBinaryValue = () =>
  setBinaryValue(getBinaryValue().replace(/[^0-1]/, ""));
const cleanDecimalValue = () =>
  setDecimalValue(getDecimalValue().replace(/^D/, ""));

const convertBinary = (binary) => {
  const text = binary.split("").reverse();

  return text.reduce((acc, obj, index) => {
    return acc + (obj == 0 ? 0 : Math.pow(2, index));
  }, 0);
};

const convertDecimal = (decimalInput) => {
  let binary = "";
  let decimal = Number(decimalInput);

  while (Number(decimal) > 1) {
    binary = "" + binary + (Number(decimal) % 2);
    decimal = Math.floor(decimal / 2);
  }

  return (binary + "1").split("").reverse().join("");
};

function toggleInput() {
  getDecimalInput().disabled = !getDecimalInput().disabled;
  getBinaryInput().disabled = !getBinaryInput().disabled;

  document.getElementById("main_converter").style.flexDirection =
    document.getElementById("main_converter").style.flexDirection ==
    "column-reverse"
      ? "column"
      : "column-reverse";
}
