import { For } from 'solid-js';
import { A } from '@solidjs/router';

export function Nav() {
  return (
    <nav>
      <ul class="flex flex-row gap-4 px-6 bg-gray-900">
        <li>
          <A
            class="nav-link block pr-2 lg:px-2 py-2 text-slate-400 hover:text-slate-700 focus:text-white transition duration-150 ease-in-out"
            href="/"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
          >
            Home
          </A>
        </li>
      </ul>
    </nav>
  );
}
