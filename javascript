function convertToFar() {
  const celsius = parseFloat(document.getElementById("celsius").value);
  if (!isNaN(celsius)) {
      const fahrenheit = (celsius * 9/5) + 32;
      document.getElementById("result").innerText = `Fahrenheit: ${fahrenheit.toFixed(2)}°F`;
  } else {
      alert("Please enter a valid number for Celsius.");
  }
}
