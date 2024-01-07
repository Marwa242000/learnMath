const optionOne = document.getElementById('option1'),
    optionTwo = document.getElementById('option2'),
    optionThree = document.getElementById('option3');
wrongAnswer = document.getElementById('audio');

var answer = 0;

function generateEquation() {
    var num1 = Math.floor(Math.random() * 13);
    var num2 = Math.floor(Math.random() * 13);
    if (num1 < num2) {
        answer = num2 - num1;
        document.getElementById("num2").innerHTML = num1;
        document.getElementById("num1").innerHTML = num2;
    } else {
        answer = num1 - num2;
        document.getElementById("num1").innerHTML = num1;
        document.getElementById("num2").innerHTML = num2;
    }
    
    // Generate two different wrong numbers for options
    var wrongOne;
    do {
        wrongOne = Math.floor(Math.random() * 10);
    } while (wrongOne === answer); // Ensure wrongOne is different from answer

    var wrongTwo;
    do {
        wrongTwo = Math.floor(Math.random() * 12);
    } while (wrongTwo === wrongOne || wrongTwo === answer); 

  
    var allAnswers = [];
    var switchAnswers = [];

    document.getElementById('answer').innerHTML = '?';
    document.querySelector('.good').style.display = 'none';
    document.querySelector('.try').style.display = 'none';

    allAnswers = [answer, wrongOne, wrongTwo];
    for (var i = allAnswers.length; i--;) {
        switchAnswers.push(allAnswers.splice(Math.floor(Math.random() * (i + 1)), 1)[0]);
    }

    optionOne.innerHTML = switchAnswers[0];
    optionTwo.innerHTML = switchAnswers[1];
    optionThree.innerHTML = switchAnswers[2];
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
