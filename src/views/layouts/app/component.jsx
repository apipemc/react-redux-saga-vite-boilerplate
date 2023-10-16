import { Outlet } from 'react-router-dom';

const LayoutApp = () => (
  <main className="bg-slate-200 w-screen h-screen">
    <Outlet />
  </main>
);

export default LayoutApp;
