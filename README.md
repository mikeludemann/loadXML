# loadXML

A function for loading external JSON files with callback methods

## Example

```
loadXML("./your-data.json", function(response) {

  var data = response.responseXML;;

  console.log(data);

});
```