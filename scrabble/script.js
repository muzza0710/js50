const input1 = document.getElementById("player-1-input");
const input2 = document.getElementById("player-2-input");
const form = document.querySelector("form");
const result_p = document.getElementById("result");

form.addEventListener("submit", (form) => {{
    form.preventDefault();
    let score1= get_score(input1.value);
    let score2= get_score(input2.value);
    let winner = compare_scores(score1, score2);
    if (winner == 1)
    {
        result_p.innerText = `Player 1 wins with ${input1.value}! (${score1})`;
    }
    else if (winner == 2)
    {
        result_p.innerText = `Player 2 wins with ${input2.value}! (${score2})`;
    }
    else if (winner == 0)
    {
        result_p.innerText = `${input1.value} and ${input2.value} is a tie with ${score1} points!`;
    }
}});

const POINTS = [1,3,3,2,1,4,2,4,1,8,5,1,3,1,1,3,10,1,1,1,1,4,4,8,4,10];

// compute score of each word.
function get_score(word)
{
    let score = 0;
    for (let i = 0, len = word.length; i < len; i++)
    {
        if (word[i] == word[i].toLowerCase()){
            score += POINTS[word.charCodeAt(i) - 'a'.charCodeAt(0)];
        }
        else if (word[i] == word[i].toUpperCase())
        {
            score += POINTS[word.charCodeAt(i) - 'A'.charCodeAt(0)];
        }
    }
    return score;
}

function compare_scores(score1, score2)
{
    if (score1 < score2){
        return 2;
    }
    else if (score1 > score2)
    {
        return 1;
    }
    else
    {
        return 0;
    }

}
