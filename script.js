function press(val) {
  document.getElementById("display").value += val;
}

function clearDisplay() {
  document.getElementById("display").value = '';
}

function deleteLast() {
  let value = document.getElementById("display").value;
  document.getElementById("display").value = value.slice(0, -1);
}

function calculate() {
  try {
    let result = eval(document.getElementById("display").value);
    document.getElementById("display").value = result;
  } catch (error) {
    alert("Invalid Expression");
  }
}

// Optional: Handle keyboard input
document.addEventListener('keydown', function(event) {
  const key = event.key;
  const display = document.getElementById("display");

  if (!isNaN(key) || ['+', '-', '*', '/', '.', '%'].includes(key)) {
    press(key);
  } else if (key === 'Enter') {
    event.preventDefault();
    calculate();
  } else if (key === 'Backspace') {
    deleteLast();
  } else if (key === 'Escape') {
    clearDisplay();
  }
});
