const optionOne = document.getElementById('option1'),
    optionTwo = document.getElementById('option2'),
    optionThree = document.getElementById('option3');
wrongAnswer = document.getElementById('audio');
//console.log(optionOne);
var answer = 0;
function generateEquation() {
    var num1 = Math.floor(Math.random() * 20);
    var num2 = Math.floor(Math.random() * 20);

    answer = num1 + num2;
    //generate 2 wrong numbers in options

    var wrongOne;
    do {
        wrongOne = Math.floor(Math.random() * 15);
    } while (wrongOne === answer); // Ensure wrongOne is different from answer

    var wrongTwo;
    do {
        wrongTwo = Math.floor(Math.random() * 16);
    } while (wrongTwo === wrongOne || wrongTwo === answer);

    var allAnsewrs = [];
    var swicthAnswers = [];

    document.getElementById('num1').innerHTML = num1;
    document.getElementById('num2').innerHTML = num2;
    document.getElementById('answer').innerHTML = '?';
    document.querySelector('.good').style.display = 'none';
    document.querySelector('.try').style.display = 'none';

    allAnsewrs = [answer, wrongOne, wrongTwo];
    for (var i = allAnsewrs.length; i--;) {
        //console.log(allAnsewrs.length);
        swicthAnswers.push(allAnsewrs.splice(Math.floor(Math.random() * (i + 1)), 1)[0]);
    }
    optionOne.innerHTML = swicthAnswers[0];
    optionTwo.innerHTML = swicthAnswers[1];
    optionThree.innerHTML = swicthAnswers[2];
}
optionOne.addEventListener('click', function () {
    if (optionOne.innerHTML == answer) {
        document.getElementById('answer').innerHTML = optionOne.innerHTML;
        document.querySelector('.good').style.display = 'block';
    }
    else {
        wrongAnswer.play();
        document.getElementById('answer').innerHTML = answer;
        document.querySelector('.try').style.display = 'block';
    }
    setTimeout(function () {
        generateEquation();
    }, 2000);
})
optionTwo.addEventListener('click', function () {
    if (optionTwo.innerHTML == answer) {
        document.getElementById('answer').innerHTML = optionTwo.innerHTML;
        document.querySelector('.good').style.display = 'block';
    }
    else {
        wrongAnswer.play();
        document.getElementById('answer').innerHTML = answer;
        document.querySelector('.try').style.display = 'block';
    }
    setTimeout(function () {
        generateEquation();
    }, 2000);
})
optionThree.addEventListener('click', function () {
    if (optionThree.innerHTML == answer) {
        document.getElementById('answer').innerHTML = optionThree.innerHTML;
        document.querySelector('.good').style.display = 'block';
    }
    else {
        wrongAnswer.play();
        document.getElementById('answer').innerHTML = answer;
        document.querySelector('.try').style.display = 'block';

    }
    setTimeout(function () {
        generateEquation();
    }, 2000);
})
generateEquation();
