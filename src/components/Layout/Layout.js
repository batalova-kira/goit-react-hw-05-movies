import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Header, LinkLayout, ListLayout } from './Layout.styled';
import { Toaster } from 'react-hot-toast';
import { Loader } from 'components/Loader/Loader';

const Layout = () => {
  return (
    <div>
      <Header>
        <ListLayout>
          <li>
            <LinkLayout to="/">Home</LinkLayout>
          </li>
          <li>
            <LinkLayout to="/movies">Movies</LinkLayout>
          </li>
        </ListLayout>
      </Header>
      <main>
        <Suspense
          fallback={
            <div>
              <Loader />
            </div>
          }
        >
          <Outlet />
        </Suspense>
      </main>
      <Toaster position="top-right" />
    </div>
  );
};

export default Layout;
