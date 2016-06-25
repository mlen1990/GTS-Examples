function helloWorld() {
	return "Hello World!";
}

function testHelloWorld() {
	$('#helloWorld').html(helloWorld());
}

function dessert(number) {
	if (number < 0) {
		return 'Ice Cream';
	} else if (number == 0) {
		return 'Pie';
	} else if (0 < number && number < 4) {
		return 'Cake';
	} else if (4 <= number && number < 10) {
		return 'Milkshake';
	} else if (number >= 10) {
		return 'Candy';
	}
}

function testDessert() {
	var tests = [
		{
			testCase: '',
			input: -1,
			output: 'Ice Cream'
		},
		{
			testCase: '',
			input: 0,
			output: 'Pie'
		},
		{
			testCase: '',
			input: 1,
			output: 'Cake'
		},
		{
			testCase: '',
			input: 2,
			output: 'Cake'
		},
		{
			testCase: '',
			input: 3,
			output: 'Cake'
		},
		{
			testCase: '',
			input: 4,
			output: 'Milkshake'
		},
		{
			testCase: '',
			input: 5,
			output: 'Milkshake'
		},
		{
			testCase: '',
			input: 6,
			output: 'Milkshake'
		},
		{
			testCase: '',
			input: 7,
			output: 'Milkshake'
		},
		{
			testCase: '',
			input: 8,
			output: 'Milkshake'
		},
		{
			testCase: '',
			input: 9,
			output: 'Milkshake'
		},
		{
			testCase: '',
			input: 10,
			output: 'Candy'
		},
		{
			testCase: '',
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
	testDiv += '</tr>';
	testDiv += '<tbody>';
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
		if (tdElements[2].innerHTML == tdElements[3].innerHTML) {
			$(tdElements[4]).html('PASSED!').addClass('pass');
		} else {
			$(tdElements[4]).html('FAILED!').addClass('fail');
		}
	});
}