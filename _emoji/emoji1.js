
var tag1 = "<img src='../_emoji/emoji_img/";
var tag2 = ".gif' width='8' height='8' border='0'>";
var countup = (tag1.length + tag2.length + 5);

function emoji(){
	for(var i = 0 ; i < document.body.all.length ; i++){
		var body=document.body.all(i)
		replace(body,"BeforeBegin");
		try{
			if(body.tagName != "TEXTAREA" && body.tagName != "INPUT" && body.tagName != "OPTION" && body.tagName != "SUBMIT"){
				replace(body,"AfterBegin");
			}
		}catch (e){}
	}
}
function replace(body,t){
	var str = body.getAdjacentText(t);
	var i = 0;
	var ch = 0;
	while(isFinite(cc = str.charCodeAt(i++))){
		if(cc >= 57345 && cc <= 59223){
			str = str.slice(0,i-1)+tag1+(cc.toString(16))+tag2+str.slice(i);
			i += countup;
			ch ++;
		}
	}
	if(ch){
		body.replaceAdjacentText(t,"");
		body.insertAdjacentHTML(t,str);
	}
	if(t=="BeforeBegin")replace(body,"AfterEnd");
	else if(t=="AfterBegin")replace(body,"BeforeEnd");
}