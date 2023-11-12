
// import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Starter from './components/starter';
import Login from './components/login';
import Signup from './components/signup';
const router = createBrowserRouter([
  {
      path : '/',
      element : <Starter></Starter>
  },
  {
      path : '/login',
      element : <Login></Login>
  },
  {
      path : '/signup',
      element : <Signup></Signup>
  },
  // {
  //     path : '/profile',
  //     element : <AuthorizeUser><Profile /></AuthorizeUser>
  // },
  // {
  //     path : '/recovery',
  //     element : <Recovery></Recovery>
  // },
  // {
  //     path : '/reset',
  //     element : <Reset></Reset>
  // },
  {
      path : '/*',
      element : <Starter></Starter>
  },
])
function App() {
  
  return (
    <main>
        <RouterProvider router={router}></RouterProvider>
    </main>
  )
}

export default App;
