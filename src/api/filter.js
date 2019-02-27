export default {
  fixedTwo: function(value) {
  	if(isNaN(value))return 0
  	value = parseFloat(value).toFixed(2)
  	return value
  }
}