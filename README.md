# loadXML

A function for loading external XML files with callback methods

## Example

```
loadXML("./your-data.xml", function(response) {

  var data = response.responseXML;;

  console.log(data);

});
```