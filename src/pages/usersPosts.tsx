import { Box, Flex, Image, Tag, Heading, HStack } from '@hope-ui/solid';
import { useRouteData } from '@solidjs/router';
import { For, Show } from 'solid-js';
import { getPostsByUserId } from '../resources/getPostsFromUser';
import { Icon, createIcon } from '@hope-ui/solid';
import { Post, PostReactions, PostTags, PostTitle } from '../components/Post';

export function UsersPosts() {
  const posts = useRouteData<ReturnType<typeof getPostsByUserId>>();

  return (
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
  );
}
