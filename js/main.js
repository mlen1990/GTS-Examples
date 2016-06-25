/**
  *
  *	Determines if the expected result is equal to the actual result. Modify the element to display a
  * green "PASSED!" if equal and red "FAILED" otherwise.
  *	@param string expected
  *	@param string actual
  *	@param tdTag element
  */
function computeResult(expected, actual, element) {
	return function() {
		if (expected == actual) {
			$(element).html('PASSED!').addClass('pass');
		} else {
			$(element).html('FAILED!').addClass('fail');
		}
	}
}