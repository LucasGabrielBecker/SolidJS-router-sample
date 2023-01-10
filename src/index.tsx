/* @refresh reload */
import { render } from 'solid-js/web';
import { For, lazy } from 'solid-js';

import './index.css';
import { Route, Router, Routes } from '@solidjs/router';
import { Nav } from './components/Nav';
import { getUsers } from './resources/getUsers';
import { getPostsByUserId } from './resources/getPostsFromUser';
import { HopeProvider } from '@hope-ui/solid';
import { Home, Posts } from './pages';

render(
  () => (
    <HopeProvider>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" component={Home} data={getUsers} />`
          <Route path="/users/:id" component={Posts} data={getPostsByUserId} />
        </Routes>
      </Router>
    </HopeProvider>
  ),
  document.getElementById('root') as HTMLElement
);
