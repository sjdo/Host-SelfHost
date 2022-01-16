function loadPayloadData() // preload payload data
{
	if (PLfile)
	{
        
        var xhr = new XMLHttpRequest();
        xhr.open('GET', PLfile, true);
        xhr.overrideMimeType('text/plain; charset=x-user-defined');
        xhr.onload = function(e) {
        if (this.status == 200) {
            payloadData = this.response;
            setTimeout(poc, 1500);
        }
        else
        {
			alert("Failed to load " + PLfile + " - " + this.status);
      return;
        }};
        xhr.send();
        
	}
}
