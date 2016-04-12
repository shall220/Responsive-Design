//buttons that use only javascript are also made with javascript 
//this way people who do not have javascript wont be presented the options to begin with

//Save Draft Button
var saveDraftBtn = document.createElement("input"); 
saveDraftBtn.type = "button";
saveDraftBtn.id = "saveDraft"; 
saveDraftBtn.value = "Save Draft"
saveDraftBtn.className = "submit"     

document.getElementById("makeButton").appendChild(saveDraftBtn);


//Retrieve Draft button
var getDraftBtn = document.createElement("input"); 
getDraftBtn.type = "button";
getDraftBtn.id = "getDraft"; 
getDraftBtn.value = "Retrieve Draft"
getDraftBtn.className = "submit"       

document.getElementById("makeButton").appendChild(getDraftBtn);

//
var clearDraftBtn = document.createElement("input"); 
clearDraftBtn.type = "button";
clearDraftBtn.id = "clearLocalStorage"; 
clearDraftBtn.value = "Delete Draft"
clearDraftBtn.className = "submit"       

document.getElementById("makeButton").appendChild(clearDraftBtn);