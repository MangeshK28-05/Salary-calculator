const calculate = document.querySelector(`#calculate`);
const Annual_salary = document.querySelector(`#Annual-salary`);
const Working_hours = document.querySelector(`#Working-hours`);
const calculate_goal = document.querySelector(`.calculate-goal`);
const goal = document.querySelector(`#time`);
const goal_amount = document.querySelector(`#goal-amount`);

calculate.addEventListener(`click`, () => {
    const salary = parseFloat(Annual_salary.value);
    const hours = parseFloat(Working_hours.value) || 8;

    if (!salary || salary <= 0) return;

    const monthly = salary / 12;
    const weekly = salary / 52;
    const daily = salary / 260;
    const hourly = daily / hours;

    document.querySelector(`#monthly`).textContent = `₹${monthly.toFixed(2)}`;
    document.querySelector(`#weekly`).textContent = `₹${weekly.toFixed(2)}`;
    document.querySelector(`#daily`).textContent = `₹${daily.toFixed(2)}`;
    document.querySelector(`#hourly`).textContent = `₹${hourly.toFixed(2)}`;
});

const reset = document.querySelector(`#reset`);
reset.addEventListener(`click`, () => {
    Annual_salary.value = ``;
    Working_hours.value = ``;
    document.querySelector(`#monthly`).textContent = `₹0.00`;
    document.querySelector(`#weekly`).textContent = `₹0.00`;
    document.querySelector(`#daily-`).textContent = `₹0.00`;
    document.querySelector(`#hourly`).textContent = `₹0.00`;
});

calculate_goal.addEventListener(`click`, () => {
    const salary = parseFloat(Annual_salary.value);
    const goalAmount = parseFloat(goal_amount.value); 

    if (!salary || salary <= 0 || !goalAmount || goalAmount <= 0) return;

    const years = goalAmount / salary;
    const months = years * 12;
    const days = years * 260;

    document.querySelector(`.years`).textContent = `${years.toFixed(2) } Years`;
    document.querySelector(`.months`).textContent = `${months.toFixed(2)} Months`;
    document.querySelector(`.days`).textContent = `${days.toFixed(2)} Days`;
});

const reset_goal = document.querySelector(`.reset-goal`);
reset_goal.addEventListener(`click`, () => {
    goal_amount.value = ``;
    document.querySelector(`.years`).textContent = `0 Years`;
    document.querySelector(`.months`).textContent = `0 Months`;
    document.querySelector(`.days`).textContent = `0 Days`;
});