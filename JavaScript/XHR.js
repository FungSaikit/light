function XHR(url, func, async, sendString, callbackFunction) {
    var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
    xhr.open(func, url, async);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send(sendString);
    xhr.onreadystatechange = callbackFunction;
}