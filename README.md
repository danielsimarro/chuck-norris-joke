## Installation

1. Laravel y PHP: Asegúrate de tener instalado Laravel 10. Para ello, es necesario contar con PHP versión 8.1 o superior. Puedes verificar tu versión de PHP con el comando php -v en tu terminal.

2. Composer: Debes tener instalado Composer, el gestor de dependencias para PHP. Si aún no lo tienes, puedes descargarlo e instalarlo desde la página oficial de Composer.

3. Configuración para Peticiones HTTPS
Para realizar peticiones HTTPS a través de la API, se requiere una configuración especial, especialmente si no dispones de un certificado SSL para tu dominio. Para un entorno de prueba, sigue estos pasos:

    1. Descargar el Archivo de Certificados cacert.pem:
    Visita https://curl.se/docs/caextract.html y descarga el archivo cacert.pem.

    2. Ubicar el Archivo cacert.pem:
    Mueve el archivo descargado a la carpeta donde está instalado PHP en tu sistema. Por ejemplo, si tu ruta de PHP es C:\php, coloca el archivo allí.

    3. Editar el Archivo php.ini:
    Necesitarás editar tu archivo php.ini, el cual configura tu entorno PHP. Agrega o actualiza las siguientes líneas con la ruta al archivo cacert.pem:

    curl.cainfo = "C:\php\cacert.pem"
    openssl.cafile = "C:\php\cacert.pem"

    Asegúrate de reemplazar C:\php\cacert.pem con la ruta exacta donde ubicaste el archivo.

    4. Reiniciar el Servidor:
    Una vez realizados los cambios, es importante reiniciar tu servidor web para que los cambios en php.ini tengan efecto.

4. Instalación de React en Laravel: Puedes seguir los pasos de este video para instalar React dentro de Laravel.
Video: https://www.youtube.com/watch?v=pcbCnd_NThQ

5. Arrancar Laravel y React:
    - Inicia Laravel con el comando "php artisan serve".
    - Inicia React con el comando "npm run dev".