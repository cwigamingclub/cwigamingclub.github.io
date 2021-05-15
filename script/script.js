/*

Original Author: Jeffrey Kuhn
Date Created: 10-2-20
Version: 1
Date Last Modified: 12-1-20
Modified by: Jeffrey Kuhn
Modification log:
10/2/2020: Created and added JavaScript for mobile view

11/16/2020: Added function to redirect when button is clicked in store page.

12/1/2020: Added functions to redirect when buttons are clicked in the tournament page.


*/


/* JavaScript for mobile nav */
function navClick(){
    document.getElementById("navigation");

    if(document.getElementById("navigation").className == "hide" || document.getElementById("navigation").className == "navhide"){
        document.getElementById("navigation").className = "show";
    }
    else if(document.getElementById("navigation").className == "show"){
        document.getElementById("navigation").className = "hide";
    }
}

function storeClick(){
    window.location="storeForm.html";
}

function singleClick(){
    
    window.location="tournamentForms/singleForm.html";
}

function teamClick(){
    window.location="tournamentForms/teamForm.html";
}

function multiClick(){
    window.location="tournamentForms/multiPlatForm.html";
}