function changedInput(typeInput) {
  if (typeInput === "binary") {
    cleanBinaryValue();
    setDecimalValue(convertBinary(getBinaryValue()));
    return;
  }

  cleanDecimalValue();
  console.log("decimal");
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
