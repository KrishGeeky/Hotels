# Reddy Hotel Backend Server

## Setup Instructions

1. **Install Dependencies**
   ```bash
   cd server
   npm install
   ```

2. **Configure Environment**
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env` file and set:
   - `PORT` - Server port (default: 8000)
   - `JWT_SECRET` - Secret key for JWT tokens (change in production!)
   - `ADMIN_PASSWORD` - Admin login password (change in production!)

3. **Start Server**
   ```bash
   npm start
   # or for development with auto-reload:
   npm run dev
   ```

## API Endpoints

### Public Endpoints

- `POST /api/contact` - Submit contact form
  - Body: `{ name, email, phone?, message }`
  - Returns: `{ success: true, id: "..." }`

### Admin Endpoints (Require Authentication)

- `POST /api/admin/login` - Admin login
  - Body: `{ username: "admin", password: "..." }`
  - Returns: `{ success: true, token: "...", user: {...} }`

- `GET /api/admin/contacts` - Get all contacts
  - Headers: `Authorization: Bearer <token>`
  - Returns: `{ success: true, contacts: [...] }`

- `GET /api/admin/contacts/:id` - Get single contact
  - Headers: `Authorization: Bearer <token>`

- `PUT /api/admin/contacts/:id` - Update contact
  - Headers: `Authorization: Bearer <token>`
  - Body: `{ status?: "new"|"contacted"|"resolved", notes?: string }`

- `DELETE /api/admin/contacts/:id` - Delete contact
  - Headers: `Authorization: Bearer <token>`

## Default Admin Credentials

- Username: `admin`
- Password: `admin123` (change in production!)

## Data Storage

Contacts are stored in `server/data/contacts.json`
Users are stored in `server/data/users.json`

## Security Notes

⚠️ **IMPORTANT**: Change the default admin password and JWT secret before deploying to production!

