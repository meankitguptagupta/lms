echo Make build of the project
docker build --tag lms .

cd docker

docker-compose run --rm --no-deps web bash -c "npm install;npm link;"