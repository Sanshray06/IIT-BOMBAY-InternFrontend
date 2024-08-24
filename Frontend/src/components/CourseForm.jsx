import React, { useState } from 'react';
import { createCourse } from '../api';
import { useNavigate } from 'react-router-dom';

const CourseForm = () => {
  const [course, setCourse] = useState({
    title: '',
    courseCode: '',
    description: '',
    yearOfDelivery: 0,
    semesterOfDelivery: 0,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setCourse({
      ...course,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createCourse(course);
    navigate('/');  // Redirect to the main page after creating the course
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Create New Course</h1>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white shadow-md rounded-lg p-8">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            value={course.title}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="courseCode">Course Code</label>
          <input
            type="text"
            name="courseCode"
            value={course.courseCode}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">Description</label>
          <textarea
            name="description"
            value={course.description}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="yearOfDelivery">Year of Delivery</label>
          <input
            type="number"
            name="yearOfDelivery"
            value={course.yearOfDelivery}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="semesterOfDelivery">Semester of Delivery</label>
          <input
            type="number"
            name="semesterOfDelivery"
            value={course.semesterOfDelivery}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
        >
          Create Course
        </button>
      </form>
    </div>
  );
};

export default CourseForm;
