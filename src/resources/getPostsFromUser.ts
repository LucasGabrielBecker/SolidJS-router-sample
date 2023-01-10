import { createResource } from 'solid-js';

export function getPostsByUserId({ params }: { params: any }) {
  const [posts] = createResource(async () => {
    const response = await fetch(
      `https://dummyjson.com/posts/user/${params.id}`
    );
    return await response.json();
  });
  return posts;
}
