require('./BaiduSearch.css');
duyi = function (data) {
	var oUl = document.getElementById('ul1');
	var html = '';
	if (data.s.length) {
		oUl.style.display = 'block';
		for (var i=0; i<data.s.length; i++) {
			html += '<li><a target="_blank" href="http://www.baidu.com/s?wd='+data.s[i]+'">'+ data.s[i] +'</a></li>';
		}
		oUl.innerHTML = html;
	} else {
		oUl.style.display = 'none';
	}
}

window.onload = function() {
	var oQ = document.getElementById('q');
	var oUl = document.getElementById('ul1');
	oQ.onkeyup = function() {
		if ( this.value != '' ) {
			var oScript = document.createElement('script');
			oScript.src = 'http://suggestion.baidu.com/su?wd='+this.value+'&cb=duyi';
			document.body.appendChild(oScript);
		} else {
			oUl.style.display = 'none';
		}
	}
}