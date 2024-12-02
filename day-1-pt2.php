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
$similarityScore = 0;
for ($i = 0; $i < count($left); $i++) {
    for ($j = 0; $j < count($right); $j++) {
        $totalCount = 0;
        if ($left[$i] === $right[$j]) {
            $totalCount++;
        }
        $similarityScore = $similarityScore + ($left[$i] * $totalCount);
    }
}
print($similarityScore);