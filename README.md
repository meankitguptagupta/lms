# lms
API for library management system

# How to install
Use following steps to install the application on local
1. Clone the code from git into desired folder
2. run command into terminal__
    ```cd lms```
3. run terminal command__
    ```sh setup.sh```
4. run command into terminal__
    ```cd docker```__
    ```docker-compose up```
5. open new tab of terminal and run command__
    ```docker ps```
6. copy container-id of the lms application and run command into terminal__
    ```docker exec -it [CONTAINER-ID] /bin/bash```
7. now you are in lms container. run command to run migration into database. (only first time)__
    ```migration```
8. now run the project__
    ```npm run dev```

# API Documentation
    Please visit the link to read postman documentation
    