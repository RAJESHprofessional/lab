CREATE TABLE registration_data (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    course VARCHAR(255) NOT NULL,
    gender VARCHAR(10) NOT NULL,
    mobile_number VARCHAR(10) NOT NULL,
    email VARCHAR(255) NOT NULL,
    address TEXT NOT NULL,
    photo_path VARCHAR(255) NOT NULL
);
