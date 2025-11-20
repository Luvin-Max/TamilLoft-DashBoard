# API Documentation

This document describes the API endpoints that the frontend expects from the backend.

## Base URL

The API base URL is configured via the `VITE_API_BASE_URL` environment variable. Default: `http://localhost:5000/api`

## Endpoints

### Gallery

#### GET `/gallery`
Returns an array of gallery images.

**Response:**
```json
[
  {
    "url": "path/to/image.jpg",
    "alt": "Image description",
    "title": "Image Title (optional)",
    "description": "Image description (optional)"
  }
]
```

**Example:**
```json
[
  {
    "url": "gallery/dish1.jpg",
    "alt": "Gourmet pasta dish",
    "title": "Italian Pasta",
    "description": "Handmade pasta with truffle sauce"
  }
]
```

### Services

#### GET `/services`
Returns an array of services offered.

**Response:**
```json
[
  {
    "id": 1,
    "title": "Service Name",
    "description": "Service description",
    "icon": "🍽️",
    "price": "Price or 'Custom'",
    "image": "path/to/image.jpg (optional)"
  }
]
```

**Example:**
```json
[
  {
    "id": 1,
    "title": "Fine Dining Experience",
    "description": "Exquisite multi-course meals",
    "icon": "🍽️",
    "price": "Custom",
    "image": "services/fine-dining.jpg"
  }
]
```

### About

#### GET `/about`
Returns information about the chef.

**Response:**
```json
{
  "name": "Chef Name",
  "title": "Chef Title",
  "bio": "Biography text",
  "experience": "15+ years",
  "specialties": ["French Cuisine", "Italian Cuisine"],
  "achievements": [
    "Achievement 1",
    "Achievement 2"
  ],
  "image": "path/to/image.jpg (optional)"
}
```

### Jobs

#### GET `/jobs`
Returns an array of job opportunities.

**Response:**
```json
[
  {
    "id": 1,
    "title": "Job Title",
    "location": "City, State",
    "type": "Full-time | Part-time | Contract",
    "description": "Job description",
    "requirements": ["Requirement 1", "Requirement 2"],
    "salary": "$50,000 - $70,000 (optional)"
  }
]
```

#### POST `/jobs/:jobId/apply`
Submit a job application.

**Request Body:**
```json
{
  "name": "Applicant Name",
  "email": "applicant@example.com",
  "phone": "+1234567890",
  "coverLetter": "Cover letter text",
  "jobId": 1,
  "jobTitle": "Job Title"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Application submitted successfully"
}
```

### Contact

#### POST `/contact`
Send a contact message.

**Request Body:**
```json
{
  "name": "Sender Name",
  "email": "sender@example.com",
  "phone": "+1234567890 (optional)",
  "subject": "Message Subject",
  "message": "Message content"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Message sent successfully"
}
```

## Image URLs

Images are served from the backend. The frontend constructs image URLs as:
- `${API_BASE_URL}/images/${imagePath}`

For example, if `imagePath` is `gallery/dish1.jpg` and `API_BASE_URL` is `http://localhost:5000/api`, the full URL will be:
- `http://localhost:5000/api/images/gallery/dish1.jpg`

## Error Handling

All endpoints should return appropriate HTTP status codes:
- `200` - Success
- `400` - Bad Request
- `404` - Not Found
- `500` - Server Error

Error responses should follow this format:
```json
{
  "error": "Error message",
  "details": "Additional error details (optional)"
}
```

## CORS

Make sure your backend allows CORS requests from your frontend domain. For development, you may need to configure CORS to allow requests from `http://localhost:5173` (Vite default port).

