// API Configuration and Service
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api';

/**
 * API Service for handling all backend requests
 */
class ApiService {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  /**
   * Generic fetch method with error handling
   */
  async request(endpoint, options = {}) {
    const url = `${this.baseURL}${endpoint}`;
    const config = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    };

    try {
      const response = await fetch(url, config);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('API request failed:', error);
      throw error;
    }
  }

  /**
   * GET request
   */
  async get(endpoint) {
    return this.request(endpoint, { method: 'GET' });
  }

  /**
   * POST request
   */
  async post(endpoint, data) {
    return this.request(endpoint, {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  /**
   * PUT request
   */
  async put(endpoint, data) {
    return this.request(endpoint, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }

  /**
   * DELETE request
   */
  async delete(endpoint) {
    return this.request(endpoint, { method: 'DELETE' });
  }

  /**
   * Upload image/file
   */
  async uploadImage(endpoint, formData) {
    return this.request(endpoint, {
      method: 'POST',
      headers: {}, // Let browser set Content-Type for FormData
      body: formData,
    });
  }

  // Image-related API methods
  getImageUrl(imagePath) {
    if (!imagePath) return null;
    // If imagePath is already a full URL, return it
    if (imagePath.startsWith('http')) return imagePath;
    // Otherwise, construct the full URL
    return `${this.baseURL}/images/${imagePath}`;
  }

  // Gallery API
  async getGalleryImages() {
    return this.get('/gallery');
  }

  // Services API
  async getServices() {
    return this.get('/services');
  }

  // About API
  async getAboutInfo() {
    return this.get('/about');
  }

  // Jobs API
  async getJobs() {
    return this.get('/jobs');
  }

  async createJobApplication(jobId, applicationData) {
    return this.post(`/jobs/${jobId}/apply`, applicationData);
  }

  // Contact API
  async sendContactMessage(messageData) {
    return this.post('/contact', messageData);
  }
}

// Create and export a singleton instance
const apiService = new ApiService(API_BASE_URL);

export default apiService;

