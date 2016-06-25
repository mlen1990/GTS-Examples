var arrayOfNumbers = [2, 5, 3, 12, 17, 12, 14, 1, 2, 6, 2];
function reverseArray(inputArray) {
	var outputArray = [];
	for (var i = inputArray.length - 1; i >= 0; i--) {
		outputArray.push(inputArray[i]);
	};
	return outputArray;
}

function binarySearch(n) {
}

function testReverseArray() {
	var outputArray = reverseArray(arrayOfNumbers);
	$('#reverseSampleArray').html('Result: [' + outputArray.join(', ') + ']');
}

function unitTestReverseArray() {
	var tableHTML = '<div><table style="width:40%;">';
	tableHTML += '<head>';
	tableHTML += '<tr>';
	tableHTML += '<th class="align-left">Test Case</th>';
	tableHTML += '<th class="align-left">Input</th>';
	tableHTML += '<th class="align-left">Function Output</th>';
	tableHTML += '<th class="align-left">Correct Output</th>';
	tableHTML += '<th class="align-left">Result</th>';
	tableHTML += '</tr>';
	tableHTML += '</head><tbody>';

	var tests = [
		{
			testCase: 'Empty Array',
			input: [],
			solution: []
		},
		{
			testCase: 'Array of size 1',
			input: [1],
			solution: [1]
		},
		{
			testCase: 'Array of size 2',
			input: [1, 2],
			solution: [2, 1]
		},
		{
			testCase: 'Array of size 4',
			input: [1, 2, 3, 4],
			solution: [4, 3, 2, 1]
		},
		{
			testCase: 'Array of size 6',
			input: [1, 2, 3, 4, 5, 6],
			solution: [6, 5, 4, 3, 2, 1]
		}
	];

	for (var i = 0; i < tests.length; i++) {
		tableHTML += '<tr class="reverse-array-test-case">';
		tableHTML += '<td>' + tests[i].testCase + '</td>';
		tableHTML += '<td>[' + tests[i].input.join(', ') + ']</td>';
		tableHTML += '<td>[' + reverseArray(tests[i].input).join(', ') + ']</td>';
		tableHTML += '<td>[' + tests[i].solution.join(', ') + ']</td>';
		tableHTML += '<td class="align-center "></td>';
		tableHTML += '</tr>';
	};

	tableHTML += '</tbody></table></div>';
	$('#unitTestReverseArray').html(tableHTML);
	$('.reverse-array-test-case').each(function(index, trElement) {
		var tdElements = $(trElement).find('td');
		if (tdElements[2].innerHTML == tdElements[3].innerHTML) {
			$(tdElements[4]).html('PASSED!').addClass('pass');
		} else {
			$(tdElements[4]).html('FAILED!').addClass('fail');
		}
	});
}

function countArray(inputArray, element) {
	var count = 0;
	for (var i = 0; i < inputArray.length; i++) {
		if (inputArray[i] == element) {
			count++;
		}
	};
	return count;
}

function testCountArray() {
	var count = countArray(arrayOfNumbers, 2);
	$('#countSampleArray').html('Result: ' + count);
}

function unitTestCountArray() {
	var tableHTML = '<div><table style="width:60%;">';
	tableHTML += '<head>';
	tableHTML += '<tr>';
	tableHTML += '<th class="align-left">Test Case</th>';
	tableHTML += '<th class="align-left">Input</th>';
	tableHTML += '<th class="align-left">Function Output</th>';
	tableHTML += '<th class="align-left">Correct Output</th>';
	tableHTML += '<th class="align-left">Result</th>';
	tableHTML += '</tr>';
	tableHTML += '</head><tbody>';

	var tests = [
		{
			testCase: 'Empty Array',
			input: [],
			element: 2,
			solution: 0
		},
		{
			testCase: 'Empty Array',
			input: [1],
			element: 2,
			solution: 0
		},
		{
			testCase: 'Empty Array',
			input: [1, 2],
			element: 2,
			solution: 1
		},
		{
			testCase: 'Empty Array',
			input: [1, 2, 3, 2],
			element: 2,
			solution: 2
		},
		{
			testCase: 'Empty Array',
			input: [1, 2, 1, 2, 5, 2, 5, 1, 2],
			element: 2,
			solution: 4
		}
	];

	for (var i = 0; i < tests.length; i++) {
		tableHTML += '<tr class="count-array-test-case">';
		tableHTML += '<td>' + tests[i].testCase + '</td>';
		tableHTML += '<td>countArray([' + tests[i].input.join(', ') + '], ' + tests[i].element + ')</td>';
		tableHTML += '<td>' + countArray(tests[i].input, tests[i].element) + '</td>';
		tableHTML += '<td>' + tests[i].solution + '</td>';
		tableHTML += '<td class="align-center "></td>';
		tableHTML += '</tr>';
	};

	tableHTML += '</tbody></table></div>';
	$('#unitTestCountArray').html(tableHTML);
	$('.count-array-test-case').each(function(index, trElement) {
		var tdElements = $(trElement).find('td');
		if (tdElements[2].innerHTML == tdElements[3].innerHTML) {
			$(tdElements[4]).html('PASSED!').addClass('pass');
		} else {
			$(tdElements[4]).html('FAILED!').addClass('fail');
		}
	});
}

$(function() {
	$('.sampleArray').html('[' + arrayOfNumbers.join(', ') + ']');
})