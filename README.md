# Shawty - URL Shortener

A TypeScript-based URL shortener service that creates shortened URLs and tracks visit counts.

## Features

- Create shortened URLs from long URLs
- Redirect to original URLs using shortened codes
- Track visit counts for each shortened URL
- PostgreSQL database integration
- RESTful API endpoints

## Prerequisites

- Node.js (v14 or higher)
- PostgreSQL database
- npm or yarn package manager

## Setup

1. Clone the repository:

```bash
git clone <repository-url>
cd shawty

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the root directory with the following variables:

```env
PORT=3000
TINYURL_DOMAIN=http://localhost:3000/
DATABASE_URL="postgresql://username:password@localhost:5432/database_name"
```

4. Set up the database:

```bash
npx prisma migrate dev
```

## Running the Application

Development mode:

```bash
npm run dev
```

Production mode:

```bash
npm run start
```

## API Endpoints

### Create Shortened URL
- **POST** `/create`
- **Body**: `{ "url": "https://example.com/very-long-url" }`
- **Response**: 
```json
{
  "shortUrl": "http://localhost:3000/abcd123",
  "success": true,
  "message": "URL created successfully"
}
```

### Access Original URL
- **GET** `/:id`
- Redirects to the original URL
- Automatically increments visit count

## Project Structure

- `src/`
  - `config/` - Application configuration
  - `controller/` - Request handlers
  - `core/` - Core URL shortening logic
  - `interface/` - TypeScript interfaces
  - `prisma/` - Database schema and migrations
  - `routes/` - API routes
  - `services/` - Business logic layer

## Technologies Used

- TypeScript
- Express.js
- Prisma ORM
- PostgreSQL
- Node.js

## License

ISC


