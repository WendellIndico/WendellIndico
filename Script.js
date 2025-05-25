function append(char) {
    document.getElementById("display").value += char;
}

function clearDisplay() {
    document.getElementById("display").value = '';
}

function backspace() {
    let current = document.getElementById("display").value;
    document.getElementById("display").value = current.slice(0, -1);
}

function calculate() {
    try {
        const result = eval(document.getElementById("display").value);
        document.getElementById("display").value = result;
    } catch (e) {
        document.getElementById("display").value = "Error";
    }
}

// Tab switcher
function switchTab(tabName) {
    const calcTab = document.getElementById('calculator-tab');
    const convTab = document.getElementById('converter-tab');
    const calcSec = document.getElementById('calculator-section');
    const convSec = document.getElementById('converter-section');

    if (tabName === 'calculator') {
        calcTab.classList.add('active-tab');
        convTab.classList.remove('active-tab');
        calcSec.style.display = 'block';
        convSec.style.display = 'none';
    } else {
        convTab.classList.add('active-tab');
        calcTab.classList.remove('active-tab');
        convSec.style.display = 'block';
        calcSec.style.display = 'none';
    }
}

// Unit converter logic
function convertUnit() {
    const value = parseFloat(document.getElementById('inputValue').value);
    const unit = document.getElementById('unitType').value;
    let result = '';

    if (isNaN(value)) {
        result = "Please enter a valid number.";
    } else {
        switch (unit) {
            case 'cmToInch':
                result = `${value} cm = ${(value / 2.54).toFixed(2)} inches`;
                break;
            case 'kgToLb':
                result = `${value} kg = ${(value * 2.20462).toFixed(2)} lbs`;
                break;
            case 'cToF':
                result = `${value} °C = ${(value * 9/5 + 32).toFixed(2)} °F`;
                break;
        }
    }

    document.getElementById('conversionResult').innerText = result;
}
