const input = document.getElementById("card-number");
const form = document.querySelector("form");
const result_p = document.getElementById("result");

form.addEventListener("submit", (e) => {{
    e.preventDefault();
    if (is_valid(input.value))
        {
            console.log(check_card(input.value));
            result_p.innerText = `card: ${check_card(input.value)}`
        }
        else
        {
            result_p.innerText = "Invalid number.;"
            console.log("INVALID");
        }

}})



function is_valid(n){
    // initialise total for sum of numbers
    let total = 0;
    let i = 0;
    while (n > 0)
    {
        if (i % 2 == 0)
        {
            total += n % 10;
        }
        else
        {
            total = sum_double_digits((n % 10) * 2, total);
        }
        n = parseInt(n / 10);
        i++;
    }
    if (total % 10 == 0)
    {
        return true;
    }
    return false;
}

function sum_double_digits(n, total){
    if (n >= 10)
    // if 2 * n is double digits, split it and add each digit to running total
    {
        total += n % 10;
        total += parseInt(n / 10);
    }
    else
    {
        // otherwise just add the digit
        total += n;
    }
    return total;
}

function check_card(n)
{
    if (parseInt(Math.log10(n)) + 1 == 15)
    {
        if (get_first_digits(n) == 34 || get_first_digits(n) == 37)
        {
            return "AMEX";
        }
    }

    if (parseInt(Math.log10(n)) + 1 == 16 && get_first_digit(n) == 5)
    {
        return "MASTERCARD";
    }

    if (parseInt(Math.log10(n)) + 1 == 16 || parseInt(Math.log10(n)) + 1 == 13)
    {
        if (get_first_digit(n) == 4)
        {
            return "VISA";
        }
    }
    return "INVALID";
}

function get_first_digit(n){
    while (n >= 10)
    {
        n = parseInt(n / 10);
    }
    return n;
}

function get_first_digits(n)
{
    while (n >= 100)
    {
        n = parseInt(n / 10);
    }
    return n;
}
