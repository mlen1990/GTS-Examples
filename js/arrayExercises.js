var arrayOfNumbers = [5, 3, 12, 17, 12, 14, 1, 2, 6];
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
	tableHTML += '<th class="align-left">Correct Output</th>';
	tableHTML += '<th class="align-left">Function Output</th>';
	tableHTML += '<th class="align-left">Result</th>';
	tableHTML += '</tr>';
	tableHTML += '</head><tbody>';

	var testArray = [];
	var output = reverseArray(testArray);
	tableHTML += '<tr class="test-case">';
	tableHTML += '<td>Empty Array</td>';
	tableHTML += '<td>[]</td>';
	tableHTML += '<td>[]</td>';
	tableHTML += '<td>[' + output.join(', ') + ']</td>';
	tableHTML += '<td class="align-center "></td>';
	tableHTML += '</tr>';

	testArray = [1];
	output = reverseArray(testArray);
	tableHTML += '<tr class="test-case">';
	tableHTML += '<td>Array of size 1</td>';
	tableHTML += '<td>[' + testArray.join(', ') + ']</td>';
	tableHTML += '<td>[1]</td>';
	tableHTML += '<td>[' + output.join(', ') + ']</td>';
	tableHTML += '<td class="align-center "></td>';
	tableHTML += '</tr>';

	testArray = [1, 2];
	output = reverseArray(testArray);
	tableHTML += '<tr class="test-case">';
	tableHTML += '<td>Array of size 2</td>';
	tableHTML += '<td>[' + testArray.join(', ') + ']</td>';
	tableHTML += '<td>[2, 1]</td>';
	tableHTML += '<td>[' + output.join(', ') + ']</td>';
	tableHTML += '<td class="align-center "></td>';
	tableHTML += '</tr>';

	testArray = [1, 2, 3, 4];
	output = reverseArray(testArray);
	tableHTML += '<tr class="test-case">';
	tableHTML += '<td>Array of size 4</td>';
	tableHTML += '<td>[' + testArray.join(', ') + ']</td>';
	tableHTML += '<td>[4, 3, 2, 1]</td>';
	tableHTML += '<td>[' + output.join(', ') + ']</td>';
	tableHTML += '<td class="align-center "></td>';
	tableHTML += '</tr>';

	testArray = [1, 2, 3, 4, 5, 6];
	output = reverseArray(testArray);
	tableHTML += '<tr class="test-case">';
	tableHTML += '<td>Array of size 6</td>';
	tableHTML += '<td>[' + testArray.join(', ') + ']</td>';
	tableHTML += '<td>[6, 5, 4, 3, 2, 1]</td>';
	tableHTML += '<td>[' + output.join(', ') + ']</td>';
	tableHTML += '<td class="align-center "></td>';
	tableHTML += '</tr>';

	tableHTML += '</tbody></table></div>';
	$('#unitTestReverseArray').html(tableHTML);
	$('.test-case').each(function(index, trElement) {
		var tdElements = $(trElement).find('td');
		console.log(tdElements);
		if (tdElements[2].innerHTML == tdElements[3].innerHTML) {
			$(tdElements[4]).html('PASSED!').addClass('pass');
		} else {
			$(tdElements[4]).html('FAILED!').addClass('fail');
		}
	});
}

$(function() {
	$('#sampleArray').html('[' + arrayOfNumbers.join(', ') + ']');
})