echo Make build of the backend-project
docker build --tag lms .

cd docker

docker-compose run --rm --no-deps web bash -c "npm install;npm link;"

cd ..

cd front

echo Make build of the frontend-project

echo Set Angular Foldar permission

sudo chown -R $USER:www-data angular/
chmod -R 777 angular/

docker build --tag lms_angular .

cd ../docker

docker-compose run --rm --no-deps lmsfront bash -c "npm install"