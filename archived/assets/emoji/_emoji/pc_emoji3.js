var tag1 = "<font color=#ff00ff>";
var tag2 = "</font>";
var countup = (tag1.length + tag2.length);

function emoji(bgcolor){
// 	n = document.body.all.length;
	var bgcol = bgcolor;
	for(var i = 0 ; i < document.body.all.length ; i++){
	 		var body=document.body.all(i)
			var col=body.getAttribute("color");
// 			alert(body.tagName);
		if (col || bgcol)
		{	
			replace(body,"BeforeBegin",col,bgcol);
			replace(body,"AfterEnd",col,bgcol);
		}
		else
		{
// 			replace(body,"BeforeBegin");
// 			replace(body,"AfterEnd");
			if (replace(body,"BeforeBegin")) i++;
			if (replace(body,"AfterEnd")) i++;
		}
// 		alert(i);
 		try{
 			if(body.tagName != "TEXTAREA" && body.tagName != "INPUT" && body.tagName != "OPTION" && body.tagName != "SUBMIT"){
// 			var col=body.getAttribute("color");
// 			alert(body.tagName);
				if (col || bgcol)
				{
// 					alert("aaa");
					replace(body,"AfterBegin",col,bgcol);
					replace(body,"BeforeEnd",col,bgcol);
				}
				else
				{
// 					replace(body,"AfterBegin");
// 					replace(body,"BeforeEnd");
					if (replace(body,"AfterBegin")) i++;
					if (replace(body,"BeforeEnd")) i++;
				}
			}
		}catch (e){}
	}
// 	alert(i);
}
function replace(body,t,col,bgcolor){
	var str = body.getAdjacentText(t);
	var str1;
	var bgcol = bgcolor;
// 	alert(str+"1");
	var i = 0;
	var ch = 0;
	var cha;
	if (str)
	{
		while(isFinite(cc = str.charCodeAt(i++))){
		
			if((cc >= 57345 && cc <= 59223) || (cc >= 63647 && cc <= 63996)){
				var sj = cc.toString(16);
				var hhh = change_sjis(sj,col,bgcol);
				if (hhh) {
					str = str.slice(0,i-1)+(hhh)+str.slice(i);
					ch ++;
					if (hhh.search(/<font color/) != -1) i += countup;
				}
			}
			
		}
// 		alert(str);
		if(ch){
			body.replaceAdjacentText(t,"");
			body.insertAdjacentHTML(t,str);
// 			body.replaceAdjacentText("BeforeEnd","");
// 			body.insertAdjacentHTML("BeforeEnd",str);
		}
	}
// 	if(t=="BeforeBegin")replace(body,"AfterEnd");
// 	else if(t=="AfterBegin")replace(body,"BeforeEnd");
	if (ch) return(1);
}

