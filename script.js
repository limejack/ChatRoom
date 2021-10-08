function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}
function update()
{
	var chatLog = httpGet('greebo:9999/chatlog.json');
	var length = parseInt(chatLog["length"]);
	var out = "";
	var fromMessage = "";
	var textBox = document.getElementById('chatLog');
	for(x = 0; x < length; x++)
	{
		fromMessage = chatLog["messages"][x];
		out += fromMessage["username"]+" : "+fromMessage["message"];
		out += "<br>";
	}
	textBox.innerHTML = out;
}
function sayHi(e)
{
	event.preventDefault();
	if(event.keyCode == 13)
	{
		document.getElementById("hi").innerHTML = "hi";
	}
}
inputBox = document.getElementById('inputThingie');
inputBox.addEventListener('keyup',sayHi);
setInterval(update,1000);
