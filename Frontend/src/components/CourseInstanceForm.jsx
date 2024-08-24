import React, { useState } from 'react';
import { createCourseInstance } from '../api';
import { useNavigate } from 'react-router-dom';

const CourseInstanceForm = () => {
  const [instance, setInstance] = useState({
    yearOfDelivery: 0,
    semesterOfDelivery: 0,
    courseId: 0,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setInstance({
      ...instance,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createCourseInstance(instance);
    navigate('/'); // Redirect to the courses page after creation
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Create Course Instance</h1>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white shadow-md rounded-lg p-8">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="courseId">Course ID</label>
          <input
            name="courseId"
            value={instance.courseId}
            onChange={handleChange}
            placeholder="Course ID"
            type="number"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="yearOfDelivery">Year of Delivery</label>
          <input
            name="yearOfDelivery"
            value={instance.yearOfDelivery}
            onChange={handleChange}
            placeholder="Year"
            type="number"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="semesterOfDelivery">Semester of Delivery</label>
          <input
            name="semesterOfDelivery"
            value={instance.semesterOfDelivery}
            onChange={handleChange}
            placeholder="Semester"
            type="number"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
        >
          Create Course Instance
        </button>
      </form>
    </div>
  );
};

export default CourseInstanceForm;

