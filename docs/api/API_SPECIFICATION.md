# TRIPOLI PULSE AI
# API SPECIFICATION
# VERSION 1.0

---

# OVERVIEW

Architecture Style:
REST API

Base URL:

Production:
https://api.tripolipulse.ai

Staging:
https://staging-api.tripolipulse.ai

Local:
http://localhost:3001

API Version:

v1

Format:

application/json

Character Encoding:

UTF-8

---

# API PRINCIPLES

APIs must be:

- RESTful
- Predictable
- Versioned
- Secure
- Rate Limited
- Documented
- Typed
- Backward Compatible

---

# AUTHENTICATION

Method:

JWT Access Tokens
JWT Refresh Tokens

Headers:

Authorization: Bearer <token>

Content-Type: application/json

Accept: application/json

---

# RESPONSE FORMAT

## Success

```json
{
  "success": true,
  "message": "Operation completed successfully.",
  "data": {},
  "meta": {}
}
```

---

## Error

```json
{
  "success": false,
  "message": "Validation failed.",
  "errors": [],
  "statusCode": 400
}
```

---

# PAGINATION

Query Parameters:

?page=1
&limit=20
&sort=createdAt
&order=desc

Response:

```json
{
  "data": [],
  "meta": {
    "page": 1,
    "limit": 20,
    "total": 100,
    "totalPages": 5
  }
}
```

---

# AUTH MODULE

Base:

/api/v1/auth

Endpoints:

POST   /register
POST   /login
POST   /logout
POST   /refresh
POST   /forgot-password
POST   /reset-password
POST   /verify-email
POST   /verify-otp

---

# USERS MODULE

Base:

/api/v1/users

Endpoints:

GET    /me
PATCH  /me
PATCH  /me/avatar
DELETE /me

Admin:

GET    /
GET    /:id
PATCH  /:id
DELETE /:id

---

# REPORTS MODULE

Base:

/api/v1/reports

Endpoints:

POST   /
GET    /
GET    /me
GET    /:id
PATCH  /:id
DELETE /:id

---

# REPORT REQUEST

```json
{
  "issueTypeId": "uuid",
  "description": "Large pothole near school.",
  "latitude": 34.437,
  "longitude": 35.849,
  "images": []
}
```

---

# REPORT RESPONSE

```json
{
  "id": "uuid",
  "referenceNumber": "REP-000123",
  "status": "pending",
  "severity": 3
}
```

---

# REPORT MANAGEMENT

Base:

/api/v1/admin/reports

Endpoints:

GET    /
PATCH  /:id/status
PATCH  /:id/assign
PATCH  /:id/priority
POST   /merge
GET    /analytics
GET    /export

---

# MAPS MODULE

Base:

/api/v1/maps

Endpoints:

GET /reports
GET /reports/nearby
GET /search
GET /reverse-geocode
GET /layers
GET /heatmaps
GET /hotspots

---

# NEIGHBORHOODS MODULE

Base:

/api/v1/neighborhoods

Endpoints:

GET /
GET /:id
GET /:id/scores
GET /:id/reports
GET /:id/analytics

---

# AI MODULE

Base:

/api/v1/ai

Endpoints:

POST /chat
POST /summarize
GET  /recommendations
GET  /predictions

---

# AI CHAT REQUEST

```json
{
  "message": "Show unresolved road issues in Mina."
}
```

---

# AI CHAT RESPONSE

```json
{
  "message": "There are 12 unresolved road issues in Mina.",
  "sources": [],
  "recommendations": []
}
```

---

# COMPUTER VISION MODULE

Base:

/api/v1/vision

Endpoints:

POST /analyze
GET  /report/:id

---

# NOTIFICATIONS MODULE

Base:

/api/v1/notifications

Endpoints:

GET    /
PATCH  /:id/read
PATCH  /read-all
DELETE /:id

---

# CAMPAIGNS MODULE

Base:

/api/v1/campaigns

Endpoints:

GET    /
GET    /featured
GET    /:id
POST   /
PATCH  /:id
DELETE /:id

---

# DONATIONS MODULE

Base:

/api/v1/donations

Endpoints:

POST /
GET  /me
GET  /:id

---

# PAYMENTS MODULE

Base:

/api/v1/payments

Endpoints:

POST /session
POST /verify
POST /webhook
GET  /:id

---

# ANALYTICS MODULE

Base:

/api/v1/analytics

Endpoints:

GET /overview
GET /reports
GET /neighborhoods
GET /performance
GET /engagement
GET /exports

---

# ADMIN MODULE

Base:

/api/v1/admin

Endpoints:

GET /dashboard
GET /users
GET /roles
GET /settings
PATCH /settings
GET /audit-logs
GET /health

---

# FILE UPLOADS

Base:

/api/v1/uploads

Endpoints:

POST /image
POST /images
DELETE /:id

Restrictions:

Maximum:
10 MB per image

Allowed:

jpg
jpeg
png
webp

Storage:

Cloudinary

---

# QUERY FILTERING

Examples:

```txt
GET /reports?status=pending
GET /reports?severity=4
GET /reports?neighborhoodId=uuid
GET /reports?page=2&limit=20
```

---

# RATE LIMITING

Anonymous:
60 requests/minute

Authenticated:
300 requests/minute

AI Endpoints:
50 requests/minute

Uploads:
20 requests/minute

---

# ERROR CODES

200 OK

201 Created

400 Bad Request

401 Unauthorized

403 Forbidden

404 Not Found

409 Conflict

422 Validation Error

429 Too Many Requests

500 Internal Server Error

---

# SECURITY

Use:

Helmet
CORS
JWT
Input Validation
DTO Validation
Rate Limiting
Audit Logging
RBAC

Never:

Expose stack traces
Trust client input
Store secrets in code
Allow unrestricted uploads

---

# OBSERVABILITY

Logging:

Pino

Monitoring:

OpenTelemetry

Health Checks:

/health

Metrics:

API Latency
Error Rates
Queue Length
AI Response Times
Database Performance

---

# API DOCUMENTATION

Generate:

Swagger/OpenAPI

Available at:

/docs

---

# DEFINITION OF DONE

✅ Versioned APIs

✅ Typed DTOs

✅ Validation

✅ Authentication

✅ Authorization

✅ Pagination

✅ Filtering

✅ Uploads

✅ Documentation

✅ Monitoring

✅ Error Handling

---

# FINAL VISION

The API should act as the central nervous system of Tripoli Pulse AI, exposing secure, scalable, and developer-friendly interfaces that power the website, dashboard, mobile application, AI services, and future smart-city integrations.