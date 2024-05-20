import React from 'react';
import {AppRoutes} from './app.routes';
import {AuthRoutes} from './auth.routes';
import {BrowserRouter} from 'react-router-dom';
import { useAuth } from '../hooks/auth';

export function Routes() {
  const { user } = useAuth();
  return (
    <BrowserRouter>
      {user.accessToken? <AppRoutes /> : <AuthRoutes />}
    </BrowserRouter>
  )
}