import './App.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,

} from 'react-router-dom';
import UserHeader from './views/UserPages/Header/UserHeader';
import UserFooter from './views/UserPages/Footer/UserFooter';
import UserHomePage from './views/UserPages/Home/UserHomePage';

const UserLayout = () => {
  return (
    <div>
      <UserHeader />
      <Outlet />
      <UserFooter />
    </div>
  );
};

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<UserLayout />}>
          <Route index element={<UserHomePage />} />
        </Route>
      </Route>
    )
  );

  return (
    <div>
      {/* <SkeletonTheme baseColor='#313131' highlightColor='#525252'> */}
        <RouterProvider router={router}></RouterProvider>
      {/* </SkeletonTheme> */}
    </div>
  )
}

export default App
