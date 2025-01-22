// variables for inputs - Applicant Financial Details & variables for inputs - Vehicle details
let grossIncome;
let grossExtraIncome;
let totalDeductions;
let totalExpenses;
let vehicleName;
let vehiclePrice;
let paymentTerm;
let disposableIncome;
let loanPlusInterestValue;
let totalVehicleAmount;
let affordability;
const interestRate = 9.5;

const resultValElement = document.querySelector('.result-val');
resultValElement.textContent = "Calculation Results Will Be Displayed Here";
const calculateYourAffordabilityBtn = document.querySelector('.calculate-your-affordability-button');

function calculateYourAffordability() {
    vehicleName = document.getElementById('vehicle-name-parameter').value;
    grossIncome = Number(document.getElementById('monthly-income-parameter').value);
    grossExtraIncome = Number(document.getElementById('monthly-extra-income-parameter').value);
    totalDeductions = Number(document.getElementById('monthly-deductions-parameter').value);
    totalExpenses = Number(document.getElementById('monthly-expenses-parameter').value);
    vehiclePrice = Number(document.getElementById('vehicle-price-parameter').value);
    paymentTerm = Number(document.getElementById('loan-term-parameter').value);

    // disposable income
    // calculated from gross income plus extra income minus total value of (totalDeductions plus totalExpenses)
    disposableIncome = grossIncome + grossExtraIncome - (totalDeductions + totalExpenses);

    // loan interest value
    // calculated from the vehicle price * 9.5% interest divide by 100
    loanPlusInterestValue = (vehiclePrice * interestRate) / 100;

    // total vehicle amount - MONTHLY INSTALLMENTS AS PER PAYMENT TERMS
    // calculated from vehicle price plus monetary value of interest rate divided by total value of (payment term plus 12 months (monthly installment))
    totalVehicleAmount = (vehiclePrice + loanPlusInterestValue) / (paymentTerm * 12);
    affordability = disposableIncome - totalVehicleAmount;
    resultValElement.textContent = `After settling vehicle installment you'll have approximately: R${affordability.toFixed(2)}.`;    

    // logic for recommendation
    const affordabilityDescriptionText = document.querySelector('.affordability-description-text');
    let thresholdValue = disposableIncome * 0.7;
    if (totalVehicleAmount > thresholdValue) {
        const resultSection = document.querySelector('.affordability-result-section');
        resultSection.style.color = "red";        
        affordabilityDescriptionText.textContent = "You may want to consider a more affordable vehicle or adjust your budget";
    } 
    if (totalVehicleAmount < thresholdValue) {
        const resultSection = document.querySelector('.affordability-result-section');
        resultSection.style.color = "green";
        affordabilityDescriptionText.textContent = "You may afford this vehicle: " + vehicleName;
    }
}
// implement event listener functionality
calculateYourAffordabilityBtn.addEventListener('click', calculateYourAffordability);

