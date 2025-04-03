# Example success response structure

```json
{
  "success": true,
  "data": {
    // Resource data here
  },
  "message": "Operation successful",
  "timestamp": "2025-03-18T04:18:21.362Z",
  "metadata": {
    "totalRecords": 50,
    "currentPage": 1,
    "totalPages": 5
  }
}
```

# Example error response structure

```json
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Validation failed",
    "details": {
      "field": "email",
      "type": "required"
    },
    "statusCode": 400,
    "timestamp": "2025-03-18T04:18:21.362Z"
  }
}
```
