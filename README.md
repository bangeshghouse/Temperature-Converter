# Temperature-Converter
Temperature Converter using HTML, CSS, JAVASCRIPT.
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Temperature Converter</title>
<style>
  body {
    font-family: cursive, sans-serif;
  }
  .container {
    max-width: 400px;
    margin: 0 auto;
    padding: 40px;
    border: 1px solid #ccc;
    border-radius: 45px;
    box-shadow: 0px 0px 10px rgba(122, 26, 26, 0.1);
  }
</style>
</head>
<body>
<div class="container">
  <h2>Temperature Converter</h2>
  <label for="celsius">Celsius:</label>
  <input type="number" id="celsius" placeholder="Enter temperature in Celsius" oninput="convert('celsius')" />
  <br>
  <label for="fahrenheit">Fahrenheit:</label>
  <input type="number" id="fahrenheit" placeholder="Enter temperature in Fahrenheit" oninput="convert('fahrenheit')" />
</div>

<script>
function convert(from) {
  if (from === 'celsius') {
    const celsius = parseFloat(document.getElementById('celsius').value);
    const fahrenheit = (celsius * 9/5) + 32;
    document.getElementById('fahrenheit').value = fahrenheit.toFixed(2);
  } else if (from === 'fahrenheit') {
    const fahrenheit = parseFloat(document.getElementById('fahrenheit').value);
    const celsius = (fahrenheit - 32) * 5/9;
    document.getElementById('celsius').value = celsius.toFixed(2);
  }
}
</script>
</body>
</html>

