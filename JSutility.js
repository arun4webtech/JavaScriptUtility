function getURLParameter(name,url) {
	url = (url==null || url===undefined)?window.location.href:url;
	url = (url.search(new RegExp("[\?\&]" + name + "=([^\&]*)")) >= 0) ? RegExp.$1 : "";
	try{
		return decodeURIComponent(url);
	}catch(e){return url}
}
	/** old code **/
/*
function getParameterByName(name, url) 
{ 
	if (!url) 
	{ 
		url = window.location.href; 
	} 
	name = name.replace(/[\[\]]/g, "\\$&"); 
	var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)");
	var results = regex.exec(url); 
	if (!results) 
		return null; 
	if (!results[2]) 
		return ''; 
	return decodeURIComponent(results[2].replace(/\+/g, " ")); 
}
*/

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

function isIntNumber(inp)
{
	return inp.match(/[^0-9]/g)==null;
}

function isNumber(inp)
{
	return !isNaN(inp);
}

/* --------------------------------------------------------
                            jquery mobile Loader
----------------------------------------------------------*/
function showLoader(msgText,theme,overlay)
{
	(theme === undefined)?theme = "b":(theme == "b")?theme = "b" : theme = "a";
	(msgText == undefined)?msgText="Loading..":(msgText == "")?msgText="Loading...":msgText=msgText;
	textVisible = true,
	textonly = false;
	html = "";

	try{	
	  $.mobile.loading( 'show', {
		text: msgText,
		textVisible: textVisible,
		theme: theme,
		textonly: textonly,
		html: html
		});

		if(overlay == true){
			$("body").prepend("<div class=\"overlay\"></div>");
			$(".overlay").css({
				"position": "absolute", 
				"width": $(document).width(), 
				"height": $(document).height(),
				"z-index": 99999, 
				"opacity": "0.5",
				"background-color": "gray"
			});
		}		
	}
	catch(e){
		alert("please include jquery.mobile-1.4.5.min.js " + e.description );
		console.log("please include jquery.mobile-1.4.5.min.js");
	}
}

function hideLoader()
{
	$.mobile.loading( "hide" );
	$(".overlay").remove();
}

function changeLoader(msg)
{
	$(".ui-loader").find("h1").html(msg);
	//showLoader("msg");	// showLoader function takes time for try catch and to complete function // dom completes faster
}






/* --------------------------------------------------------
                            Jquery Full Screen page
----------------------------------------------------------*/
/** include this html lines in HTML page **/
/*
<div id="dialog" title="Basic dialog" style="overflow-x: hidden;">
  	<iframe id="pageURI" src="" style="width:100%;height:100%;border:none;position: fixed;" scrolling="auto"></iframe>
</div>
*/

function fullScreenJDialog(url) 
{
	$("#dialog").dialog();
	$(".ui-dialog-titlebar").hide()
		
	var id = "dialog";
	$("#"+id).parent().css("left","0px")		// dialog parent [dialog whole body]
	$("#"+id).parent().css("top","0px")
	$("#"+id).parent().css("width","100%")
	$("#"+id).parent().css("height","100%")
	$("#"+id).css("height","98%")				// dialog body part
	$("#"+id).css("padding","0px")

	$("#ui-id-1").parent().css("padding","0px")	// modal header 
	var JModalHeaderContent = '<span id="ui-id-1" style="margin-left: 12px;" class="ui-dialog-title">Header Part hard code</span>';
	JModalHeaderContent += '<span onclick="closeTaskModal()" class="glyphicon glyphicon-remove pull-right" style="top:5px;right:5px"></span>';
	$("#ui-id-1").parent().html(JModalHeaderContent); // modal header content
	
	$("#pageURI").attr("src",url)
}

function closeTaskModal() {
	$("#dialog").dialog( "close" );
}

function dateComparison(frmDt,toDt)
{    
    var dayFrm = parseInt(frmDt.split("/")[0]);
    var monthFrm = parseInt(frmDt.split("/")[1]);
    var yearFrm = parseInt(frmDt.split("/")[2]);
    
    var dayTo = parseInt(toDt.split("/")[0]);
    var monthTo = parseInt(toDt.split("/")[1]);
    var yearTo = parseInt(toDt.split("/")[2]);
     
    if(yearFrm < yearTo)
        return true;
	else if(yearFrm > yearTo)
		return false;
	else	//if(yearFrm == yearTo)
    {
        if(monthFrm < monthTo)
            return true;
        else if(monthFrm > monthTo)  
            return false;
		else //if(monthFrm == monthTo)
        {
          if(dayFrm <= dayTo)
            return true; 
		 else
			return false;
        }
    }		
}

var util = {

	getURLParameter : function(name,url){
		return getURLParameter(name,url)
	},
	
	isIE : function(){
		return isIE()
	},

	loadScript : function(src,callback){
		return loadScript(src,callback)
	},
	
	  
	isIntNumber : function(inp){
		return isIntNumber(inp)
	},
	
	isNumber : function(inp){
		return isNumber(inp)
	},
	
	/*Loader with stop control and changing msg inside*/
	showLoader : function(msgText,theme,overlay){
		showLoader(msgText,theme,overlay);
	},
	hideLoader : function(){
		hideLoader()
	},
	changeLoader : function(msg){
		changeLoader(msg)
	},
	
	/*Jquery Full Screen page*/
	fullScreenJDialog : function(url){fullScreenJDialog(url)},
	closeTaskModal	  : function(url){closeTaskModal()},
	
	dateComparison : function(frmDt,toDt){
		dateComparison(frmDt,toDt)
	},
	
};
