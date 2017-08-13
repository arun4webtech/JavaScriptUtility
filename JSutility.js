function getURLParameter(name,url) {
	url = (url==null || url===undefined)?window.location.href:url;
	url = (url.search(new RegExp("[\?\&]" + name + "=([^\&]*)")) >= 0) ? RegExp.$1 : "";
	try{
		return decodeURIComponent(url);
	}catch(e){return url}
}


function isIE()
{
	var rv = -1;
	if (navigator.appName == 'Microsoft Internet Explorer')
	{
		var ua = navigator.userAgent;
		var re  = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
		if (re.exec(ua) != null)
		rv = parseFloat( RegExp.$1 );
	}
	else if (navigator.appName == 'Netscape')
	{
		var ua = navigator.userAgent;
		var re  = new RegExp("Trident/.*rv:([0-9]{1,}[\.0-9]{0,})");
		if (re.exec(ua) != null)
		rv = parseFloat( RegExp.$1 );
	}
	if(rv == -1)
		rv = false;
	return rv;
}

function loadScript(src,callback)
{
	var head = document.getElementsByTagName("head")
	var script = document.createElement("script")
	script.src = src
	head[0].appendChild(script)
	
	if(callback)
		callback();
}
