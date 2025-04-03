# Data types

### References

- [Model Basics | Sequelize](https://sequelize.org/docs/v6/core-concepts/model-basics/)
- [Other Data types | Sequelize](https://sequelize.org/docs/v6/other-topics/other-data-types/)

## Strings

```
DataTypes.STRING;               // VARCHAR(255)
DataTypes.STRING(1234);         // VARCHAR(1234)
DataTypes.STRING.BINARY;        // VARCHAR BINARY
DataTypes.TEXT;                 // TEXT
DataTypes.TEXT('tiny');         // TINYTEXT
DataTypes.CITEXT;               // CITEXT          PostgreSQL and SQLite only.
DataTypes.TSVECTOR;             // TSVECTOR        PostgreSQL only.
```

## Boolean

```
DataTypes.BOOLEAN; // TINYINT(1)
```

## Numbers

```
DataTypes.INTEGER;              // INTEGER
DataTypes.BIGINT;               // BIGINT
DataTypes.BIGINT(11);           // BIGINT(11)

DataTypes.FLOAT;                // FLOAT
DataTypes.FLOAT(11);            // FLOAT(11)
DataTypes.FLOAT(11, 10);        // FLOAT(11,10)

DataTypes.REAL;                 // REAL            PostgreSQL only.
DataTypes.REAL(11);             // REAL(11)        PostgreSQL only.
DataTypes.REAL(11, 12);         // REAL(11,12)     PostgreSQL only.

DataTypes.DOUBLE;               // DOUBLE
DataTypes.DOUBLE(11);           // DOUBLE(11)
DataTypes.DOUBLE(11, 10);       // DOUBLE(11,10)

DataTypes.DECIMAL;              // DECIMAL
DataTypes.DECIMAL(10, 2);       // DECIMAL(10,2)
```

## Dates

```
DataTypes.DATE;                 // DATETIME for mysql / sqlite, TIMESTAMP WITH TIME ZONE for postgres
DataTypes.DATE(6);              // DATETIME(6) for mysql 5.6.4+. Fractional seconds support with up to 6 digits of precision
DataTypes.DATEONLY;             // DATE without time
```

## UUID

```
DataTypes.UUID                  // simply use DataTypes.UUIDV1 or DataTypes.UUIDV4 as the default value
```

## Range

```
DataTypes.RANGE(DataTypes.INTEGER);         // int4range
DataTypes.RANGE(DataTypes.BIGINT);          // int8range
DataTypes.RANGE(DataTypes.DATE);            // tstzrange
DataTypes.RANGE(DataTypes.DATEONLY);        // daterange
DataTypes.RANGE(DataTypes.DECIMAL);         // numrange
```

## Arrays

```
DataTypes.ARRAY(/* DataTypes.SOMETHING */);             // Defines an array of DataTypes.SOMETHING.

// For example
DataTypes.ARRAY(DataTypes.STRING);                      // VARCHAR(255)[]
DataTypes.ARRAY(DataTypes.ARRAY(DataTypes.STRING));     // VARCHAR(255)[][]
```

## Blobs

```
DataTypes.BLOB;                         // BLOB (bytea for PostgreSQL)
DataTypes.BLOB('tiny');                 // TINYBLOB (bytea for PostgreSQL)
DataTypes.BLOB('medium');               // MEDIUMBLOB (bytea for PostgreSQL)
DataTypes.BLOB('long');                 // LONGBLOB (bytea for PostgreSQL)
```

## Enum

```
DataTypes.ENUM('foo', 'bar');           // An ENUM with allowed values 'foo' and 'bar'
```

## JSON

```
DataTypes.JSON         // Stores the value as plain text, take less disk space
DataTypes.JSONB        // Use when need to operate on the JSON value
```
