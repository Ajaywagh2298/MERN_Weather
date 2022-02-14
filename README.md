
## Configuration

Modify the `.env` file as per the following configuration.  
|Config|Type|Description|  
|------|-------|--------|  
|SERVER_PORT|Number| Server listen port |  
|MONGODB_CONNECTION_URL|String| MongoDB Connection UR L|  
|TOKEN_KEY|String| Random string to generate JWT |

## Run
Run the following command to start the backend server
```shell
cd weather
npm i
nodemon src/server.js
```

Run the following command to start the frontend server. It will listen on port 3000.
```shell
cd project
npm i
npm start
```
