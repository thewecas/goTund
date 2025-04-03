# Configuration and DB setup

## Using **PostgreSQL**

Below are the steps to create a DB, User, and Grant access to DB

1. Execute below code to create a DB

   ```sql
   CREATE DATABASE your_database_name;
   ```

2. Create a User and set password

   ```sql
   CREATE USER your_username WITH ENCRYPTED PASSWORD 'your_password';
   ```

3. Grant permission to user for the DB operations

   ```sql
   GRANT ALL PRIVILEGES ON DATABASE your_database_name TO your_username;
   ```

SET the following data to the System environment

```
DB_PORT=5432
DB_NAME=your_database_name
DB_USER=your_username
DB_PASSWORD=your_password
DB_DIALECT=postgres
DB_HOST=your_hosted_db_address
```
