import { Skeleton, VStack } from '@hope-ui/solid';
import { useRouteData } from '@solidjs/router';
import { Component, lazy, Show, For } from 'solid-js';
import { User } from './components/User';
const App: Component = () => {
  const users: any = useRouteData();
  return (
    <div class="p-6">
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
};

export default App;
