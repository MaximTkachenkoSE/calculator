const result = document.querySelector('.resultArea');

function input(x) {
  result.value = result.value + x;
};

function calculate() {
    result.value = eval(result.value);    
};

function backspace() {
    result.value = result.value.substring(0, result.value.length - 1);
};

function allClear() {
    result.value = "";
};