<?php
// MySQL-databasinställningar via miljövariabler från Railway
define('DB_NAME', getenv('MYSQL_DATABASE'));      // Hämtar databasnamnet från miljövariabeln
define('DB_USER', getenv('MYSQL_USER'));          // Hämtar användarnamnet från miljövariabeln
define('DB_PASSWORD', getenv('MYSQL_PASSWORD'));  // Hämtar lösenordet från miljövariabeln
define('DB_HOST', getenv('MYSQL_HOST') . ':' . getenv('MYSQL_PORT'));  // Hämtar värden från miljövariabeln för MySQL-serverns URL

// För övriga inställningar
$table_prefix = 'wp_'; // Tabellen prefix (kan anpassas)
define('WP_DEBUG', false); // Debugging-läge
define('WP_HOME', 'http://localhost'); // Din hemside-URL
define('WP_SITEURL', 'http://localhost'); // WordPress URL
