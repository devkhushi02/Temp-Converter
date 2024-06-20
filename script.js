function convertTemperature() {
    const tempInput = document.getElementById('temperatureInput').value;
    const unit = document.getElementById('unitSelect').value;
    const resultDiv = document.getElementById('result');
    
    if (isNaN(tempInput) || tempInput === '') {
        resultDiv.innerHTML = 'Please enter a valid number';
        return;
    }
    
    const temperature = parseFloat(tempInput);
    let convertedTemp;
    let convertedUnit;

    if (unit === 'Celsius') {
        convertedTemp = (temperature * 9/5) + 32;
        convertedUnit = 'Fahrenheit';
        convertedTempK = temperature + 273.15;
        convertedUnitK = 'Kelvin';
    } else if (unit === 'Fahrenheit') {
        convertedTemp = (temperature - 32) * 5/9;
        convertedUnit = 'Celsius';
        convertedTempK = (temperature - 32) * 5/9 + 273.15;
        convertedUnitK = 'Kelvin';
    } else if (unit === 'Kelvin') {
        convertedTemp = temperature - 273.15;
        convertedUnit = 'Celsius';
        convertedTempF = (temperature - 273.15) * 9/5 + 32;
        convertedUnitF = 'Fahrenheit';
    }

    if (unit === 'Celsius' || unit === 'Fahrenheit') {
        resultDiv.innerHTML = `${temperature} ${unit} is ${convertedTemp.toFixed(2)} ${convertedUnit} and ${convertedTempK.toFixed(2)} ${convertedUnitK}`;
    } else {
        resultDiv.innerHTML = `${temperature} ${unit} is ${convertedTemp.toFixed(2)} ${convertedUnit} and ${convertedTempF.toFixed(2)} ${convertedUnitF}`;
    }
}