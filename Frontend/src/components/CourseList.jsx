import React, { useEffect, useState } from 'react';
import { getCourses, deleteCourseById } from '../api';
import { useNavigate } from 'react-router-dom';

const CourseList = () => {
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    const response = await getCourses();
    setCourses(response.data);
  };

  const handleDelete = async (id) => {
    await deleteCourseById(id);
    fetchCourses();
  };

  const handleMoreDetails = (id) => {
    navigate(`/courses/${id}`);
  };

  const handleCreateInstance = (id) => {
    navigate(`/course/instance/${id}`);
  };

  return (
    <table className='min-w-full bg-white shadow-md rounded-lg overflow-hidden'>
      <thead className="bg-gray-800 text-white">
        <tr>
          <th className="py-3 px-4">Course ID</th>
          <th className="py-3 px-4">Title</th>
          <th className="py-3 px-4">Code</th>
          <th className="py-3 px-4">Year</th>
          <th className="py-3 px-4">Semester</th>
          <th className="py-3 px-4">Actions</th>
          <th className="py-3 px-4">Details</th>
        </tr>
      </thead>
      <tbody>
        {courses.map(course => (
          <tr key={course.courseId} className="border-b hover:bg-gray-100">
            <td className="py-3 px-14">{course.courseId}</td>
            <td className="py-3 px-14">{course.title}</td>
            <td className="py-3 px-14">{course.courseCode}</td>
            <td className="py-3 px-14">{course.yearOfDelivery}</td>
            <td className="py-3 px-14">{course.semesterOfDelivery}</td>
            <td>
              <button 
                onClick={() => handleDelete(course.courseId)} 
                className="text-red-500 hover:text-red-700"
              >
                Delete
              </button>
            </td>
            <td>
              <button 
                onClick={() => handleMoreDetails(course.courseId)} 
                className="text-blue-500 hover:text-blue-700"
              >
                More Details
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CourseList;
