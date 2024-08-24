import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:9090/api', // Change the URL if your backend is hosted elsewhere
});


const API_URL = 'http://localhost:9090/api';

export const getCourses = () => api.get('/courses');
export const getCourseById = async (id) => {
    try {
        // Ensure id is treated as an integer
        const integerId = parseInt(id, 10);
        
        // Check if the conversion is successful and id is a valid integer
        if (isNaN(integerId)) {
          throw new Error('Invalid ID format');
        }
    
        const response = await axios.get(`${API_URL}/courses/${integerId}`);
        return response.data;
      } catch (error) {
        console.error('Error fetching course by ID:', error);
        throw error;
      }
};
export const createCourse = (courseData) => api.post('/courses', courseData);
export const deleteCourseById = (id) => api.delete(`/courses/${id}`);
export const createCourseInstance = (instanceData) => api.post('/courses/instances', instanceData);
export const deleteCourseInstance = (year, semester, id) => api.delete(`/courses/instances/${year}/${semester}/${id}`);
