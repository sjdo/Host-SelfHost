//------BIG THANKS TO SISTRO FOR THIS !!!!!--------
var getPayload = function(payload, onLoadEndCallback) {
  var req = new XMLHttpRequest();
  req.open('GET', payload);
  req.send();
  req.responseType = "arraybuffer";
  req.onload = function (event) {
      if (onLoadEndCallback) onLoadEndCallback(req, event);
  };
}
var sendPayload = function(url, data, onLoadEndCallback) {
  var req = new XMLHttpRequest();
  req.open("POST", url, true);
  req.send(data);

  req.onload = function (event) {
      if (onLoadEndCallback) onLoadEndCallback(req, event);
  };
}
function LoadpaylodsGhen20(PLfile){ //Loading Payload via Payload Param.	  
	// First do an initial check to see if the BinLoader server is running, ready or busy.
	var req = new XMLHttpRequest();
	req.open("POST", 'http://127.0.0.1:9090/status');
	req.send();
	req.onerror = function(){
		alert("Cannot Load Payload Because The BinLoader Server Is Not Running");//<<If server is not running, alert message.
		return;
	};
	req.onload = function(){
		var responseJson = JSON.parse(req.responseText);
		if (responseJson.status=="ready"){
		getPayload(PLfile, function (req) {
			if ((req.status === 200 || req.status === 304) && req.response) {
				//Sending bins via IP POST Method
		sendPayload('http://127.0.0.1:9090', req.response, function (req) {
		if (req.status === 200) {
			alert("Payload sent !");
					}else{
			return;
			}
				})
			} else {
				alert("file not found");
			}
		});
		} else {
			alert("Cannot Load Payload Because The BinLoader Server Is Busy");//<<If server is busy, alert message.
			return;
		}
	};
}
//--------------------------------------------------