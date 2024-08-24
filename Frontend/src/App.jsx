import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CreateCoursePage from './pages/CreateCoursePage';
import CourseDetailPage from './pages/CourseDetailPage';
import {CoursesPage} from './pages/CoursesPage';
import CourseDetail from './components/CourseDetail';
import CourseForm from './components/CourseForm';
import CourseInstanceForm from './components/CourseInstanceForm';
import './App.css';

const App = () => {
  return (
    <div className="background">
      <Router>
        <Routes>
          <Route path="/" element={<CoursesPage />} />
          <Route path="/courses/new" element={<CreateCoursePage />} />
          <Route path="/courses/:id" element={<CourseDetailPage />} />
          <Route path="/new-course" element={<CourseForm />} />
          <Route path="/course/instance/:id" element={<CourseInstanceForm />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
