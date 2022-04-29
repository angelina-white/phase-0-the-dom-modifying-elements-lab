// Write your code here!

//remove main
const main1 = document.getElementById("main");
main1.remove();

//add newHeader
const newHeader = document.createElement("h1");
newHeader.id = 'victory';
newHeader.innerHTML = "YOUR-NAME is the champion"
document.body.append(newHeader);
