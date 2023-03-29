# auth-server-express-pg

## prepare db

add tables to 'AUTH' database

users: 

          [id] [int] IDENTITY(1,1) NOT NULL,
          [username] [nvarchar](16) NOT NULL,
          [password] [nvarchar](max) NOT NULL,
          [email] [nvarchar](max) NOT NULL,
          [isActivated] [bit] NULL

tokens: 

          [id] [int] IDENTITY(1,1) NOT NULL,
          [userId] [int] NOT NULL,
          [refreshToken] [nvarchar](max) NULL,
          [createdAt] [datetime] NULL,
          [updatedAt] [datetime] NULL
        
## prepare .env file

        PORT=5005
        CLIENT_URL=http://localhost:3000

        JWT_ACCESS_SECRET=access_secret_key
        JWT_REFRESH_SECRET=refresh_secret_key
        HASH_SALT=3

        DB_SERVER_HOST=postgres://postgres:postgrespwd@localhost:12345
        DB_AUTH_DATABASE_NAME=AUTH
        
## use script

      npm start

# server-api

## post /auth/registration

handles body:

    {
        "username": "username",
        "password": "1234",
        "email": "abc@abc"
    }

returns userData with token

## post /auth/login

handles body:

    {
        "username": "username",
        "password": "1234",
    }

returns userData with token

## post /auth/logout
handles refreshToken in req.cookies

## get /auth/refresh
handles refreshToken in req.cookies
returns userData with token
  
