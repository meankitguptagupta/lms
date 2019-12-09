# lms
API for library management system

# How to install
Use following steps to install the application on local
1. Clone the code from git into desired folder
2. run command into terminal\
    ```cd lms```
3. run terminal command\
    ```sh setup.sh```
4. run command into terminal\
    ```cd docker```\
    ```docker-compose up```
5. open new tab of terminal and run command\
    ```docker ps```
6. copy container-id of the lms application and run command into terminal\
    ```docker exec -it [CONTAINER-ID] /bin/bash```
7. now you are in lms container. run command to run migration into database. (only first time)\
    ```migration```
8. now run the project\
    ```npm run dev```

# API Documentation
    Please visit the link to read postman documentation\
    <a href="https://documenter.getpostman.com/view/3356919/SWE6ZHN6?version=latest">https://documenter.getpostman.com/view/3356919/SWE6ZHN6?version=latest</a>