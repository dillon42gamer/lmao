
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $json = file_get_contents('php://input');
    $data = json_decode($json);
    $ip = $data->ip;

    // Load existing data
    $jsonArray = json_decode(file_get_contents('admission.json'), true);
    $jsonArray[] = array('ip' => $ip, 'approved' => false);

    // Save back to the file
    file_put_contents('admission.json', json_encode($jsonArray, JSON_PRETTY_PRINT));
}
?>
