/**
  *
  *	This function returns the string "Hello World!"
  *
  *	@param none
  *
  *	@return string "Hello World!"
  *
  */
function helloWorld() {
	return "Hello World!";
}

/**
  *
  *	Displays the string returned by helloWorld() to the UI
  *
  *	@param none
  *
  *	@return none
  *
  */
function testHelloWorld() {
	$('#helloWorld').html(helloWorld());
}

/**
  *
  *	Returns true if x is even and false otherwise
  *
  *	@param int x
  *
  *	@return bool
  *
  */
function isEven(x) {
	return (x % 2 == 0);
}

/**
  *
  *	Unit Test for the isEven(x) function. Displays a table on the UI indicating whether the test passed or failed.
  *
  */
function testIsEven() {
	var tests = [
		{
			input: -1,
			output: false
		},
		{
			input: 0,
			output: true
		},
		{
			input: 1,
			output: false
		},
		{
			input: 2,
			output: true
		},
		{
			input: 3,
			output: false
		},
		{
			input: 4,
			output: true
		},
		{
			input: 5,
			output: false
		},
		{
			input: 6,
			output: true
		},
		{
			input: 7,
			output: false
		},
		{
			input: 8,
			output: true
		},
		{
			input: 9,
			output: false
		},
		{
			input: 10,
			output: true
		},
		{
			input: 777,
			output: false
		}
	];
	var testDiv = '<table style="width:60%;"><thead><tr>';
	testDiv += '<th class="align-left">Test Case #</th>';
	testDiv += '<th class="align-left">Input</th>';
	testDiv += '<th class="align-left">Function Output</th>';
	testDiv += '<th class="align-left">Correct Output</th>';
	testDiv += '<th class="align-left">Result</th>';
	testDiv += '</tr></thead><tbody>';
	for (var i = 0; i < tests.length; i++) {
		testDiv += '<tr class="is-even-test-case">';
		testDiv += '<td>' + (i + 1) + '</td>';
		testDiv += '<td>' + tests[i].input + '</td>';
		testDiv += '<td>' + isEven(tests[i].input) + '</td>';
		testDiv += '<td>' + tests[i].output + '</td>';
		testDiv += '<td class="align-center"></td>';
		testDiv += '</tr>';
	};
	testDiv += '</tbody></table>';
	$('#isEven').html(testDiv);
	$('.is-even-test-case').each(function(index, trElement) {
		var tdElements = $(trElement).find('td');
		setTimeout(computeResult(tdElements[3].innerHTML, tdElements[2].innerHTML, tdElements[4]), 500 * index);
	});
}

/**
  *
  *	Returns true if x is even and false otherwise
  *
  *	@param int x
  *
  *	@return bool
  *
  */
function dessert(x) {
	if (x < 0) {
		return 'Ice Cream';
	} else if (x == 0) {
		return 'Pie';
	} else if (0 < x && x < 4) {
		return 'Cake';
	} else if (4 <= x && x < 10) {
		return 'Milkshake';
	} else if (x >= 10) {
		return 'Candy';
	}
}

/**
  *
  *	Unit Test for the dessert(x) function. Displays a table on the UI indicating whether the test passed or failed.
  *
  */
function testDessert() {
	var tests = [
		{
			input: -1,
			output: 'Ice Cream'
		},
		{
			input: 0,
			output: 'Pie'
		},
		{
			input: 1,
			output: 'Cake'
		},
		{
			input: 2,
			output: 'Cake'
		},
		{
			input: 3,
			output: 'Cake'
		},
		{
			input: 4,
			output: 'Milkshake'
		},
		{
			input: 5,
			output: 'Milkshake'
		},
		{
			input: 6,
			output: 'Milkshake'
		},
		{
			input: 7,
			output: 'Milkshake'
		},
		{
			input: 8,
			output: 'Milkshake'
		},
		{
			input: 9,
			output: 'Milkshake'
		},
		{
			input: 10,
			output: 'Candy'
		},
		{
			input: 777,
			output: 'Candy'
		}
	];
	var testDiv = '<table style="width:60%;"><thead><tr>';
	testDiv += '<th class="align-left">Test Case #</th>';
	testDiv += '<th class="align-left">Input</th>';
	testDiv += '<th class="align-left">Function Output</th>';
	testDiv += '<th class="align-left">Correct Output</th>';
	testDiv += '<th class="align-left">Result</th>';
	testDiv += '</tr></thead><tbody>';
	for (var i = 0; i < tests.length; i++) {
		testDiv += '<tr class="dessert-test-case">';
		testDiv += '<td>' + (i + 1) + '</td>';
		testDiv += '<td>' + tests[i].input + '</td>';
		testDiv += '<td>' + dessert(tests[i].input) + '</td>';
		testDiv += '<td>' + tests[i].output + '</td>';
		testDiv += '<td class="align-center"></td>';
		testDiv += '</tr>';
	};
	testDiv += '</tbody></table>';
	$('#testDessert').html(testDiv);
	$('.dessert-test-case').each(function(index, trElement) {
		var tdElements = $(trElement).find('td');
		setTimeout(computeResult(tdElements[3].innerHTML, tdElements[2].innerHTML, tdElements[4]), 500 * index);
	});
}