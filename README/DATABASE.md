# Database Documentation (MongoDB Atlas)

NOVA uses **MongoDB Atlas** as its cloud database, providing scalable document storage for destinations, experiences, inquiries, and user profiles.

---

## Connection Configuration

- **Cluster Host:** `cluster0.wfjnzya.mongodb.net`
- **Database:** `nova_travel`
- **Connection String:**
  ```env
  MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.wfjnzya.mongodb.net/nova_travel?retryWrites=true&w=majority&appName=Cluster0
  ```
- **Driver:** Mongoose (`mongoose.connect(...)` in `backend/src/config/db.js`)

---

## Data Models & Collections

### 1. `destinations` Collection
Stores curated luxury destinations and multi-day expedition itineraries.
- `id` (String, unique, indexed): URL identifier (e.g. `amalfi`, `santorini`, `kyoto`)
- `slug` (String): SEO friendly slug
- `title` (String): Full destination name (e.g., `Amalfi Coast, Italy`)
- `subtitle` (String): Specific area highlight (e.g., `Positano & Ravello Clifftops`)
- `region` (String): Geographic area (e.g., `Italian Riviera`)
- `rating` (Number): Curated score (e.g., `4.97`)
- `reviewsCount` (Number): Total explorer reviews
- `startingPrice` (Number): Base cost in USD per guest
- `currency` (String): Default `USD`
- `category` (String, indexed): `beaches` | `adventure` | `mountains` | `historical` | `culture`
- `image` (String): Relative path or remote URL
- `overview` (String): Editorial introduction
- `highlight` (String): Signature experience callout
- `duration` (String): Estimated length (e.g., `7 Days / 6 Nights`)
- `tier` (String): Accommodation tier
- `itinerary` (Array): Day-by-day title and description objects
- `inclusions` (Array of Strings): Concierge inclusions

---

### 2. `experiences` Collection
Curated single-day and multi-day masterclasses and expeditions.
- `id` (String, unique, indexed)
- `title` (String)
- `location` (String)
- `duration` (String)
- `tagline` (String)
- `icon` (String, Material Symbols name)
- `tags` (Array of Strings)
- `price` (Number)

---

### 3. `inquiries` Collection
Tracks traveler inquiries and reservations from the Bespoke Trip Planner.
- `id` (String, unique)
- `type` (String): `planner` | `destination_booking` | `experience_charter` | `concierge_contact`
- `name` (String)
- `email` (String)
- `destination` (String)
- `dates` (String)
- `tier` (String)
- `guests` (Number)
- `message` (String)
- `status` (String): `received` | `in_review` | `confirmed`

---

### 4. `newsletters` Collection
Subscribers to the Wanderer Dispatch.
- `email` (String, unique, lowercase)
- `subscribedAt` (Date)
- `active` (Boolean)

---

### 5. `saveds` Collection
Explorer personal wishlist bookmarks.
- `userId` (String, default `usr_001`)
- `destinationId` (String)
- *Compound unique index on `{ userId: 1, destinationId: 1 }`*

---

### 6. `testimonials` Collection
Verified explorer feedback and ratings.
- `id` (String, unique)
- `author` (String)
- `role` (String)
- `quote` (String)
- `rating` (Number)
- `avatar` / `initials` (String)

---

### 7. `users` Collection
Explorer Club VIP member profiles.
- `id` (String, unique)
- `name` (String)
- `email` (String, unique)
- `membershipTier` (String)
- `memberSince` (String)
- `curatedExpeditionsCompleted` (Number)
