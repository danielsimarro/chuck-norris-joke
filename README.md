## Installation

1. Laravel and PHP: Ensure you have Laravel 10 installed. For this, you need PHP version 8.1 or higher. You can check your PHP version with the command php -v in your terminal.

2. Composer: You must have Composer installed, the dependency manager for PHP. If you don't have it yet, you can download and install it from the official Composer website.

3. Configuration for HTTPS Requests
To make HTTPS requests through the API, special configuration is required, especially if you do not have an SSL certificate for your domain. For a test environment, follow these steps:

    1. Download the cacert.pem Certificates File:
    Visit https://curl.se/docs/caextract.html and download the cacert.pem file.Download the cacert.pem Certificates File:


    2. Locate the cacert.pem File:
    Move the downloaded file to the folder where PHP is installed on your system. For example, if your PHP path is C:\php, place the file there.

    3. Edit the php.ini File:
    You will need to edit your php.ini file, which configures your PHP environment. Add or update the following lines with the path to the cacert.pem file:

    curl.cainfo = "C:\php\cacert.pem"
    openssl.cafile = "C:\php\cacert.pem"

    Make sure to replace C:\php\cacert.pem with the exact path where you placed the file.

    4. Restart the Server:
    Once the changes are made, it's important to restart your web server for the changes in php.ini to take effect.

4. Installing React in Laravel: You can follow the steps in this video to install React within Laravel.
Video: https://www.youtube.com/watch?v=pcbCnd_NThQ

5. Starting Laravel and React:
    - Start Laravel with the command "php artisan serve".
    - Start React with the command "npm run dev".
