import { useRouteData } from '@solidjs/router';
import { For, Show } from 'solid-js';
import { getPostsByUserId } from '../resources/getPostsFromUser';
import { Post, PostReactions, PostTags, PostTitle } from '../components/Post';

function Posts() {
  const posts = useRouteData<ReturnType<typeof getPostsByUserId>>();

  return (
    <div class="bg-zinc-900 p-6 min-h-[100vh] pt-12">
      <Show when={posts()}>
        <For each={posts().posts}>
          {(post: { title: string; body: string; tags: string[] }) => (
            <Post post={post}>
              <PostTitle title={post.title} />
              <PostTags tags={post.tags}>
                <PostReactions reactions={post.reactions} />
              </PostTags>
            </Post>
          )}
        </For>
      </Show>
    </div>
  );
}

export default Posts;
