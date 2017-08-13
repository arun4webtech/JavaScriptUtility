# JavaScriptUtility
JavaScript Utility Functions

#Get data from url
==================
loaded URL : https://www.google.co.in/search?query=github+arun4webtech&gsl=psy-ab.3
      
      getURLParameter("query") => "github arun4webtech"
      getURLParameter("gsl") => "psy-ab.3"
      getURLParameter("input",parent.location.href) => "data from parent window"

#Get IE browser version 
========================
    isIE() => 8 (in IE 8)
    isIE() => false (in chrome)

#Injecting script file 
======================
    function callbackFunction(){console.log("JavaScriptUtility script loaded")}
    loadScript("https://raw.githubusercontent.com/arun4webtech/JavaScriptUtility/master/JSutility.js",callbackFunction)
