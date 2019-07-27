function loadXML(url, callback) { 

	var xmlHTTP = new XMLHttpRequest();

	xmlHTTP.open('GET', url, true);
	xmlHTTP.onreadystatechange = function () {

		if (xmlHTTP.readyState == 4 && xmlHTTP.status == "200") {

			callback(xmlHTTP.responseXML);

		}

	};

	xmlHTTP.send(null); 

}
