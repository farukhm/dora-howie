document.getElementById("mark").addEventListener("click", setMark);


function setMark() {

    let ans1 = document.getElementById("Answer1").value;
    let ans2 = document.getElementById("Answer2").value;
    let ans3 = document.getElementById("Answer3").value;
    let ans4 = document.getElementById("Answer4").value;


    ans1 = ans1.toLowerCase();
    ans2 = ans2.toLowerCase();
    ans3 = ans3.toLowerCase();
    ans4 = ans4.toLowerCase();


    console.log(ans1);
    console.log(ans2);
    console.log(ans3);
    console.log(ans4);





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
    
    // Display Results
    count = (ans1 + ans2 + ans3 + ans4);

    document.getElementById("percentage").innerHTML = count + " / 4";
    document.getElementById("Farukh").innerHTML = count/4 * 100 + "%";
} if (count == 3) {
    
}
