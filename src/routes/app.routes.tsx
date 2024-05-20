import {Profile} from  '../pages/Profile';
import {Routes, Route, Navigate} from 'react-router-dom';
import React from 'react';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Profile />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}