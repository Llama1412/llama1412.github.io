<html>
<html>
<body>


<?php
$firstNumber = $_GET["n1"];
$secondNumber = $_GET["n2"];
$operation = $_GET["Operation"];
$answer = 0;

if ($operation == "add") {
	$answer = $firstNumber + $secondNumber;
	echo $firstNumber." + ".$secondNumber." = ".$answer;
} elseif ($operation == "subtract") {
	$answer = $firstNumber - $secondNumber;
	echo $firstNumber." - ".$secondNumber." = ".$answer;
} elseif ($operation == "multiply") {
	$answer = $firstNumber * $secondNumber;
	echo $firstNumber." x ".$secondNumber." = ".$answer;
} elseif ($operation == "divide") {
	$answer = $firstNumber / $secondNumber;
	echo $firstNumber." ÷ ".$secondNumber." = ".$answer;
}
	



?>
<a href="php%20test.php">Return to menu</a>



</body>
</html>
</html>