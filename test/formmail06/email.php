<?php
$to = "quasidance03@gmail.com";
$subject = "Form Submission";
$message = "Name: " . $_POST['name'] . "\nEmail: " . $_POST['email'] . "\nMessage: " . $_POST['message'];
$headers = "From: " . $_POST['email'];
mail($to, $subject, $message, $headers);
header("Location: thank-you.html"); // Redirect to a thank-you page after submission
?>