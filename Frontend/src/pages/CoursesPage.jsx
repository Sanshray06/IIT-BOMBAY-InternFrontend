import React from 'react';
import CourseList from '../components/CourseList';
import { useNavigate } from 'react-router-dom';

export const CoursesPage = () => {
  const navigate = useNavigate();

  const handleAddCourse = () => {
    navigate('/courses/new');
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Courses</h1>
        <CourseList />
        <div className="flex justify-center mt-8">
          <button
            onClick={handleAddCourse}
            className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Add a new course
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoursesPage;
