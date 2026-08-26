const result = document.getElementById("result");

let expression = "";

// Number buttons
document.querySelectorAll(".number").forEach(button => {
    button.onclick = function () {
        expression += button.innerText;
        result.innerText = expression;
    };
});

// Operator buttons
document.getElementById("addition-button").onclick = function () {
    addOperator("+");
};

document.getElementById("substraction-button").onclick = function () {
    addOperator("-");
};

document.getElementById("multiply-button").onclick = function () {
    addOperator("*");
};

document.getElementById("divide-button").onclick = function () {
    addOperator("/");
};

// Add operator function calling
function addOperator(operator) {
    if (expression == "") return;

    let last = expression[expression.length - 1];

    if (last == "+" || last == "-" || last == "*" || last == "/") {
        return;
    }

    expression += operator;
    result.innerText = expression;
}

// Decimal point
document.getElementById("point-button").onclick = function () {

    let i = expression.length - 1;

    while (i >= 0) {

        if (
            expression[i] == "+" ||
            expression[i] == "-" ||
            expression[i] == "*" ||
            expression[i] == "/"
        ) {
            break;
        }

        if (expression[i] == ".") {
            return; // Decimal already exists
        }

        i--;
    }

    if (
        expression == "" ||
        expression.endsWith("+") ||
        expression.endsWith("-") ||
        expression.endsWith("*") ||
        expression.endsWith("/")
    ) {
        expression += "0.";
    } else {
        expression += ".";
    }

    result.innerText = expression;
};

// Clear
document.getElementById("clear-button").onclick = function () {
    expression = "";
    result.innerText = "0";
};

// Delete
document.getElementById("delete-button").onclick = function () {
    expression = expression.slice(0, -1);

    if (expression == "") {
        result.innerText = "0";
    } else {
        result.innerText = expression;
    }
};

// Equal
document.getElementById("equalto-button").onclick = function () {
    try {
        expression = eval(expression).toString();
        result.innerText = expression;
    } catch {
        expression = "";
        result.innerText = "Error";
    }
};