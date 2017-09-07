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
                            UTILITY
----------------------------------------------------------*/


function onlyDigitsWithSlash(inputField, length)
{
    return function()
    {
	var _ret = true;
        if(inputField && length)
        {
            if(inputField.getValue().length>=length)
            {
               _ret = false;
            } 
			else
			{
				if ((window.event.keyCode <= 46 || window.event.keyCode > 57) )
				{
					if(window.event.keyCode!=191){
						window.event.keyCode = 0;
						_ret = false;        
					}    
				}
			}
        }        
	return (_ret); 
    }
}

function onlyDigitsIE(inputField, length)
{
	return function()
	{
		var _ret = true;
		if(inputField && length)
		{
			if(inputField.getValue().length>=length)
			{
				_ret = false;
			}
			else
			{
				var keyEntry = window.event.keyCode;
				if((keyEntry>=48)&&(keyEntry<=57))
					_ret  = true;
				else
					_ret = false;
			}
		}
		return (_ret);
	}
}

function onlyDigits(inputField, length)
{
	return function(evt)
	{
		var _ret = true;
		var charCode = (evt.charCode) ? evt.charCode :((evt.keyCode) ? evt.keyCode :((evt.which) ? evt.which : 0));
		if(charCode==8 || charCode==9)
			return true;
			
		if(inputField && length){
			if(inputField.getValue().length>=length)
				_ret = false;
			else if ((charCode < 48 || charCode > 57) )
				_ret = false;
		}
		evt.returnValue = _ret;
		return (_ret); 
	}
}

function onlyAlphanumericIE(inputField, length)
{
	return function()
	{
		var _ret = true;
		if(inputField && length)
		{
			if(inputField.getValue().length>=length)
			{
				_ret = false;
			} 
			else
			{
				var keyEntry = window.event.keyCode;
				if(((keyEntry >= '65') && (keyEntry <= '90')) || ((keyEntry >= '97') && (keyEntry <= '122')) || ((keyEntry > '47') && (keyEntry < '58')))       
				   return true;      
				else        
				   return false;     
  		   }
		}
		return (_ret); 
	}
}

function onlyAlphanumeric(inputField, length)
{
	return function(evt)
	{
		var _ret = true;
		var charCode = (evt.charCode) ? evt.charCode :((evt.keyCode) ? evt.keyCode :((evt.which) ? evt.which : 0));
		if(charCode==8 || charCode==9)
			return true;
		if(inputField && length){
			if(inputField.getValue().length>=length)
				_ret = false;
			else if(!(((charCode >= '65') && (charCode <= '90')) || ((charCode >= '97') && (charCode <= '122')) || (charCode > '47' && charCode < '58')) )
				_ret = false;
		}
		evt.returnValue = _ret;
		return (_ret); 
	}
}

function onlyAlphanumericAndCaps(inputField, length)
{
    return function()
    {
        var _ret = true;
        if(inputField && length)
        {
            if(inputField.getValue().length>=length)
            {
               _ret = false;
            } 
			else
			{
                var keyEntry = window.event.keyCode;
				if(((keyEntry>= '65') && (keyEntry <= '90')) || ((keyEntry >= '97') && (keyEntry <= '122')))         
				{
				   if ((keyEntry > 0x60) && (keyEntry < 0x7B))
						window.event.keyCode = keyEntry-0x20;
					return true;
				}
				else if(keyEntry > 46 && keyEntry < 58)
					return true;
			   else
			   {
				   window.event.keyCode = 0;
				   return false;     
			   }
            }
        }           
        return (_ret); 
    }
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
