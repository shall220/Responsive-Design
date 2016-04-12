//buttons that use only javascript are also made with javascript
//this way people who do not have javascript wont be presented the options to begin with

//Save Draft Button
var saveDraftBtn = document.createElement("input");
saveDraftBtn.type = "button";
saveDraftBtn.id = "saveDraft";
saveDraftBtn.value = "Save Draft";
saveDraftBtn.className = "submit";

document.getElementById("makeButton").appendChild(saveDraftBtn);


//Retrieve Draft button
var getDraftBtn = document.createElement("input");
getDraftBtn.type = "button";
getDraftBtn.id = "getDraft";
getDraftBtn.value = "Retrieve Draft";
getDraftBtn.className = "submit";

document.getElementById("makeButton").appendChild(getDraftBtn);

//clear Draft button
var clearDraftBtn = document.createElement("input");
clearDraftBtn.type = "button";
clearDraftBtn.id = "clearLocalStorage";
clearDraftBtn.value = "Delete Draft";
clearDraftBtn.className = "submit";

document.getElementById("makeButton").appendChild(clearDraftBtn);

//make and insert new li that holds canvas
var liAdd = document.createElement("LI");
var canvasAdd = document.createElement("canvas");
canvasAdd.id = "myCanvas";
canvasAdd.width = "400";
canvasAdd.height = "200";
liAdd.appendChild(canvasAdd);
var list = document.getElementById("makeButton");
list.insertBefore(liAdd, list.childNodes[6]);


//make label for caption input
var capLabelAdd = document.createElement("label");
var node = document.createTextNode("Please Answer Image Here ");
capLabelAdd.appendChild(node);
capLabelAdd.for = "capInput";
capLabelAdd.id = "required2";
liAdd.appendChild(capLabelAdd);

//add span with * to label
var l = document.getElementById("required2");
var text = l.childNodes[0];
var at = 25;
var span = document.createElement("span");
span.appendChild(document.createTextNode('*'));
l.insertBefore(span, text.splitText(at));

//make caption input
var capInput = document.createElement("input");
capInput.type = "text";
capInput.id = "capInput";
capInput.className = "decorateCapInput";
capInput.placeholder = "Type the captcha answer here......";
liAdd.appendChild(capInput);

//make refresh captcha buttom
var capRefresh = document.createElement("input");
capRefresh.type = "button";
capRefresh.id = "capRefresh";
capRefresh.className = "submit";
capRefresh.value = "Refresh Captcha";
liAdd.appendChild(capRefresh);






