// Mark conspiracy quiz

document.getElementById("mark").addEventListener("click", setMark);


function setMark() {

    let ans1 = document.getElementById("Answer1").value;
    let ans2 = document.getElementById("Answer2").value;
    let ans3 = document.getElementById("Answer3").value;
    let ans4 = document.getElementById("Answer4").value;
    let ans5 = document.getElementById("Answer5").value;
    let ans6 = document.getElementById("Answer6").value;
    let ans7 = document.getElementById("Answer7").value;
    let ans8 = document.getElementById("Answer8").value;
    let ans9 = document.getElementById("Answer9").value;
    let ans10 = document.getElementById("Answer10").value;
    let ans11 = document.getElementById("Answer11").value;
    let ans12 = document.getElementById("Answer12").value;

    ans1 = ans1.toLowerCase();
    ans2 = ans2.toLowerCase();
    ans3 = ans3.toLowerCase();
    ans4 = ans4.toLowerCase();
    ans5 = ans5.toLowerCase();
    ans6 = ans6.toLowerCase();
    ans7 = ans7.toLowerCase();
    ans8 = ans8.toLowerCase();
    ans9 = ans9.toLowerCase();
    ans10 = ans10.toLowerCase();
    ans11 = ans11.toLowerCase();
    ans12 = ans12.toLowerCase();



    console.log(ans1);
    console.log(ans2);
    console.log(ans3);
    console.log(ans4);
    console.log(ans5);
    console.log(ans6);
    console.log(ans7);
    console.log(ans8);
    console.log(ans9);
    console.log(ans10);
    console.log(ans11);
    console.log(ans12);




    //TEST

    if (ans1 == "mh370") {
        document.getElementById("Answer1").style.border = "2px Solid Green";
        document.getElementById("check-span").innerHTML = "Correct";
        document.getElementById("check-span").style.color = "green";
        ans1 = Number(1);
    } else {
        document.getElementById("Answer1").style.border = "2px Solid Red";
        document.getElementById("check-span").innerHTML = "Incorrect";
        document.getElementById("check-span").style.color = "red";
        ans1 = Number(0);
    }
    if (ans2 == "239") {
        document.getElementById("Answer2").style.border = "2px Solid Green";
        document.getElementById("check-span").innerHTML = "Correct";
        document.getElementById("check-span").style.color = "green";
        ans2 = Number(1);
    } else {
        document.getElementById("Answer2").style.border = "2px Solid Red";
        document.getElementById("check-span").innerHTML = "Incorrect";
        document.getElementById("check-span").style.color = "red";
        ans2 = Number(0);
    }
    if (ans3 == "zahaire ahmad shah" || ans3 == "captain zahaire ahmad shah") {
        document.getElementById("Answer3").style.border = "2px Solid Green";
        document.getElementById("check-span").innerHTML = "Correct";
        document.getElementById("check-span").style.color = "green";
        ans3 = Number(1);
    } else {
        document.getElementById("Answer3").style.border = "2px Solid Red";
        document.getElementById("check-span").innerHTML = "Incorrect";
        document.getElementById("check-span").style.color = "red";
        ans3 = Number(0);

    }
    if (ans4 == "false") {
        document.getElementById("Answer4").style.border = "2px Solid Green";
        document.getElementById("check-span").innerHTML = "Correct";
        document.getElementById("check-span").style.color = "green";
        ans4 = Number(1);
    } else {
        document.getElementById("Answer4").style.border = "2px Solid Red";
        document.getElementById("check-span").innerHTML = "Incorrect";
        document.getElementById("check-span").style.color = "red";
        ans4 = Number(0);
    }
    if (ans5 == "denver" || ans5 == "denver international airport") {
        document.getElementById("Answer5").style.border = "2px Solid Green";
        document.getElementById("check-span").innerHTML = "Correct";
        document.getElementById("check-span").style.color = "green";
        ans5 = Number(1);
    } else {
        document.getElementById("Answer5").style.border = "2px Solid Red";
        document.getElementById("check-span").innerHTML = "Incorrect";
        document.getElementById("check-span").style.color = "red";
        ans5 = Number(0);
    }
    if (ans6 == "the blue mustang" || ans6 == "blue mustang") {
        document.getElementById("Answer6").style.border = "2px Solid Green";
        document.getElementById("check-span").innerHTML = "Correct";
        document.getElementById("check-span").style.color = "green";
        ans6 = Number(1);
    } else {
        document.getElementById("Answer6").style.border = "2px Solid Red";
        document.getElementById("check-span").innerHTML = "Incorrect";
        document.getElementById("check-span").style.color = "red";
        ans6 = Number(0);
    }
    if (ans7 == "true") {
        document.getElementById("Answer7").style.border = "2px Solid Green";
        document.getElementById("check-span").innerHTML = "Correct";
        document.getElementById("check-span").style.color = "green";
        ans7 = Number(1);
    } else {
        document.getElementById("Answer7").style.border = "2px Solid Red";
        document.getElementById("check-span").innerHTML = "Incorrect";
        document.getElementById("check-span").style.color = "red";
        ans7 = Number(0);
    }
    if (ans8 == "yes") {
        document.getElementById("Answer8").style.border = "2px Solid Green";
        document.getElementById("check-span").innerHTML = "Correct";
        document.getElementById("check-span").style.color = "green";
        ans8 = Number(1);
    } else {
        document.getElementById("Answer8").style.border = "2px Solid Red";
        document.getElementById("check-span").innerHTML = "Incorrect";
        document.getElementById("check-span").style.color = "red";
        ans8 = Number(0);
    }
    if (ans9 == "c") {
        document.getElementById("Answer9").style.border = "2px Solid Green";
        document.getElementById("check-span").innerHTML = "Correct";
        document.getElementById("check-span").style.color = "green";
        ans9 = Number(1);
    } else {
        document.getElementById("Answer9").style.border = "2px Solid Red";
        document.getElementById("check-span").innerHTML = "Incorrect";
        document.getElementById("check-span").style.color = "red";
        ans9 = Number(0);
    }
    if (ans10 == "stars" || ans10 == "star") {
        document.getElementById("Answer10").style.border = "2px Solid Green";
        document.getElementById("check-span").innerHTML = "Correct";
        document.getElementById("check-span").style.color = "green";
        ans9 = Number(1);
    } else {
        document.getElementById("Answer10").style.border = "2px Solid Red";
        document.getElementById("check-span").innerHTML = "Incorrect";
        document.getElementById("check-span").style.color = "red";
        ans10 = Number(0);
    }

    if (ans10 == "stars" || ans10 == "star") {
        document.getElementById("Answer10").style.border = "2px Solid Green";
        document.getElementById("check-span").innerHTML = "Correct";
        document.getElementById("check-span").style.color = "green";
        ans9 = Number(1);
    } else {
        document.getElementById("Answer10").style.border = "2px Solid Red";
        document.getElementById("check-span").innerHTML = "Incorrect";
        document.getElementById("check-span").style.color = "red";
        ans10 = Number(0);
    }
    if (ans11 == "mercury") {
        document.getElementById("Answer11").style.border = "2px Solid Green";
        document.getElementById("check-span").innerHTML = "Correct";
        document.getElementById("check-span").style.color = "green";
        ans11 = Number(1);
    } else {
        document.getElementById("Answer11").style.border = "2px Solid Red";
        document.getElementById("check-span").innerHTML = "Incorrect";
        document.getElementById("check-span").style.color = "red";
        ans11 = Number(0);
    }
    if (ans12 == "true") {
        document.getElementById("Answer12").style.border = "2px Solid Green";
        document.getElementById("check-span").innerHTML = "Correct";
        document.getElementById("check-span").style.color = "green";
        ans12 = Number(1);
    } else {
        document.getElementById("Answer12").style.border = "2px Solid Red";
        document.getElementById("check-span").innerHTML = "Incorrect";
        document.getElementById("check-span").style.color = "red";
        ans12 = Number(0);
    }
    // Display Results
    count = (ans1 + ans2 + ans3 + ans4 + ans5 + ans6 + ans7 + ans8 + ans9 + ans10 + ans11 + ans12);

    document.getElementById("percentage").innerHTML = count + " / 12";
    document.getElementById("Farukh").innerHTML = count / 12 * 100 + "%";
} 
