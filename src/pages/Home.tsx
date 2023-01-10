import { Skeleton, VStack } from '@hope-ui/solid';
import { useRouteData } from '@solidjs/router';
import { Suspense, Show, For } from 'solid-js';
import { User } from '../components/User';
function Home() {
  const users: any = useRouteData();
  return (
    <div class="p-6 bg-zinc-900 text-white min-h-max pt-12">
      <Show when={!users()}>
        <VStack alignItems="stretch" spacing="$2" maxW="600px" mx="auto">
          <Skeleton height="60px" />
          <Skeleton height="60px" />
          <Skeleton height="60px" />
          <Skeleton height="60px" />
          <Skeleton height="60px" />
          <Skeleton height="60px" />
          <Skeleton height="60px" />
          <Skeleton height="60px" />
          <Skeleton height="60px" />
          <Skeleton height="60px" />
          <Skeleton height="60px" />
          <Skeleton height="60px" />
        </VStack>
      </Show>
      <Show when={users()}>
        <For each={users().users}>
          {(user) => {
            return <User user={user} />;
          }}
        </For>
      </Show>
    </div>
  );
}

export default Home;
