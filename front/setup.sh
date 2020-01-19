echo Make build of the project

echo Set Angular Foldar permission

sudo chown -R $USER:www-data angular/
chmod -R 777 angular/

docker build --tag lms_angular .