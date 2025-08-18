if(typeof window.addEventListener == 'function'){ // addEventListenerが使えるなら
	window.addEventListener('load', iWindow, false);
} else if(typeof window.attachEvent == 'object'){ // attachEventが使えるなら(IE用)
	window.attachEvent('onload', iWindow);
}

if(typeof window.addEventListener == 'function'){ // addEventListenerが使えるなら
	window.addEventListener('load', iWindowt, false);
} else if(typeof window.attachEvent == 'object'){ // attachEventが使えるなら(IE用)
	window.attachEvent('onload', iWindowt);
}

/*
 * テキストエリア拡大表示(iPhone用)
 */
function iWindow() {
	var obj = document.body.getElementsByTagName('textarea');
	var hw = document.getElementById('hide');
	var h = '';
	var w = '';
	var t = '';
	hw.onclick = hide;
	for(var i = 0; i < obj.length; i++) {
		obj[i].onfocus = function (){
			h = this.style.height;
			w = this.style.width;
			this.style.width = '100%';
			if(this.clientHeight < 300) { this.style.height = '300px'; }
			this.style.position = 'relative';
			this.style.zIndex = '100';
			t = this.offsetTop;

			var dh = window.innerHeight|document.body.clientHeight;

			hw.style.height = dh+'px';
			hw.style.display = 'block';
		}
		obj[i].onblur = hide;
	}

	function hide(){
		var st = window.scrollY || document.body.scrollTop  || document.documentElement.scrollTop;
		if(st > t) {
			window.scrollBy(0, t-st);
		}
		hw.style.display = 'none';
		this.style.width = w;
		this.style.height = h;
		this.style.zIndex = '1';
	}
}

function iWindowt() {
	var obj = document.body.getElementsByTagName('input');
	var hw = document.getElementById('hide');
	var h = '';
	var w = '';
	var t = '';
	
	hw.onclick = hide;
	for(var i = 0; i < obj.length; i++) {
		if(obj[i].type == "text"){
/*		var tt = obj[i].maxLength;
		if(tt == ""){ tt = '100%'; }*/
		obj[i].onfocus = function (){
			h = this.style.height;
			w = this.style.width;
			this.style.width = '700';
			this.style.position = 'relative';
			this.style.zIndex = '1';

			t = this.offsetTop;

			var dh = window.innerHeight|document.body.clientHeight;

			hw.style.height = dh+'px';
			hw.style.display = 'white';

		}
		obj[i].onblur = hide;
		}
	}

	function hide(){
		var st = window.scrollY || document.body.scrollTop  || document.documentElement.scrollTop;
		if(st > t) {
			window.scrollBy(0, t-st);
		}
		hw.style.display = 'none';
		this.style.width = w;
		this.style.height = h;
		this.style.zIndex = '1';
	}
}