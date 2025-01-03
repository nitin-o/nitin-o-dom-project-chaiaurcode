const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    if (height <= 0 || isNaN(height)) {
        results.innerHTML = "Height must be a valid positive number.";
    } else if (weight <= 0 || isNaN(weight)) {
        results.innerHTML = "Weight must be a valid positive number.";
    } else {
        // BMI = [weight (kg) / height (cm) / height (cm)] x 10,000
        const BMI = parseFloat((weight / (height * height)) * 10000).toFixed(2);

        results.innerHTML = `Your BMI is: ${BMI}`;
    }
});
