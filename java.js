function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
  
    if (weight <= 0 || height <= 0) {
      document.getElementById('result').innerHTML = 'Invalid input. Please enter valid values.';
      return;
    }
  
    const bmi = weight / (height * height);
    const bmiCategory = getBMICategory(bmi);
  
    const result = `BMI: ${bmi.toFixed(2)}<br>Category: ${bmiCategory} `;
    document.getElementById('result').innerHTML = result;
  }
  
  function getBMICategory(bmi) {
    if (bmi < 18.5) {
      return 'Underweight';
    } else if (bmi < 25) {
      return 'Normal weight';
    } else if (bmi < 30) {
      return 'Overweight';
    } else {
      return 'Obese';
    }
  }