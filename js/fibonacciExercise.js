function fibonacci(n) {
	if (n == 0) {
		return 0;
	} else if (n == 1) {
		return 1;
	} else {
		return fibonacci(n - 2) + fibonacci(n - 1);
	}
}

function showNthFibonacciNumber(n) {
	$("#showNthFibonacciNumber").html('The Fibonacci number for n = ' + n + ' is ' + fibonacci(n));
}

function testFibonacci() {
	var testDivHTML = '<h1>Running Fibonacci Tests ...</h1>';
	var sampleFibonacciNumbers = {
		0: 0,
		1: 1,
		2: 1,
		3: 2,
		4: 3,
		5: 5,
		6: 8,
		7: 13,
		8: 21,
		12: 144
	};
	var testNumber = 1;
	testDivHTML += '<div>';
	testDivHTML += '<table style="width:40%;">';
	testDivHTML += '<thead>';
	testDivHTML += '<tr>';
	testDivHTML += '<th class="align-left">Test #</th>';
	testDivHTML += '<th class="align-left">Correct Output <span class="helpCircle" title="This is the correct solution.">?</span></th>';
	testDivHTML += '<th class="align-left">Function Output <span class="helpCircle" title="This is what your function returned.">?</span></th>';
	testDivHTML += '<th class="align-left">Result</th>';
	testDivHTML += '</tr>';
	testDivHTML += '</thead>';
	testDivHTML += '<tbody>';
	for (n in sampleFibonacciNumbers) {
		testDivHTML += '<tr>';
		var nthNumber = fibonacci(n);
		testDivHTML += '<td>' + testNumber + '</td>';
		testDivHTML += '<td>' + sampleFibonacciNumbers[n] + '</td>';
		testDivHTML += '<td>' + nthNumber + '</td>';
		if (nthNumber == sampleFibonacciNumbers[n]) {
			testDivHTML += '<td class="pass align-center">PASSED!</td>';
		} else {
			testDivHTML += '<td class="fail align-center">FAILED!</td>';
		}
		testDivHTML += '</tr>';
		testNumber++;
	}
	testDivHTML += '</body></table></div>';
	var testDiv = $('#fibonacciTest').html(testDivHTML);
}