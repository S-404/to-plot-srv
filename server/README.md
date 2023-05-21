# auth-server-express-pg

## install dependencies

    npm i

## prepare .env file

    PORT=5005
    CLIENT_URL=http://localhost:3000

    JWT_ACCESS_SECRET=access_secret_key
    JWT_REFRESH_SECRET=refresh_secret_key
    HASH_SALT=3

    NODE_ENV=development
    DEV_DATABASE_URL=postgres://postgres:mysecretpassword@localhost:5432/db_dev
    TEST_DATABASE_URL=postgres://postgres:mysecretpassword@localhost:5432/db_test
    DATABASE_URL=postgres://postgres:mysecretpassword@localhost:5432/db_prod
        
    SMTP_HOST=smtp.host
    SMTP_PORT=123
    SMTP_SECURE=smtpSecure
    SMTP_USER=smtpUser@email
    SMTP_PASSWORD=smtpPassword

## prepare db

Create pg database \
Open a terminal and run the command below:

    createdb db_dev -U <db_user>
    createdb db_test -U <db_user>
    createdb db_prod -U <db_user>

## run migration

    npx sequelize-cli db:migrate
 
## use script
        
        npm start

<i>or</i>
        
        npm run dev

# server-api

### <i style='color: orange'>post</i> /auth/registration

handles body:

    {
        "username": "username",
        "password": "1234",
        "email": "abc@abc"
    }

returns userData with token

### <i style='color: orange'>post</i> /auth/login

handles body:

    {
        "username": "username",
        "password": "1234",
    }

returns userData with token

### <i style='color: orange'>post</i> /auth/logout
handles refreshToken in req.cookies

### <i style='color: green'>get</i> /auth/refresh
handles refreshToken in req.cookies \
returns userData with token
  
