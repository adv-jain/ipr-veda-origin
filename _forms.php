<?php
// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Sanitize the inputs
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $mobile = filter_var($_POST['mobile'], FILTER_SANITIZE_NUMBER_INT);
    $name = htmlspecialchars($_POST['name']);
    $brandName = htmlspecialchars($_POST['brand_name']);

    // Validate the inputs (optional but recommended)
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        die("Invalid email format");
    }
    // Add more validation as necessary, e.g., for mobile number format, length, etc.

    // Database configuration
    $host = 'your_host';
    $dbname = 'your_dbname';
    $username = 'your_username';
    $password = 'your_password';

    try {
        // Create a PDO connection
        $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
        
        // Set the PDO error mode to exception
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        
        // Start building the SQL statement
        $data = [
            'email' => $email,
            'mobile' => $mobile,
            'name' => $name,
            'brand_name' => $brandName
        ];
        $columns = implode(", ", array_keys($data));
        $values = ":" . implode(", :", array_keys($data));
        
        $sql = "INSERT INTO your_table_name ($columns) VALUES ($values)";
        
        // Prepare the statement
        $stmt = $pdo->prepare($sql);
        
        // Bind the values dynamically
        foreach ($data as $key => $value) {
            $stmt->bindValue(":$key", $value);
        }
        
        // Execute the statement
        $stmt->execute();
        
        echo "Record inserted successfully.";
    } catch(PDOException $e) {
        die("Could not connect to the database $dbname :" . $e->getMessage());
    }
} else {
    // Form not submitted
    echo "Please submit the form.";
}
