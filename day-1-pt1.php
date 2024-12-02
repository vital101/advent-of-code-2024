<?php

$input = file_get_contents("day-1.input.txt");
$left = array();
$right = array();
$inputAsArray = explode("\n", $input);
foreach ($inputAsArray as $row) {
    $values = explode("   ", $row);
    array_push($left, intval($values[0]));
    array_push($right, intval($values[1]));
}
sort($left);
sort($right);
$total = 0;
for ($i=0; $i < count($left); $i++) {
    $total = $total + abs($left[$i] - $right[$i]);
}
print($total);