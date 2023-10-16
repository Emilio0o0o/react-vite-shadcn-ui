// import { Button } from '@/components/ui/button';
import { SunIcon as Sun, MoonIcon as Moon } from '@radix-ui/react-icons';
import { Button } from '@/components/ui/button';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import { useTheme } from '@/layout/theme-provider';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const newTheme = theme === 'light' ? 'dark' : 'light';
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <Button
            onClick={() => setTheme(newTheme)}
            variant='secondary'
            size='icon'
            className='rounded-full bg-muted'
          >
            <Moon width='15' height='15' className='dark:hidden' />
            <Sun width='15' height='15' className='hidden dark:block' />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Schakel over naar {newTheme} mode</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