function change_sjis(c,col,bgcolor){
	var code  = c;
	var bgcol = bgcolor;

	emoji['e63e'] = "<font color=#ff0000></font>";
	emoji['e63f'] = "<font color=#0000ff></font>";
	emoji['e640'] = "<font color=#0000ff></font>";
	emoji['e641'] = "<font color=#0000ff></font>";
	emoji['e642'] = "<font color=#ffa500></font>";
	emoji['e643'] = "<font color=#ff0000></font>";
	emoji['e644'] = "<font color=#0000ff></font>";
	emoji['e645'] = "<font color=#0000ff></font>";
	emoji['e646'] = "<font color=#ff0000></font>";
	emoji['e647'] = "<font color=#ffa500></font>";
	emoji['e648'] = "<font color=#00ff00></font>";
	emoji['e649'] = "<font color=#0000ff></font>";
	emoji['e64a'] = "<font color=#ff0000></font>";
	emoji['e64b'] = "<font color=#ffa500></font>";
	emoji['e64c'] = "<font color=#00ff00></font>";
	emoji['e64d'] = "<font color=#0000ff></font>";
	emoji['e64e'] = "<font color=#ff0000></font>";
	emoji['e64f'] = "<font color=#ffa500></font>";
	emoji['e650'] = "<font color=#00ff00></font>";
	emoji['e651'] = "<font color=#0000ff></font>";
	emoji['e652'] = "<font color=#ff00ff></font>";
	emoji['e653'] = "<font color=#000000></font>";
	emoji['e654'] = "<font color=#0000ff></font>";
	emoji['e655'] = "<font color=#00ff00></font>";
	emoji['e656'] = "<font color=#000000></font>";
	emoji['e657'] = "<font color=#0000ff></font>";
	emoji['e658'] = "<font color=#ffa500></font>";
	emoji['e659'] = "<font color=#000000></font>";
	emoji['e65a'] = "<font color=#ff00ff></font>";
	emoji['e65b'] = "<font color=#00ff00></font>";
	emoji['e65c'] = "<font color=#ffa500></font>";
	emoji['e65d'] = "<font color=#0000ff></font>";
	emoji['e65e'] = "<font color=#000000></font>";
	emoji['e65f'] = "<font color=#00ff00></font>";
	emoji['e660'] = "<font color=#ff0000></font>";
	emoji['e661'] = "<font color=#0000ff></font>";
	emoji['e662'] = "<font color=#0000ff></font>";
	emoji['e663'] = "<font color=#ff0000></font>";
	emoji['e664'] = "<font color=#0000ff></font>";
	emoji['e665'] = "<font color=#ff0000></font>";
	emoji['e666'] = "<font color=#000000></font>";
	emoji['e667'] = "<font color=#ff00ff></font>";
	emoji['e668'] = "<font color=#ff0000></font>";
	emoji['e669'] = "<font color=#00ff00></font>";
	emoji['e66a'] = "<font color=#0000ff></font>";
	emoji['e66b'] = "<font color=#ff00ff></font>";
	emoji['e66c'] = "<font color=#0000ff></font>";
	emoji['e66d'] = "<font color=#000000></font>";
	emoji['e66e'] = "<font color=#000000></font>";
	emoji['e66f'] = "<font color=#000000></font>";
	emoji['e670'] = "<font color=#00ff00></font>";
	emoji['e671'] = "<font color=#ff00ff></font>";
	emoji['e672'] = "<font color=#ffa500></font>";
	emoji['e673'] = "<font color=#ffa500></font>";
	emoji['e674'] = "<font color=#ff0000></font>";
	emoji['e675'] = "<font color=#0000ff></font>";
	emoji['e676'] = "<font color=#000000></font>";
	emoji['e677'] = "<font color=#000000></font>";
	emoji['e678'] = "<font color=#000000></font>";
	emoji['e679'] = "<font color=#ffa500></font>";
	emoji['e67a'] = "<font color=#0000ff></font>";
	emoji['e67b'] = "<font color=#ff00ff></font>";
	emoji['e67c'] = "<font color=#000000></font>";
	emoji['e67d'] = "<font color=#ff0000></font>";
	emoji['e67e'] = "<font color=#000000></font>";
	emoji['e67f'] = "<font color=#ffa500></font>";
	emoji['e680'] = "<font color=#ff0000></font>";
	emoji['e681'] = "<font color=#000000></font>";
	emoji['e682'] = "<font color=#ff0000></font>";
	emoji['e683'] = "<font color=#ffa500></font>";
	emoji['e684'] = "<font color=#ff0000></font>";
	emoji['e685'] = "<font color=#ff0000></font>";
	emoji['e686'] = "<font color=#ff0000></font>";
	emoji['e687'] = "<font color=#000000></font>";
	emoji['e688'] = "<font color=#000000></font>";
	emoji['e689'] = "<font color=#ffa500></font>";
	emoji['e68a'] = "<font color=#0000ff></font>";
	emoji['e68b'] = "<font color=#000000></font>";
	emoji['e68c'] = "<font color=#0000ff></font>";
	emoji['e68d'] = "<font color=#ff0000></font>";
	emoji['e68e'] = "<font color=#000000></font>";
	emoji['e68f'] = "<font color=#ff0000></font>";
	emoji['e690'] = "<font color=#000000></font>";
	emoji['e691'] = "<font color=#000000></font>";
	emoji['e692'] = "<font color=#ffa500></font>";
	emoji['e693'] = "<font color=#ffa500></font>";
	emoji['e694'] = "<font color=#ffa500></font>";
	emoji['e695'] = "<font color=#ffa500></font>";
	emoji['e696'] = "<font color=#000000></font>";
	emoji['e697'] = "<font color=#000000></font>";
	emoji['e698'] = "<font color=#ffa500></font>";
	emoji['e699'] = "<font color=#000000></font>";
	emoji['e69a'] = "<font color=#000000></font>";
	emoji['e69b'] = "<font color=#0000ff></font>";
	emoji['e69c'] = "<font color=#000000></font>";
	emoji['e69d'] = "<font color=#000000></font>";
	emoji['e69e'] = "<font color=#000000></font>";
	emoji['e69f'] = "<font color=#000000></font>";
	emoji['e6a0'] = "<font color=#000000></font>";
	emoji['e6a1'] = "<font color=#ffa500></font>";
	emoji['e6a2'] = "<font color=#ffa500></font>";
	emoji['e6a3'] = "<font color=#0000ff></font>";
	emoji['e6a4'] = "<font color=#00ff00></font>";
	emoji['e6a5'] = "<font color=#000000></font>";
	emoji['e6ce'] = "<font color=#000000></font>";
	emoji['e6cf'] = "<font color=#000000></font>";
	emoji['e6d0'] = "<font color=#000000></font>";
	emoji['e6d1'] = "<font color=#ffa500></font>";
	emoji['e6d2'] = "<font color=#ffa500></font>";
	emoji['e6d3'] = "<font color=#000000></font>";
	emoji['e6d4'] = "<font color=#000000></font>";
	emoji['e6d5'] = "<font color=#000000></font>";
	emoji['e6d6'] = "<font color=#ff0000></font>";
	emoji['e6d7'] = "<font color=#ff0000></font>";
	emoji['e6d8'] = "<font color=#ff0000></font>";
	emoji['e6d9'] = "<font color=#ff0000></font>";
	emoji['e6da'] = "<font color=#ff0000></font>";
	emoji['e6db'] = "<font color=#ff0000></font>";
	emoji['e6dc'] = "<font color=#0000ff></font>";
	emoji['e6dd'] = "<font color=#ff0000></font>";
	emoji['e6de'] = "<font color=#ff0000></font>";
	emoji['e6df'] = "<font color=#000000></font>";
	emoji['e6e0'] = "<font color=#000000></font>";
	emoji['e6e1'] = "<font color=#000000></font>";
	emoji['e6e2'] = "<font color=#000000></font>";
	emoji['e6e3'] = "<font color=#000000></font>";
	emoji['e6e4'] = "<font color=#000000></font>";
	emoji['e6e5'] = "<font color=#000000></font>";
	emoji['e6e6'] = "<font color=#000000></font>";
	emoji['e6e7'] = "<font color=#000000></font>";
	emoji['e6e8'] = "<font color=#000000></font>";
	emoji['e6e9'] = "<font color=#000000></font>";
	emoji['e6ea'] = "<font color=#000000></font>";
	emoji['e6eb'] = "<font color=#000000></font>";
	emoji['e70b'] = "<font color=#ff0000></font>";
	emoji['e6ec'] = "<font color=#ff0000></font>";
	emoji['e6ed'] = "<font color=#ff0000></font>";
	emoji['e6ee'] = "<font color=#ff0000></font>";
	emoji['e6ef'] = "<font color=#ff0000></font>";
	emoji['e6f0'] = "<font color=#ff00ff></font>";
	emoji['e6f1'] = "<font color=#ff0000></font>";
	emoji['e6f2'] = "<font color=#0000ff></font>";
	emoji['e6f3'] = "<font color=#00ff00></font>";
	emoji['e6f4'] = "<font color=#0000ff></font>";
	emoji['e6f5'] = "<font color=#ff0000></font>";
	emoji['e6f6'] = "<font color=#ff0000></font>";
	emoji['e6f7'] = "<font color=#ff0000></font>";
	emoji['e6f8'] = "<font color=#ff00ff></font>";
	emoji['e6f9'] = "<font color=#ff0000></font>";
	emoji['e6fa'] = "<font color=#ffa500></font>";
	emoji['e6fb'] = "<font color=#ffa500></font>";
	emoji['e6fc'] = "<font color=#000000></font>";
	emoji['e6fd'] = "<font color=#ff0000></font>";
	emoji['e6fe'] = "<font color=#000000></font>";
	emoji['e6ff'] = "<font color=#ff0000></font>";
	emoji['e700'] = "<font color=#0000ff></font>";
	emoji['e701'] = "<font color=#0000ff></font>";
	emoji['e702'] = "<font color=#ff0000></font>";
	emoji['e703'] = "<font color=#ff00ff></font>";
	emoji['e704'] = "<font color=#ff0000></font>";
	emoji['e705'] = "<font color=#ff0000></font>";
	emoji['e706'] = "<font color=#000000></font>";
	emoji['e707'] = "<font color=#000000></font>";
	emoji['e708'] = "<font color=#000000></font>";
	emoji['e709'] = "<font color=#000000></font>";
	emoji['e70a'] = "<font color=#000000></font>";
	emoji['e6ac'] = "<font color=#000000></font>";
	emoji['e6ad'] = "<font color=#000000></font>";
	emoji['e6ae'] = "<font color=#000000></font>";
	emoji['e6b1'] = "<font color=#000000></font>";
	emoji['e6b2'] = "<font color=#000000></font>";
	emoji['e6b3'] = "<font color=#000000></font>";
	emoji['e6b7'] = "<font color=#000000></font>";
	emoji['e6b8'] = "<font color=#000000></font>";
	emoji['e6b9'] = "<font color=#000000></font>";
	emoji['e6ba'] = "<font color=#000000></font>";
	emoji['e70c'] = "<font color=#ffa500></font>";
	emoji['e70d'] = "<font color=#ffa500></font>";
	emoji['e70e'] = "<font color=#0000ff></font>";
	emoji['e70f'] = "<font color=#000000></font>";
	emoji['e710'] = "<font color=#ff0000></font>";
	emoji['e711'] = "<font color=#000080></font>";
	emoji['e712'] = "<font color=#0000ff></font>";
	emoji['e713'] = "<font color=#ffa500></font>";
	emoji['e714'] = "<font color=#a52a2a></font>";
	emoji['e715'] = "<font color=#a52a2a></font>";
	emoji['e716'] = "<font color=#000000></font>";
	emoji['e717'] = "<font color=#ff0000></font>";
	emoji['e718'] = "<font color=#000000></font>";
	emoji['e719'] = "<font color=#00ff00></font>";
	emoji['e71a'] = "<font color=#ffa500></font>";
	emoji['e71b'] = "<font color=#ff00ff></font>";
	emoji['e71c'] = "<font color=#000000></font>";
	emoji['e71d'] = "<font color=#000000></font>";
	emoji['e71e'] = "<font color=#00ff00></font>";
	emoji['e71f'] = "<font color=#000000></font>";
	emoji['e720'] = "<font color=#00ff00></font>";
	emoji['e721'] = "<font color=#ff00ff></font>";
	emoji['e722'] = "<font color=#0000ff></font>";
	emoji['e723'] = "<font color=#0000ff></font>";
	emoji['e724'] = "<font color=#ff0000></font>";
	emoji['e725'] = "<font color=#a52a2a></font>";
	emoji['e726'] = "<font color=#ff00ff></font>";
	emoji['e727'] = "<font color=#ffa500></font>";
	emoji['e728'] = "<font color=#ff0000></font>";
	emoji['e729'] = "<font color=#ff00ff></font>";
	emoji['e72a'] = "<font color=#ff00ff></font>";
	emoji['e72b'] = "<font color=#000000></font>";
	emoji['e72c'] = "<font color=#ffa500></font>";
	emoji['e72d'] = "<font color=#0000ff></font>";
	emoji['e72e'] = "<font color=#0000ff></font>";
	emoji['e72f'] = "<font color=#ff0000></font>";
	emoji['e730'] = "<font color=#0000ff></font>";
	emoji['e731'] = "<font color=#000000></font>";
	emoji['e732'] = "<font color=#000000></font>";
	emoji['e733'] = "<font color=#000000></font>";
	emoji['e734'] = "<font color=#ff0000></font>";
	emoji['e735'] = "<font color=#00ff00></font>";
	emoji['e736'] = "<font color=#000000></font>";
	emoji['e737'] = "<font color=#ffa500></font>";
	emoji['e738'] = "<font color=#ff0000></font>";
	emoji['e739'] = "<font color=#0000ff></font>";
	emoji['e73a'] = "<font color=#ff0000></font>";
	emoji['e73b'] = "<font color=#ff0000></font>";
	emoji['e73c'] = "<font color=#000000></font>";
	emoji['e73d'] = "<font color=#000000></font>";
	emoji['e73e'] = "<font color=#00ff00></font>";
	emoji['e73f'] = "<font color=#0000ff></font>";
	emoji['e740'] = "<font color=#0000ff></font>";
	emoji['e741'] = "<font color=#00ff00></font>";
	emoji['e742'] = "<font color=#ff0000></font>";
	emoji['e743'] = "<font color=#ff0000></font>";
	emoji['e744'] = "<font color=#ffa500></font>";
	emoji['e745'] = "<font color=#ff0000></font>";
	emoji['e746'] = "<font color=#00ff00></font>";
	emoji['e747'] = "<font color=#ff0000></font>";
	emoji['e748'] = "<font color=#ff00ff></font>";
	emoji['e749'] = "<font color=#000000></font>";
	emoji['e74a'] = "<font color=#ff0000></font>";
	emoji['e74b'] = "<font color=#a52a2a></font>";
	emoji['e74c'] = "<font color=#ffa500></font>";
	emoji['e74d'] = "<font color=#a52a2a></font>";
	emoji['e74e'] = "<font color=#a52a2a></font>";
	emoji['e74f'] = "<font color=#ffa500></font>";
	emoji['e750'] = "<font color=#000080></font>";
	emoji['e751'] = "<font color=#0000ff></font>";
	emoji['e752'] = "<font color=#ffa500></font>";
	emoji['e753'] = "<font color=#ffa500></font>";
	emoji['e754'] = "<font color=#a52a2a></font>";
	emoji['e755'] = "<font color=#ffa500></font>";
	emoji['e756'] = "<font color=#800080></font>";
	emoji['e757'] = "<font color=#800080></font>";

	
	emoji['e481'] ='<font color=#ffa500></font>';//！                             D
	emoji['e482'] ='<font color=#ff0000></font>';//！                             D
	emoji['e483'] ='<font color=#ff00ff></font>';//？
	emoji['e52c'] ='<font color=#000000></font>';//？
	emoji['e52d'] ='<font color=#000000>＜</font>';//左向き三角１
	emoji['e52e'] ='<font color=#000000>＞</font>';//右向き三角１
	emoji['e52f'] ='<font color=#000000>＜</font>';//左向き三角２
	emoji['e530'] ='<font color=#000000>＞</font>';//右向き三角２
	emoji['e531'] ='<font color=#ffa500>■</font>';//小四角１
	emoji['e532'] ='<font color=#00cc00>■</font>';//小四角２
	emoji['e533'] ='<font color=#000000>i</font>';//インフォメーションシンボル
	emoji['e4c1'] ='<font color=#800080></font>';//ワイングラス                   D
	emoji['e511'] ='<font color=#000000>＿</font>';//スピーカ
	emoji['e579'] ='<font color=#a52a2a></font>';//ドル                           D
	emoji['e486'] ='<font color=#000000></font>';//月１                           D
	emoji['e487'] ='<font color=#ffa500></font>';//いなずま                       D
	emoji['e534'] ='<font color=#ffa500>■</font>';//中四角１
	emoji['e535'] ='<font color=#00cc00>■</font>';//中四角２
	emoji['e536'] ='<font color=#ffa500>◆</font>';//小菱形１
	emoji['e537'] ='<font color=#0033ff>◆</font>';//小菱形２
	emoji['e538'] ='<font color=#ffa500>■</font>';//大四角１
	emoji['e539'] ='<font color=#00cc00>■</font>';//大四角１
	emoji['e53a'] ='<font color=#ff0000>●</font>';//小丸１
	emoji['e53b'] ='<font color=#0000ff>●</font>';//小丸2
	emoji['e57a'] ='<font color=#000000></font>';//腕時計                         D
	emoji['e53c'] ='<font color=#000000>＋</font>';//プラス
	emoji['e53d'] ='<font color=#000000>－</font>';//マイナス
	emoji['e53e'] ='<font color=#000000>＊</font>';//星１
	emoji['e53f'] ='<font color=#000000>↑</font>';//上矢印１
	emoji['e540'] ='<font color=#000000>↓</font>';//下矢印１
	emoji['e541'] ='<font color=#ff0000></font>';//丸に斜め線
	emoji['e542'] ='<font color=#ff00ff>▼</font>';//下三角１
	emoji['e543'] ='<font color=#ff00ff>▲</font>';//上三角１
	emoji['e544'] ='<font color=#ff00ff>▼</font>';//下三角２
	emoji['e545'] ='<font color=#ff00ff>▲</font>';//上三角２
	emoji['e546'] ='<font color=#ffa500>◆</font>';//大菱形１
	emoji['e547'] ='<font color=#0033ff>◆</font>';//大菱形２
	emoji['e548'] ='<font color=#ffa500>■</font>';//特大四角１
	emoji['e549'] ='<font color=#00cc00>■</font>';//特大四角２
	emoji['e54a'] ='<font color=#ff0000>●</font>';//大丸１
	emoji['e54b'] ='<font color=#0000ff>●</font>';//大丸２
	emoji['e54c'] ='<font color=#000000></font>';//上矢印２
	emoji['e54d'] ='<font color=#000000></font>';//下矢印２
	emoji['e488'] ='<font color=#ff0000></font>';//太陽                           D
	emoji['e4ba'] ='<font color=#000000></font>';//野球ボール                     D
	emoji['e594'] ='<font color=#000000></font>';//時計                           D
	emoji['e489'] ='<font color=#000000></font>';//月２（顔つき）
	emoji['e512'] ='<font color=#ffa500></font>';//ベル                           D
	emoji['e560'] ='<font color=#000000>φ</font>';//プッシュピン（画鋲）
	emoji['e4fa'] ='<font color=#ff00ff></font>';//小顔
	emoji['e595'] ='<font color=#ff0000></font>';//ハート                         D
	emoji['e4c2'] ='<font color=#ff00ff></font>';//マティーニ（カクテルグラス）   D
	emoji['e513'] ='<font color=#00ff00></font>';//四つ葉                         D
	emoji['e54e'] ='<font color=#000000></font>';//トレードマーク（TM）           D
	emoji['e54f'] ='<font color=#000000>×</font>';//かける
	emoji['e561'] ='<font color=#ffa500></font>';//文書１                         D
	emoji['e57b'] ='<font color=#000000></font>';//砂時計１
	emoji['e47c'] ='<font color=#000000></font>';//砂時計２                       D
	emoji['e562'] ='<font color=#0000ff></font>';//フロッピーディスク１
	emoji['e48a'] ='<font color=#ff00ff></font>';//雪の結晶
	emoji['e550'] ='<font color=#000000>×</font>';//バツ１
	emoji['e551'] ='<font color=#000000>×</font>';//バツ２
	emoji['e552'] ='<font color=#000000>→</font>';//右矢印１
	emoji['e553'] ='<font color=#000000>←</font>';//左矢印１ 
	emoji['e4c3'] ='<font color=#ffa500></font>';//マグカップ                     D
	emoji['e554'] ='<font color=#000000>÷</font>';//割る
	emoji['e563'] ='<font color=#ffa500></font>';//カレンダー
	emoji['e4fb'] ='<font color=#ff00ff></font>';//スマイルフェイス
	emoji['e48b'] ='<font color=#ffff00>★</font>';//星２
	emoji['e555'] ='<font color=#000000></font>';//右矢印２                       D
	emoji['e556'] ='<font color=#000000></font>';//左矢印２                       D
	emoji['e514'] ='<font color=#ff00ff></font>';//ジュエリー                     D
	emoji['e557'] ='<font color=#000000></font>';//チェックマーク１
	emoji['e4df'] ='<font color=#ffa500></font>';//犬（プードル）
	emoji['e468'] ='<font color=#ffcc00>☆</font>';//星３
	emoji['e46c'] ='<font color=#ffa500></font>';//スパーク
	emoji['e476'] ='<font color=#ffa500></font>';//電球                           D
	emoji['e4e0'] ='<font color=#ffa500></font>';//鳥                             D
	emoji['e58f'] ='<font color=#ffa500></font>';//フォルダ１（閉）
	emoji['e4fc'] ='<font color=#ff00ff></font>';//顔１
	emoji['e558'] ='<font color=#000000></font>';//コピーライトマーク             D
	emoji['e559'] ='<font color=#000000></font>';//レジスタードマーク             D
	emoji['e49c'] ='<font color=#ff0000></font>';//ブリーフケース(ハンドバック）
	emoji['e590'] ='<font color=#ffa500></font>';//フォルダ２（開）
	emoji['e596'] ='<font color=#000000></font>';//電話１（プッシュホン）         D
	emoji['e4fd'] ='<font color=#000000>＿</font>';//吹き出しコメント
	emoji['e57c'] ='<font color=#ffa500></font>';//クレジットカード
	emoji['e55a'] ='<font color=#ff0000>▲</font>';//上三角３
	emoji['e55b'] ='<font color=#ff0000>▼</font>';//下三角３
	emoji['e573'] ='<font color=#ff0000></font>';//ＵＳＡ
	emoji['e49d'] ='<font color=#ffa500></font>';//ノート３
	emoji['e564'] ='<font color=#ffa500></font>';//クリップボード
	emoji['e597'] ='<font color=#00ff00></font>';//カップ                         D
	emoji['e515'] ='<font color=#000000></font>';//カメラ                         D
	emoji['e48c'] ='<font color=#0000ff></font>';//雨                             D
	emoji['e4bb'] ='<font color=#000000>＿</font>';//フットボール
	emoji['e565'] ='<font color=#ffa500></font>';//本１
	emoji['e484'] ='<font color=#ff0000></font>';//立ち入り禁止
	emoji['e46a'] ='<font color=#000000></font>';//信号                           D
	emoji['e566'] ='<font color=#ffa500></font>';//本２
	emoji['e567'] ='<font color=#ffa500></font>';//本３
	emoji['e568'] ='<font color=#ffa500></font>';//本４
	emoji['e569'] ='<font color=#ffa500></font>';//文書２
	emoji['e516'] ='<font color=#0000ff></font>';//はさみ                         D
	emoji['e56a'] ='<font color=#ffa500></font>';//ひめくりカレンダー
	emoji['e49e'] ='<font color=#ffa500></font>';//チケット・キップ               D
	emoji['e48d'] ='<font color=#0000ff></font>';//くもり                         D
	emoji['e521'] ='<font color=#000000></font>';//封筒
	emoji['e57d'] ='<font color=#ff0000></font>';//小切手（CHECK）                D
	emoji['e517'] ='<font color=#000000></font>';//ビデオカメラ                   D
	emoji['e57e'] ='<font color=#000000></font>';//ハンディカム
	emoji['e4ab'] ='<font color=#ff0000></font>';//家                             D
	emoji['e4e4'] ='<font color=#ff0000></font>';//花                             D
	emoji['e57f'] ='<font color=#0000ff></font>';//ナイフ
	emoji['e580'] ='<font color=#000000></font>';//ビデオテープ
	emoji['e4fe'] ='<font color=#000000></font>';//めがね                         D
	emoji['e55c'] ='<font color=#000000>→</font>';//回り矢印１
	emoji['e55d'] ='<font color=#ff0000></font>';//回り矢印２                     D
	emoji['e518'] ='<font color=#0000ff></font>';//むしめがね                     D
	emoji['e519'] ='<font color=#ff0000></font>';//鍵                             D
	emoji['e56b'] ='<font color=#ffa500></font>';//ノート１
	emoji['e49f'] ='<font color=#ffa500></font>';//ノート２（開）                 D
	emoji['e581'] ='<font color=#000000>＿</font>';//ボルト＆ナット
	emoji['e51a'] ='<font color=#ff0000></font>';//くつ                           D
	emoji['e4b1'] ='<font color=#000000></font>';//車                             D
	emoji['e582'] ='<font color=#0000ff></font>';//フロッピー２
	emoji['e574'] ='<font color=#ff0000></font>';//チャート（棒グラフ）
	emoji['e575'] ='<font color=#ff0000></font>';//グラフ１（折れ線グラフ）
	emoji['e51b'] ='<font color=#ff0000></font>';//メールボックス
	emoji['e583'] ='<font color=#ffa500></font>';//懐中電灯
	emoji['e56c'] ='<font color=#ffa500></font>';//Roldex
	emoji['e55e'] ='<font color=#000000>＿</font>';//チェックマーク２
	emoji['e4ce'] ='<font color=#ff0000></font>';//はっぱ                         D
	emoji['e4e1'] ='<font color=#ffa500></font>';//猟犬                           D
	emoji['e584'] ='<font color=#000000>＿</font>';//電池
	emoji['e55f'] ='<font color=#000000></font>';//スクロール
	emoji['e56d'] ='<font color=#000000>φ</font>';//がびょう
	emoji['e51c'] ='<font color=#ff0000></font>';//錠前
	emoji['e585'] ='<font color=#a52a2a></font>';//ドル札
	emoji['e4ff'] ='<font color=#000000>←</font>';//指差し確認左
	emoji['e500'] ='<font color=#000000>→</font>';//指差し確認右
	emoji['e56e'] ='<font color=#ffa500></font>';//台帳
	emoji['e4a0'] ='<font color=#0000ff></font>';//クリップ                       D
	emoji['e4cf'] ='<font color=#ff0000></font>';//プレゼント                     D
	emoji['e51d'] ='<font color=#ffa500></font>';//名札
	emoji['e4ac'] ='<font color=#000000></font>';//ゴハン１                       D
	emoji['e56f'] ='<font color=#ffa500></font>';//複数本
	emoji['e4b2'] ='<font color=#00ff00></font>';//トラック
	emoji['e4a1'] ='<font color=#00ff00></font>';//エンピツ                       D
	emoji['e586'] ='<font color=#000000>＿</font>';//ロゴ（ＰＤＣ社）
	emoji['e591'] ='<font color=#000000></font>';//封筒２
	emoji['e587'] ='<font color=#000000></font>';//レンチ                         D
	emoji['e592'] ='<font color=#000000></font>';//送信ＢＯＸ
	emoji['e593'] ='<font color=#000000></font>';//受信ＢＯＸ
	emoji['e51e'] ='<font color=#000000></font>';//電話２
	emoji['e4ad'] ='<font color=#0000ff></font>';//工場・建物                     D
	emoji['e570'] ='<font color=#000000>＿</font>';//定規１
	emoji['e4a2'] ='<font color=#000000>＿</font>';//定規２
	emoji['e576'] ='<font color=#ff0000></font>';//グラフ２
	emoji['e4c4'] ='<font color=#000000></font>';//食事２
	emoji['e588'] ='<font color=#000000></font>';//電話３                         D
	emoji['e589'] ='<font color=#000000>＿</font>';//コンセント
	emoji['e501'] ='<font color=#000000></font>';//家族
	emoji['e58a'] ='<font color=#000000></font>';//リンク
	emoji['e51f'] ='<font color=#ff0000></font>';//パッケージ
	emoji['e520'] ='<font color=#000000></font>';//ＦＡＸ
	emoji['e48e'] ='<font color=#ff0000></font>';//ときどき曇り
	emoji['e4b3'] ='<font color=#0000ff></font>';//飛行機                         D
	emoji['e4b4'] ='<font color=#0000ff></font>';//ボート(船）                    D
	emoji['e4c8'] ='<font color=#000000>■</font>';//サイコロ
	emoji['e58b'] ='<font color=#ffa500></font>';//新聞
	emoji['e4b5'] ='<font color=#00ff00></font>';//電車                           D
	emoji['e58c'] ='<font color=#000000>＿</font>';//全部ブランク
	emoji['e58d'] ='<font color=#000000>_</font>';//半分ブランク
	emoji['e58e'] ='<font color=#000000>_</font>';//4分の１ブランク
	emoji['e47d'] ='<font color=#000000></font>';//喫煙                           D
	emoji['e47e'] ='<font color=#ff0000></font>';//禁煙                           D
	emoji['e47f'] ='<font color=#0000ff></font>';//車椅子                         D
	emoji['e480'] ='<font color=#ffa500></font>';//若葉マーク
	emoji['e522'] ='<font color=#000000></font>';//四角数字１                     D
	emoji['e523'] ='<font color=#000000></font>';//四角数字2                      D
	emoji['e524'] ='<font color=#000000></font>';//四角数字3                      D
	emoji['e525'] ='<font color=#000000></font>';//四角数字4                      D
	emoji['e526'] ='<font color=#000000></font>';//四角数字5                      D
	emoji['e527'] ='<font color=#000000></font>';//四角数字6                      D
	emoji['e528'] ='<font color=#000000></font>';//四角数字7                      D
	emoji['e529'] ='<font color=#000000></font>';//四角数字8                      D
	emoji['e52a'] ='<font color=#000000></font>';//四角数字9                      D
	emoji['e52b'] ='<font color=#000000></font>';//四角数字10
	emoji['e469'] ='<font color=#ff0000></font>';//台風                           D
	emoji['e485'] ='<font color=#0000ff></font>';//ゆきだるま                     D
	emoji['e48f'] ='<font color=#ff0000></font>';//星座（おひつじ座）             D
	emoji['e490'] ='<font color=#ffa500></font>';//星座（おうし座）               D
	emoji['e491'] ='<font color=#00ff00></font>';//星座（双子座）                 D
	emoji['e492'] ='<font color=#0000ff></font>';//星座（かに座）                 D
	emoji['e493'] ='<font color=#ff0000></font>';//星座（しし座）                 D
	emoji['e494'] ='<font color=#ffa500></font>';//星座（おとめ座）               D
	emoji['e495'] ='<font color=#00ff00></font>';//星座（天秤座）                 D
	emoji['e496'] ='<font color=#0000ff></font>';//星座（さそり座）               D
	emoji['e497'] ='<font color=#ff0000></font>';//星座（いて座）                 D
	emoji['e498'] ='<font color=#ffa500></font>';//星座（やぎ座）                 D
	emoji['e499'] ='<font color=#00ff00></font>';//星座（水瓶座）                 D
	emoji['e49a'] ='<font color=#0000ff></font>';//星座（うお座）                 D
	emoji['e49b'] ='<font color=#000000>＿</font>';//星座（へびつかい座）
	emoji['e4a3'] ='<font color=#ff0000></font>';//ＡＴＭ                         D
	emoji['e4a4'] ='<font color=#0000ff></font>';//２４HOURS（コンビニ)           D
	emoji['e4a5'] ='<font color=#000000></font>';//トイレ                         D
	emoji['e4a6'] ='<font color=#0000ff></font>';//パーキング                     D
	emoji['e4a7'] ='<font color=#ff0000></font>';//バス停
	emoji['e4a8'] ='<font color=#ff0000></font>';//ｱﾝﾃﾅ（位置情報ﾏｰｸ）
	emoji['e4a9'] ='<font color=#0000ff></font>';//港（いかりマーク）
	emoji['e4aa'] ='<font color=#ff00ff></font>';//銀行                           D
	emoji['e571'] ='<font color=#ff00ff></font>';//ガススタンド                   D
	emoji['e572'] ='<font color=#000000>＿</font>';//地図
	emoji['e4ae'] ='<font color=#000000></font>';//自転車                         D
	emoji['e4af'] ='<font color=#ff0000></font>';//バス                           D
	emoji['e4b0'] ='<font color=#0000ff></font>';//新幹線                         D
	emoji['e46b'] ='<font color=#000000></font>';//マラソン                       D
	emoji['e4b6'] ='<font color=#000000></font>';//サッカー                       D
	emoji['e4b7'] ='<font color=#00ff00></font>';//テニス                         D
	emoji['e4b8'] ='<font color=#0000ff></font>';//スノーボード                   D
	emoji['e4b9'] ='<font color=#000000></font>';//チェッカーフラグ（モータース   D
	emoji['e46d'] ='<font color=#ff0000></font>';//遊園地
	emoji['e4bc'] ='<font color=#ff0000></font>';//温泉                           D
	emoji['e4bd'] ='<font color=#a52a2a></font>';//居酒屋（赤ちょうちん）
	emoji['e4be'] ='<font color=#000000></font>';//映画（かちんこ）               D
	emoji['e4bf'] ='<font color=#000000></font>';//夜の橋
	emoji['e4c0'] ='<font color=#000000>＿</font>';//東京タワー
	emoji['e46e'] ='<font color=#000000>＿</font>';//スロット（７７７）
	emoji['e46f'] ='<font color=#000000></font>';//くす玉（アタリのくす玉）
	emoji['e4c5'] ='<font color=#ff0000>◎</font>';//当選弓矢
	emoji['e4c6'] ='<font color=#000000></font>';//ゲームのコントローラ           D
	emoji['e4c7'] ='<font color=#a52a2a></font>';//賞金                           D
	emoji['e4c9'] ='<font color=#00ff00></font>';//クリスマスツリー               D
	emoji['e4ca'] ='<font color=#ff00ff></font>';//花見(さくら）                  D
	emoji['e4cb'] ='<font color=#800080></font>';//お化け
	emoji['e4cc'] ='<font color=#ff0000></font>';//旗（祝日・日の丸）
	emoji['e4cd'] ='<font color=#ff0000></font>';//スイカ
	emoji['e4d0'] ='<font color=#ff0000></font>';//ケーキ                         D
	emoji['e4d1'] ='<font color=#000000></font>';//フライパン（目玉焼き）
	emoji['e4d2'] ='<font color=#ff0000></font>';//さくらんぼ                     D
	emoji['e4d3'] ='<font color=#0000ff></font>';//ふぐ
	emoji['e4d4'] ='<font color=#ff0000></font>';//イチゴ
	emoji['e4d5'] ='<font color=#000000></font>';//おにぎり                       D
	emoji['e4d6'] ='<font color=#ffa500></font>';//ハンバーガー（ファーストフー   D
	emoji['e470'] ='<font color=#0000ff></font>';//くじら
	emoji['e4d7'] ='<font color=#ffa500></font>';//うさぎ
	emoji['e4d8'] ='<font color=#a52a2a></font>';//うま                           D
	emoji['e4d9'] ='<font color=#ffa500></font>';//さる
	emoji['e4da'] ='<font color=#ff00ff></font>';//かえる
	emoji['e4db'] ='<font color=#ffa500></font>';//猫                             D
	emoji['e4dc'] ='<font color=#000080></font>';//ペンギン                       D
	emoji['e4dd'] ='<font color=#a52a2a></font>';//あり
	emoji['e4de'] ='<font color=#ffa500></font>';//ぶた                           D
	emoji['e4e2'] ='<font color=#ff0000></font>';//やしのき
	emoji['e4e3'] ='<font color=#00ff00></font>';//ひまわり
	emoji['e471'] ='<font color=#ff00ff></font>';//顔１（うれしいカオ）           D
	emoji['e472'] ='<font color=#ff0000></font>';//顔２（おこったカオ）           D
	emoji['e473'] ='<font color=#0000ff></font>';//顔３（かなしいカオ）           D
	emoji['e474'] ='<font color=#000000></font>';//顔４（つかれたカオ）
	emoji['e475'] ='<font color=#0000ff></font>';//眠い（ＺＺＺ…）               D
	emoji['e4e5'] ='<font color=#000000></font>';//怒り（ムカッ）                 D
	emoji['e4e6'] ='<font color=#000000></font>';//雫（涙・汗）                   D
	emoji['e4e7'] ='<font color=#ff0000></font>';//からかう（あっかんべえ）       D
	emoji['e477'] ='<font color=#ff0000></font>';//ハート２（われている）         D
	emoji['e478'] ='<font color=#ff0000></font>';//ハート３（大きい＆小さい）     D
	emoji['e479'] ='<font color=#ffa500></font>';//スパーク２（キラリマーク）
	emoji['e47a'] ='<font color=#000000></font>';//爆弾                           D
	emoji['e47b'] ='<font color=#ff0000>＿</font>';//炎
	emoji['e4e8'] ='<font color=#800080></font>';//捜索（SOS）
	emoji['e4e9'] ='<font color=#ffa500></font>';//力こぶ
	emoji['e4ea'] ='<font color=#ff0000></font>';//ハート５（矢がささっている）
	emoji['e4eb'] ='<font color=#ff0000></font>';//キスマーク                     D
	emoji['e4ec'] ='<font color=#800080></font>';//宇宙人
	emoji['e4ed'] ='<font color=#ff0000></font>';//なると
	emoji['e4ee'] ='<font color=#ffa500></font>';//足跡（犬）
	emoji['e4ef'] ='<font color=#800080></font>';//悪魔
	emoji['e4f0'] ='<font color=#ff0000></font>';//花丸
	emoji['e4f1'] ='<font color=#ff0000></font>';//丸秘                           D
	emoji['e4f2'] ='<font color=#000000>＿</font>';//100点満点
	emoji['e4f3'] ='<font color=#ff0000></font>';//パンチ                         D
	emoji['e4f4'] ='<font color=#000000></font>';//ダッシュ                       D
	emoji['e4f5'] ='<font color=#cc6600>＿</font>';//ウンチマーク
	emoji['e4f6'] ='<font color=#ffa500></font>';//人差し指サイン
	emoji['e4f7'] ='<font color=#000000>＿</font>';//マル得
	emoji['e4f8'] ='<font color=#800080></font>';//どくろ
	emoji['e4f9'] ='<font color=#ffa500></font>';//おやゆびサイン                 D
	emoji['e502'] ='<font color=#0000ff></font>';//テレビ                         D
	emoji['e503'] ='<font color=#000000></font>';//マイク                         D
	emoji['e504'] ='<font color=#000000></font>';//財布                           D
	emoji['e505'] ='<font color=#ff0000></font>';//メロディ                       D
	emoji['e506'] ='<font color=#ff0000></font>';//ギター（エレキ）
	emoji['e507'] ='<font color=#ff0000></font>';//バイオリン（クラッシック）
	emoji['e508'] ='<font color=#0000ff></font>';//ヘッドフォン                   D
	emoji['e509'] ='<font color=#ff0000></font>';//口紅                           D
	emoji['e50a'] ='<font color=#000000></font>';//アクション（ピストル）
	emoji['e50b'] ='<font color=#ff00ff></font>';//エステ
	emoji['e577'] ='<font color=#000000>＿</font>';//EZマーク
	emoji['e578'] ='<font color=#ff0000></font>';//無料（ＦＲＥＥ）               D
	emoji['e50c'] ='<font color=#0000ff></font>';//CD/DVD                         D
	emoji['e50d'] ='<font color=#0000ff></font>';//婦人服
	emoji['e50e'] ='<font color=#800080></font>';//UFO
	emoji['e50f'] ='<font color=#ff0000></font>';//更新（ＵＰ！）
	emoji['e510'] ='<font color=#000000>＿</font>';//注射器（血）
	emoji['e598'] ='<font color=#0000ff></font>';//霧                             D
	emoji['e599'] ='<font color=#0000ff></font>';//ゴルフ                         D
	emoji['e59a'] ='<font color=#ffa500></font>';//バスケットボール               D
	emoji['e59b'] ='<font color=#ff00ff></font>';//ポケットベル                   D
	emoji['e59c'] ='<font color=#ff00ff></font>';//アート                         D
	emoji['e59d'] ='<font color=#000000></font>';//演劇
	emoji['e59e'] ='<font color=#ff0000></font>';//イベント                       D
	emoji['e59f'] ='<font color=#ff0000></font>';//リボン                         D
	emoji['e5a0'] ='<font color=#ff0000></font>';//バースデー                     D
	emoji['e5a1'] ='<font color=#000000></font>';//スペード                       D
	emoji['e5a2'] ='<font color=#ff0000></font>';//ダイヤ                         D
	emoji['e5a3'] ='<font color=#000000></font>';//クラブ                         D
	emoji['e5a4'] ='<font color=#000000></font>';//目                             D
	emoji['e5a5'] ='<font color=#ffa500></font>';//耳                             D
	emoji['e5a6'] ='<font color=#ffa500></font>';//手（チョキ）                   D
	emoji['e5a7'] ='<font color=#ffa500></font>';//手（パー）                     D
	emoji['e5a8'] ='<font color=#000000></font>';//新月                           D
	emoji['e5a9'] ='<font color=#000000></font>';//やや欠け月                     D
	emoji['e5aa'] ='<font color=#000000></font>';//半月                           D
	emoji['e5ab'] ='<font color=#ff0000></font>';//クリア                         D
	emoji['e5ac'] ='<font color=#000000></font>';//四角数字0                      D
	emoji['e5ad'] ='<font color=#ff0000></font>';//決定                           D
	emoji['e5ae'] ='<font color=#0000ff></font>';//ふらふら                       D
	emoji['e5af'] ='<font color=#ff0000></font>';//かわいい
	emoji['e5b0'] ='<font color=#ff0000></font>';//どんっ（衝撃）                 D
	emoji['e5b1'] ='<font color=#000000></font>';//あせあせ（飛び散る汗）         D
	emoji['e5b2'] ='<font color=#000000>＿</font>';//イージープラス
	emoji['e5b3'] ='<font color=#0000ff></font>';//地球
	emoji['e5b4'] ='<font color=#ffa500></font>';//ラーメン                       D
	emoji['e5c8'] ='<font color=#ff0000></font>';//NEW                            D
	emoji['e5c9'] ='<font color=#0000ff></font>';//紳士服                         D
	emoji['e5ca'] ='<font color=#000000></font>';//紳士靴
	emoji['e5cb'] ='<font color=#000000></font>';//パソコン                       D
	emoji['e5cc'] ='<font color=#0000ff></font>';//ラジオ
	emoji['e5cd'] ='<font color=#ff0000></font>';//バラ
	emoji['e5ce'] ='<font color=#00ff00></font>';//チャペル
	emoji['e5cf'] ='<font color=#ffa500></font>';//地下鉄                         D
	emoji['e5d0'] ='<font color=#0000ff></font>';//富士山                         D
	emoji['e5d1'] ='<font color=#ff0000></font>';//八分音符                       D
	emoji['e5d2'] ='<font color=#ff00ff></font>';//天使
	emoji['e5d3'] ='<font color=#ffa500></font>';//トラ
	emoji['e5d4'] ='<font color=#ffa500></font>';//くま
	emoji['e5d5'] ='<font color=#ffa500></font>';//ねずみ
	emoji['e5d6'] ='<font color=#ff00ff></font>';//ウインク                       D
	emoji['e5d7'] ='<font color=#ff00ff></font>';//目がハート                     D
	emoji['e5d8'] ='<font color=#800080></font>';//ショッキング                   D
	emoji['e5d9'] ='<font color=#0000ff></font>';//困り                           D
	emoji['e5da'] ='<font color=#0000ff></font>';//たこ
	emoji['e5db'] ='<font color=#000000>＿</font>';//ロケット
	emoji['e5dc'] ='<font color=#ffa500></font>';//王冠                           D
	emoji['e5dd'] ='<font color=#ff0000></font>';//チュー
	emoji['e5de'] ='<font color=#000000></font>';//ハンマー
	emoji['e5df'] ='<font color=#000000></font>';//打ち上げ花火
		emoji['e234'] ='<font color=#ff0000></font>';//枯れ葉
		emoji['e235'] ='<font color=#ff0000></font>';//仕事かばん
		emoji['e236'] ='<font color=#ff0000></font>';//噴水
		emoji['e237'] ='<font color=#ff0000></font>';//キャンプ
		emoji['e238'] ='<font color=#000000>＿</font>';//麻雀
		emoji['e239'] ='<font color=#000000>＿</font>';//ＶＳ（バーサス）
		emoji['e23a'] ='<font color=#ffa500></font>';//トロフィー
		emoji['e23b'] ='<font color=#a52a2a></font>';//カメ
		emoji['e23c'] ='<font color=#ff0000></font>';//スペイン国旗
		emoji['e23d'] ='<font color=#ff0000></font>';//ロシア国旗
		emoji['e23e'] ='<font color=#ff0000></font>';//工事中
		emoji['e23f'] ='<font color=#ff0000></font>';//風呂
		emoji['e240'] ='<font color=#ff0000></font>';//祝日マーク
		emoji['e241'] ='<font color=#000000></font>';//夕方街並み
		emoji['e242'] ='<font color=#ffa500></font>';//卵割り
		emoji['e243'] ='<font color=#ff0000></font>';//株価
		emoji['e244'] ='<font color=#0000ff></font>';//ポリス
		emoji['e245'] ='<font color=#ff0000></font>';//郵便局                         D
		emoji['e246'] ='<font color=#000000></font>';//病院                           D
		emoji['e247'] ='<font color=#00ff00></font>';//学校                           D
		emoji['e248'] ='<font color=#00ff00></font>';//ホテル                         D
		emoji['e249'] ='<font color=#0000ff></font>';//船                             D
		emoji['e24a'] ='<font color=#ff0000></font>';//18禁
		emoji['e24b'] ='<font color=#000000></font>';//圏内
		emoji['e24c'] ='<font color=#ff0000></font>';//COOL!
		emoji['e24d'] ='<font color=#000000>割</font>';//割マーク
		emoji['e24e'] ='<font color=#000000>ザ</font>';//ザ・マーク
		emoji['e24f'] ='<font color=#ff0000></font>';//ＩＤマーク                     D
		emoji['e250'] ='<font color=#ff0000></font>';//満マーク                       D
		emoji['e251'] ='<font color=#0000ff></font>';//空マーク                       D
		emoji['e252'] ='<font color=#000000>指</font>';//指定マーク
		emoji['e253'] ='<font color=#000000>営</font>';//営業中マーク
		emoji['e254'] ='<font color=#000000>↑</font>';//上指差し
		emoji['e255'] ='<font color=#000000>↓</font>';//下指差し
		emoji['e256'] ='<font color=#0000ff></font>';//占い
		emoji['e257'] ='<font color=#ff0000></font>';//マナーモード
		emoji['e258'] ='<font color=#000000>＿</font>';//電源OFF
		emoji['e259'] ='<font color=#ffa500></font>';//メモする
		emoji['e25a'] ='<font color=#000000>＿</font>';//ネクタイ
		emoji['e25b'] ='<font color=#ff0000></font>';//ハイビスカス
		emoji['e25c'] ='<font color=#ff00ff></font>';//花束
		emoji['e25d'] ='<font color=#00ff00></font>';//サボテン
		emoji['e25e'] ='<font color=#a52a2a></font>';//お銚子＆杯                     D
		emoji['e25f'] ='<font color=#ffa500></font>';//乾杯
		emoji['e260'] ='<font color=#000000>祝</font>';//祝マーク
		emoji['e261'] ='<font color=#000000></font>';//風邪薬
		emoji['e262'] ='<font color=#ff0000></font>';//風船
		emoji['e263'] ='<font color=#000000></font>';//クラッカー
		emoji['e264'] ='<font color=#000000>＿</font>';//eznavigation
		emoji['e265'] ='<font color=#000000></font>';//帽子
		emoji['e266'] ='<font color=#ff0000></font>';//ロングブーツ
		emoji['e267'] ='<font color=#ffa500></font>';//ネイル
		emoji['e268'] ='<font color=#0000ff></font>';//美容院
		emoji['e269'] ='<font color=#0000ff></font>';//床屋
		emoji['e26a'] ='<font color=#0000ff></font>';//着物
		emoji['e26b'] ='<font color=#ff00ff></font>';//ビキニ
		emoji['e26c'] ='<font color=#ff0000></font>';//ハート（トランプ）             D
		emoji['e26d'] ='<font color=#ff0000></font>';//光るハート
		emoji['e26e'] ='<font color=#ff0000></font>';//青ハート
		emoji['e26f'] ='<font color=#ff0000></font>';//緑ハート
		emoji['e270'] ='<font color=#ff0000></font>';//黄ハート
		emoji['e271'] ='<font color=#ff0000></font>';//紫ハート
		emoji['e272'] ='<font color=#ffa500></font>';//きらきら                       D
		emoji['e273'] ='<font color=#0000ff></font>';//スキー                         D
		emoji['e274'] ='<font color=#000000></font>';//○
		emoji['e275'] ='<font color=#00ff00></font>';//日本茶                         D
		emoji['e276'] ='<font color=#a52a2a></font>';//食パン                         D
		emoji['e277'] ='<font color=#ffa500></font>';//ソフトクリーム
		emoji['e278'] ='<font color=#ffa500></font>';//ポテト
		emoji['e279'] ='<font color=#ffa500></font>';//だんご
		emoji['e27a'] ='<font color=#000000></font>';//おせんべい
		emoji['e27b'] ='<font color=#000000></font>';//ごはん
		emoji['e27c'] ='<font color=#ffa500></font>';//スパゲッティ
		emoji['e27d'] ='<font color=#ffa500></font>';//カレー
		emoji['e27e'] ='<font color=#ffa500></font>';//おでん
		emoji['e27f'] ='<font color=#000000></font>';//寿司
		emoji['e280'] ='<font color=#ff0000></font>';//りんご                         D
		emoji['e281'] ='<font color=#ff0000></font>';//みかん
		emoji['e282'] ='<font color=#ff0000></font>';//トマト
		emoji['e283'] ='<font color=#ff0000></font>';//なす
		emoji['e284'] ='<font color=#000000></font>';//弁当
		emoji['e285'] ='<font color=#ffa500></font>';//鍋
		emoji['e286'] ='<font color=#ffa500></font>';//ふっ                           D
		emoji['e287'] ='<font color=#0000ff></font>';//しょぼり                       D
		emoji['e288'] ='<font color=#ffa500></font>';//勝ち誇り
		emoji['e289'] ='<font color=#000000></font>';//失敗                           D
		emoji['e28a'] ='<font color=#00ff00></font>';//わからん                       D
		emoji['e28b'] ='<font color=#0000ff></font>';//眠い
		emoji['e28c'] ='<font color=#ff00ff></font>';//てれてれ                       D
		emoji['e28d'] ='<font color=#800080></font>';//青ざめ
		emoji['e28e'] ='<font color=#800080></font>';//風邪ひき
		emoji['e28f'] ='<font color=#800080></font>';//熱
		emoji['e290'] ='<font color=#a52a2a></font>';//横目                           D
		emoji['e291'] ='<font color=#0000ff></font>';//びっくり
		emoji['e292'] ='<font color=#0000ff></font>';//あせり
		emoji['e293'] ='<font color=#ff0000></font>';//楽譜
		emoji['e294'] ='<font color=#ff00ff></font>';//にこにこ
		emoji['e295'] ='<font color=#000000>＿</font>';//チュー２
		emoji['e296'] ='<font color=#000000>＿</font>';//チュッ
		emoji['e297'] ='<font color=#000000>鼻</font>';//鼻
		emoji['e298'] ='<font color=#ff0000></font>';//口
		emoji['e299'] ='<font color=#0000ff></font>';//ゴメン／お願い
		emoji['e29a'] ='<font color=#ffa500></font>';//拍手
		emoji['e29b'] ='<font color=#ff0000></font>';//ＯＫ！
		emoji['e29c'] ='<font color=#0000ff></font>';//ブーイング
		emoji['e29d'] ='<font color=#ffa500></font>';//バイバイ
		emoji['e29e'] ='<font color=#ff0000></font>';//ＮＧ
		emoji['e29f'] ='<font color=#ff0000></font>';//ＯＫ！２
		emoji['e2a0'] ='<font color=#0000ff></font>';//平謝り
		emoji['e2a1'] ='<font color=#ff0000></font>';//カップル
		emoji['e2a2'] ='<font color=#000000></font>';//バニー
		emoji['e2a3'] ='<font color=#FF0000></font>';//トランペット
		emoji['e2a4'] ='<font color=#000000></font>';//ビリヤード
		emoji['e2a5'] ='<font color=#0000ff></font>';//水泳
		emoji['e2a6'] ='<font color=#00ff00></font>';//消防車
		emoji['e2a7'] ='<font color=#00ff00></font>';//救急車
		emoji['e2a8'] ='<font color=#000000></font>';//パトカー
		emoji['e2a9'] ='<font color=#0000ff></font>';//ジェットコースター
		emoji['e2aa'] ='<font color=#00ff00></font>';//門松
		emoji['e2ab'] ='<font color=#000000></font>';//雛祭り
		emoji['e2ac'] ='<font color=#000000>卒</font>';//卒業式
		emoji['e2ad'] ='<font color=#ff00ff></font>';//入学式
		emoji['e2ae'] ='<font color=#0000ff></font>';//こいのぼり
		emoji['e2af'] ='<font color=#0000ff></font>';//傘                             D
		emoji['e2b0'] ='<font color=#ff00ff></font>';//花嫁
		emoji['e2b1'] ='<font color=#ff00ff></font>';//かき氷
		emoji['e2b2'] ='<font color=#000000></font>';//線香花火
		emoji['e2b3'] ='<font color=#ff0000></font>';//巻き貝
		emoji['e2b4'] ='<font color=#000000>＿</font>';//風鈴
		emoji['e2b5'] ='<font color=#ff0000></font>';//ハロウィン
		emoji['e2b6'] ='<font color=#000000></font>';//お月見
		emoji['e2b7'] ='<font color=#00ff00></font>';//サンタ
		emoji['e2b8'] ='<font color=#000000></font>';//夜／流れ星                     D
		emoji['e2b9'] ='<font color=#ff0000></font>';//虹
		emoji['e2ba'] ='<font color=#00ff00></font>';//ホテル２
		emoji['e2bb'] ='<font color=#ff0000></font>';//日の出
		emoji['e2bc'] ='<font color=#000000></font>';//シルクハット                   D
		emoji['e2bd'] ='<font color=#0000ff></font>';//デパート
		emoji['e2be'] ='<font color=#000000>城</font>';//城（日本）
		emoji['e2bf'] ='<font color=#000000>城</font>';//城（ヨーロッパ）
		emoji['e2c0'] ='<font color=#0000ff></font>';//工場２
		emoji['e2c1'] ='<font color=#ff0000></font>';//フランス国旗
		emoji['e5b5'] ='<font color=#000000>＿</font>';//オープンウェーブ
		emoji['e5b6'] ='<font color=#ff0000></font>';//ロック確認
		emoji['e5b7'] ='<font color=#000000>A</font>';//大文字
		emoji['e5b8'] ='<font color=#000000>a</font>';//小文字
		emoji['e5b9'] ='<font color=#000000>1</font>';//数字
		emoji['e5ba'] ='<font color=#000000>＠</font>';//記号
		emoji['e5bb'] ='<font color=#000000>可</font>';//アクセプト
		emoji['e5bc'] ='<font color=#000000>＿</font>';//チェックボックス
		emoji['e5bd'] ='<font color=#000000></font>';//エディット                     D
		emoji['e5be'] ='<font color=#000000>◎</font>';//ラジオボタン
		emoji['e5bf'] ='<font color=#0000ff></font>';//見る
		emoji['e5c0'] ='<font color=#ff0000></font>';//戻る
		emoji['e5c1'] ='<font color=#ffa500></font>';//お気に入り
		emoji['e5c2'] ='<font color=#000000></font>';//終了
		emoji['e5c3'] ='<font color=#ff0000></font>';//ホーム
		emoji['e5c4'] ='<font color=#ff0000></font>';//受信箱１
		emoji['e5c5'] ='<font color=#ffa500></font>';//マーク
		emoji['e5c6'] ='<font color=#ff0000></font>';//個人
		emoji['e5c7'] ='<font color=#00ff00></font>';//再読み込み
		emoji['e2c2'] ='<font color=#ff0000></font>';//ドイツ国旗
		emoji['e2c3'] ='<font color=#ff0000></font>';//イタリア国旗
		emoji['e2c4'] ='<font color=#ff0000></font>';//イギリス国旗
		emoji['e2c5'] ='<font color=#ff0000></font>';//中国国旗
		emoji['e2c6'] ='<font color=#ff0000></font>';//韓国国旗
		emoji['e2c7'] ='<font color=#ff00ff></font>';//白人
		emoji['e2c8'] ='<font color=#ff0000></font>';//中国人
		emoji['e2c9'] ='<font color=#a52a2a></font>';//インド人
		emoji['e2ca'] ='<font color=#ffa500></font>';//おじいさん
		emoji['e2cb'] ='<font color=#ff00ff></font>';//おばあさん
		emoji['e2cc'] ='<font color=#ff00ff></font>';//赤ちゃん
		emoji['e2cd'] ='<font color=#ff00ff></font>';//工事現場の人
		emoji['e2ce'] ='<font color=#ff00ff></font>';//お姫様
		emoji['e2cf'] ='<font color=#0000ff></font>';//イルカ
		emoji['e2d0'] ='<font color=#ff0000></font>';//ダンス
		emoji['e2d1'] ='<font color=#0000ff></font>';//熱帯魚
		emoji['e2d2'] ='<font color=#f52a2a></font>';//げじげじ
		emoji['e2d3'] ='<font color=#a52a2a></font>';//象
		emoji['e2d4'] ='<font color=#ffa500></font>';//コアラ
		emoji['e2d5'] ='<font color=#a52a2a></font>';//ホルスタイン
		emoji['e2d6'] ='<font color=#000000></font>';//ヘビ
		emoji['e2d7'] ='<font color=#ffa500></font>';//鶏
		emoji['e2d8'] ='<font color=#ffa500></font>';//うりぼう
		emoji['e2d9'] ='<font color=#a52a2a></font>';//ふたこぶらくだ
		emoji['e2da'] ='<font color=#000000>A</font>';//Ａ型
		emoji['e2db'] ='<font color=#000000>B</font>';//Ｂ型
		emoji['e2dc'] ='<font color=#000000>O</font>';//Ｏ型
		emoji['e2dd'] ='<font color=#000000>＿</font>';//ＡＢ型
		emoji['e2de'] ='<font color=#ffa500></font>';//足跡                           D
		emoji['e2df'] ='<font color=#000000></font>';//スニーカー                     D
		emoji['e2e0'] ='<font color=#ff0000></font>';//旗                             D
		emoji['e2e1'] ='<font color=#ff0000></font>';//上向きカーブ矢印               D
		emoji['e2e2'] ='<font color=#0000ff></font>';//下向きカーブ矢印               D
		emoji['e2e3'] ='<font color=#ff00ff></font>';//「！？」                       D
		emoji['e2e4'] ='<font color=#ff0000></font>';//「！！」                       D
		emoji['e2e5'] ='<font color=#000000></font>';//くるり                         D
		emoji['e2e6'] ='<font color=#ff0000></font>';//メロン
		emoji['e2e7'] ='<font color=#ff0000></font>';//パイナップル
		emoji['e2e8'] ='<font color=#ff0000></font>';//ぶどう
		emoji['e2e9'] ='<font color=#ffa500></font>';//バナナ                         D
		emoji['e2ea'] ='<font color=#00ff00></font>';//とうもろこし
		emoji['e2eb'] ='<font color=#00ff00></font>';//きのこ
		emoji['e2ec'] ='<font color=#ff0000></font>';//栗
		emoji['e2ed'] ='<font color=#ff0000></font>';//桃
		emoji['e2ee'] ='<font color=#ffa500></font>';//やきいも
		emoji['e2ef'] ='<font color=#ffa500></font>';//ピザ
		emoji['e2f0'] ='<font color=#ffa500></font>';//ターキー
		emoji['e2f1'] ='<font color=#00ff00></font>';//七夕笹飾り
		emoji['e2f2'] ='<font color=#ff00ff></font>';//トロピカルドリンク
		emoji['e2f3'] ='<font color=#ffa500></font>';//辰
		emoji['e2f4'] ='<font color=#ff0000></font>';//ピアノ
		emoji['e2f5'] ='<font color=#0000ff></font>';//サーフィン
		emoji['e2f6'] ='<font color=#0000ff></font>';//釣り
		emoji['e2f7'] ='<font color=#000000></font>';//ボーリング
		emoji['e2f8'] ='<font color=#000000>＿</font>';//なまはげ
		emoji['e2f9'] ='<font color=#000000>＿</font>';//天狗
		emoji['e2fa'] ='<font color=#ffa500></font>';//パンダ
		emoji['e2fb'] ='<font color=#ff0000></font>';//あかんべー
		emoji['e2fc'] ='<font color=#ffa500></font>';//ぶたの鼻
		emoji['e2fd'] ='<font color=#ff0000></font>';//花
		emoji['e2fe'] ='<font color=#ff00ff></font>';//アイスクリーム
		emoji['e2ff'] ='<font color=#000000></font>';//ドーナツ
		emoji['e300'] ='<font color=#000000></font>';//クッキー
		emoji['e301'] ='<font color=#ffa500></font>';//チョコ
		emoji['e302'] ='<font color=#ff0000></font>';//キャンディ（つつみ）
		emoji['e303'] ='<font color=#ff0000></font>';//キャンディ（ぺろぺろ）
		emoji['e304'] ='<font color=#000000>＿</font>';//見ざる
		emoji['e305'] ='<font color=#000000>＿</font>';//言わざる
		emoji['e306'] ='<font color=#000000>＿</font>';//聞かざる
		emoji['e307'] ='<font color=#0000ff></font>';//火山
		emoji['e308'] ='<font color=#ff0000></font>';//リボンがけのハート
		emoji['e309'] ='<font color=#000000>＿</font>';//英語「ＡＢＣ」
		emoji['e30a'] ='<font color=#000000>＿</font>';//プリン
		emoji['e30b'] ='<font color=#000000>＿</font>';//ミツバチ
		emoji['e30c'] ='<font color=#a52a2a></font>';//テントウムシ
		emoji['e30d'] ='<font color=#000000></font>';//蜂蜜ポット
		emoji['e30e'] ='<font color=#ff0000></font>';//青りんご
		emoji['e30f'] ='<font color=#a52a2a></font>';//羽のはえたお札
		emoji['e310'] ='<font color=#0000ff></font>';//目がまわる時の記号
		emoji['e311'] ='<font color=#ff0000></font>';//ぷー（かわいく怒）             D
		emoji['e312'] ='<font color=#ff0000></font>';//ぶー（かわいく怒）（ネコ）
		emoji['e313'] ='<font color=#000000></font>';//天の川
		emoji['e314'] ='<font color=#000000>＿</font>';//チュー（ネコ）
		emoji['e315'] ='<font color=#ff00ff></font>';//にこ（ネコ）
		emoji['e316'] ='<font color=#000000></font>';//メールする                     D
		emoji['e317'] ='<font color=#ff00ff></font>';//泣き笑い（ネコ）
		emoji['e318'] ='<font color=#ff00ff></font>';//泣き笑い
		emoji['e319'] ='<font color=#ff00ff></font>';//目がハート（ネコ）
		emoji['e31a'] ='<font color=#00ff00></font>';//ほえー（ネコ）
		emoji['e31b'] ='<font color=#00ff00></font>';//ほえー
		emoji['e31c'] ='<font color=#0000ff></font>';//涙ぽろり（ネコ）
		emoji['e31d'] ='<font color=#0000ff></font>';//涙ぽろり                       D
		emoji['e31e'] ='<font color=#ffa500></font>';//きりり（ネコ）
		emoji['e31f'] ='<font color=#0000ff></font>';//ドレス
		emoji['e320'] ='<font color=#000000>＿</font>';//モヤイ像
		emoji['e321'] ='<font color=#00ff00></font>';//駅
		emoji['e322'] ='<font color=#000000>＿</font>';//花札
		emoji['e323'] ='<font color=#000000>＿</font>';//ジョーカー
		emoji['e324'] ='<font color=#000000></font>';//エビフライ
		emoji['e325'] ='<font color=#000000></font>';//ｅメールアイコン
		emoji['e326'] ='<font color=#000000></font>';//歩く人
		emoji['e327'] ='<font color=#000000></font>';//パトカーのランプ
		emoji['e328'] ='<font color=#000000>＿</font>';//ezmovie
		emoji['e329'] ='<font color=#ff0000></font>';//ドキドキしているハート         D
		emoji['e32a'] ='<font color=#ffa500></font>';//正面向きのひよこ
		emoji['e32b'] ='<font color=#000080></font>';//ジーンズ                       D
		emoji['e32c'] ='<font color=#ff0000></font>';//ハートつきメール               D
		emoji['e32d'] ='<font color=#00ff00></font>';//循環矢印                       D
		emoji['e32e'] ='<font color=#000000></font>';//左右両方向矢印                 D
		emoji['e32f'] ='<font color=#000000></font>';//上下両方向矢印                 D
		emoji['e330'] ='<font color=#0000ff></font>';//荒波                           D
		emoji['e331'] ='<font color=#00ff00></font>';//双葉                           D
		emoji['e332'] ='<font color=#a52a2a></font>';//かたつむり                     D
		emoji['e333'] ='<font color=#ffa500></font>';//うっしっし（ネコ）
		emoji['e334'] ='<font color=#ffa500></font>';//うっしっし                     D
		emoji['e335'] ='<font color=#000000></font>';//Cメールアイコン
		emoji['e336'] ='<font color=#00ff00></font>';//ハーブ
		emoji['e337'] ='<font color=#ffa500></font>';//グー                           D
		emoji['e338'] ='<font color=#000000></font>';//＃                             D
		emoji['e339'] ='<font color=#ffa500></font>';//キャラクター（挙手）     
		emoji['e33a'] ='<font color=#ffa500></font>';//キャラクター（万歳）
		emoji['e33b'] ='<font color=#00ff00></font>';//キャラクター（しょんぼり）
		emoji['e33c'] ='<font color=#ff0000></font>';//キャラクター（かわいく怒る）
	if (col) return(emoji[code].substring(20,21));
// 	if (col) return("a");
	else if (bgcol)
	{
		var bg = bgcol.toLowerCase();
		var fcol = emoji[code].substring(12,19);
		if (bg.search(fcol) == -1)
		{
			return(emoji[code].substring(20,21));
// 			return("b");
		}
		else
		{
			return(emoji[code]);
// 			return("c");
		}
	}
	else return(emoji[code].substring(20,21));
// 	else return("d");
}
