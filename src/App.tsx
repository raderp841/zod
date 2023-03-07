import { Route, Routes } from 'react-router-dom';
import BasicLayout from './layouts/BasicLayout';
import { routes as appRoutes } from './routes';

const App = () => {
  return (
    <>
      <BasicLayout />
      <Routes>
        {appRoutes.map((route) => (
                <Route
                  key={route.key}
                  path={route.path}
                  element={<route.component />}
                />
              ))}
      </Routes>
    </>
  );
};

export default App;