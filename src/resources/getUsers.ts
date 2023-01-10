import { createResource, Resource } from 'solid-js';

const fetchUsers = () => fetch('https://dummyjson.com/users');
export function getUsers(): Resource<Response> {
  const [users] = createResource(async () => {
    const response = await fetch('https://dummyjson.com/users');
    return await response.json();
  });
  return users;
}
