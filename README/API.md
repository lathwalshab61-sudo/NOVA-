# REST API Reference

Base API URL: `http://localhost:5000/api`

All API endpoints return JSON with consistent structures:
```json
{
  "success": true,
  "source": "mongodb",
  "data": ...
}
```

---

## 1. System Health
### `GET /api/health`
Returns server uptime and MongoDB Atlas connection status.

**Response:**
```json
{
  "status": "healthy",
  "uptime": 12.45,
  "timestamp": "2026-11-20T10:00:00.000Z",
  "database": {
    "connected": true,
    "readyState": 1,
    "host": "ac-t3idme9-shard-00-00.wfjnzya.mongodb.net",
    "name": "nova_travel"
  }
}
```

---

## 2. Destinations
### `GET /api/destinations`
Retrieve all destinations with optional filtering.

**Query Parameters:**
- `category` (optional): `adventure` | `beaches` | `mountains` | `historical` | `culture`
- `search` (optional): Search string matching title, region, or overview.
- `maxPrice` (optional): Numerical maximum budget.

### `GET /api/destinations/:id`
Retrieve destination by ID or slug (e.g., `amalfi`, `kyoto`, `baa-atoll-maldives`).

---

## 3. Experiences
### `GET /api/experiences`
Returns list of all curated expeditions and masterclasses.

### `GET /api/experiences/:id`
Returns single experience details.

---

## 4. Inquiries & Trip Planner
### `POST /api/inquiries`
Submit bespoke trip planner booking or concierge request.

**Request Payload:**
```json
{
  "name": "Elena Rostova",
  "email": "elena.rostova@wanderer.com",
  "destination": "Amalfi Coast, Italy",
  "dates": "Oct 12 – 22",
  "tier": "Ultra Luxury Villa",
  "guests": 2,
  "message": "Prefer private Riva yacht transfers from Naples.",
  "type": "destination_booking"
}
```

### `GET /api/inquiries`
Internal concierge view of submitted inquiries.

---

## 5. Saved Wishlist
### `GET /api/saved`
Returns saved destination IDs and full destination objects.

### `POST /api/saved/toggle`
Toggle bookmark status for a destination.

**Request Payload:**
```json
{
  "destinationId": "santorini"
}
```

---

## 6. Newsletter Subscription
### `POST /api/newsletter`
Subscribe to the Wanderer Dispatch.

**Request Payload:**
```json
{
  "email": "traveler@exclusive.com"
}
```

---

## 7. Member Authentication
### `POST /api/auth/login`
Authenticate Explorer Club membership.

**Request Payload:**
```json
{
  "email": "elena.rostova@wanderer.com",
  "password": "secretpassword"
}
```

### `GET /api/auth/profile`
Fetch active explorer profile and tier credentials.
