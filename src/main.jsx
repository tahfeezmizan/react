import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './components/Root/Root.jsx';
import Home from './components/Home/Home.jsx';
import AppiliedJobs from './components/AppliedJobs/AppiliedJobs.jsx';
import Statistics from './components/Statistics/Statistics.jsx';
import Blog from './components/Blog/Blog.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
import JobDetails from './components/JobDetails/JobDetails.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>

      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>
      },
      {
        path: '/appliedjobs',
        element: <AppiliedJobs></AppiliedJobs>,
        loader: () => fetch('/public/jobs.json'),
      },
      {
        path:'/blog',
        element: <Blog></Blog>
      },
      {
        path: 'job/:id',
        element: <JobDetails></JobDetails>,
        loader: () => fetch('/public/jobs.json'),
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
