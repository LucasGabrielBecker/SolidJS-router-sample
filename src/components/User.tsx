import { Box } from '@hope-ui/solid';
import { A } from '@solidjs/router';

export function User({ user }: { user: any }) {
  return (
    <Box maxW="600px" mx="auto">
      <A
        href={`/users/${user.id}`}
        class="flex items-center justify-between bg-slate-400 my-4 rounded-md px-6"
        style={{
          'background-image': `linear-gradient(
              90deg,
              hsl(216deg 20% 31%) 0%,
              hsl(216deg 18% 39%) 51%,
              hsl(217deg 17% 48%) 100%
            )`,
        }}
      >
        {user.firstName}
        <div class="w-16 h-16 rounded-full">
          <img
            src={`https://api.dicebear.com/5.x/adventurer/svg?seed=${user.firstName}`}
            alt={`image of user ${user.firstName}`}
            width={80}
          />
        </div>
      </A>
    </Box>
  );
}
