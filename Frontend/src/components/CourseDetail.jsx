import React, { useEffect, useState } from 'react';
import { getCourseById, createCourseInstance } from '../api';
import { useParams, useNavigate } from 'react-router-dom';

const CourseDetail = () => {
    const { id } = useParams();
    const [course, setCourse] = useState(null);
    const [error, setError] = useState(null);
    const [instance, setInstance] = useState({
        yearOfDelivery: '',
        semesterOfDelivery: '',
        courseId: id,
    });
    const navigate = useNavigate();

    useEffect(() => {
        const fetchCourse = async () => {
            try {
                const data = await getCourseById(id);
                setCourse(data);
            } catch (error) {
                console.error("Failed to fetch course:", error);
                setError(error.message);
            }
        };
        fetchCourse();
    }, [id]);

    const handleChange = (e) => {
        setInstance({
            ...instance,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createCourseInstance(instance);
            navigate(`/courses/${id}`); // Redirect to the course details page after creation
        } catch (error) {
            console.error('Failed to create course instance:', error);
        }
    };

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!course) return <div>Loading...</div>;

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold text-center mb-6">Course Details</h1>
            <div className="max-w-lg mx-auto bg-white shadow-md rounded-lg p-8">
                <p className="text-lg font-semibold mb-2">ID: <span className="text-gray-700">{course.courseId}</span></p>
                <p className="text-lg font-semibold mb-2">Title: <span className="text-gray-700">{course.title}</span></p>
                <p className="text-lg font-semibold mb-2">Course Code: <span className="text-gray-700">{course.courseCode}</span></p>
                <p className="text-lg font-semibold mb-2">Description: <span className="text-gray-700">{course.description}</span></p>
                <p className="text-lg font-semibold mb-2">Year: <span className="text-gray-700">{course.yearOfDelivery}</span></p>
                <p className="text-lg font-semibold mb-2">Semester: <span className="text-gray-700">{course.semesterOfDelivery}</span></p>
                
                {/* Form for creating course instances */}
                <h2 className="text-2xl font-bold mt-6 mb-4">Create Course Instance</h2>
                <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6">
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
                        Create Instance
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CourseDetail;
