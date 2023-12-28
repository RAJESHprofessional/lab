<?php
$servername = "localhost";
$username = "root";
$password = "root";
$dbname = "regi";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Prepare and bind the SQL statement
$sql = "INSERT INTO registration (firstName, lastName, course, gender, mobileNumber, email, address, photo) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
$stmt = $conn->prepare($sql);

// Bind parameters to the statement
$stmt->bind_param("ssssssss", $_POST['firstName'], $_POST['lastName'], $_POST['course'], $_POST['gender'], $_POST['mobileNumber'], $_POST['email'], $_POST['address'], $_FILES['photo']['name']);

// Execute the statement
if ($stmt->execute()) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $stmt->error;
}

// Close the statement and connection
$stmt->close();
$conn->close();
?>
