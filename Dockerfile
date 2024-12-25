# Använd den officiella WordPress Docker-imagen
FROM wordpress:latest

# Kopiera en anpassad wp-config.php till WordPress-container
COPY wp-config.php /var/www/html/wp-config.php

# Installera nödvändiga verktyg om du behöver
# RUN apt-get update && apt-get install -y some-package

# Exponera port 80 för att göra hemsidan tillgänglig
EXPOSE 80
