// import { Button } from '@/components/ui/button';
import { IconButton } from '@radix-ui/themes';
import { SunIcon as Sun, MoonIcon as Moon } from '@radix-ui/react-icons';
import { Button } from '@/components/ui/button';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import { useTheme } from '@/layout/theme-provider';

// export function ModeToggle() {
//   const { setTheme } = useTheme();

//   return (
//     <DropdownMenu>
//       <DropdownMenuTrigger asChild>
//         <Button size='icon' radius='full'>
//           <Sun className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
//           <Moon className='absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
//           <span className='sr-only'>Toggle theme</span>
//         </Button>
//       </DropdownMenuTrigger>
//       <DropdownMenuContent align='end'>
//         <DropdownMenuItem onClick={() => setTheme('light')}>Light</DropdownMenuItem>
//         <DropdownMenuItem onClick={() => setTheme('dark')}>Dark</DropdownMenuItem>
//         <DropdownMenuItem onClick={() => setTheme('system')}>System</DropdownMenuItem>
//       </DropdownMenuContent>
//     </DropdownMenu>
//   );
// }

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const newTheme = theme === 'light' ? 'dark' : 'light';
  return (
    <>
      <Button onClick={() => setTheme(newTheme)} variant='soft' size='icon'>
        <Moon width='22' height='22' className='dark:hidden' />
        <Sun width='22' height='22' className='hidden dark:block' />
      </Button>
    </>
  );
}
