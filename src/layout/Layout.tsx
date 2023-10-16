import { Separator } from '@/components/ui/separator';
import SidebarNav from './sidebar-nav';
import { Box, Flex, Grid } from '@radix-ui/themes';
import TopNavBar from './top-nav';
import { sidebarNavItems } from '../pages/nav-items';

interface SettingsLayoutProps {
  children: React.ReactNode;
}

const gridColumns = { initial: '1', md: '250px 4fr', lg: '350px 4fr' };

export default function SettingsLayout({ children }: SettingsLayoutProps) {
  return (
    <Flex direction='column' className='min-h-screen w-screen  bg-light'>
      <Grid
        columns={gridColumns}
        gapX='5'
        gapY='6'
        className='p-10 bg-background border-b'
        width='100%'
      >
        <Box width={{ initial: '150px', lg: '250px' }} className=' my-auto '>
          <img src='/noodfonds.svg' alt='logo' className='w-40 h-auto dark:hidden' />
          <img src='/noodfonds-light.svg' alt='logo' className='w-40 h-auto hidden dark:block' />
        </Box>

        <TopNavBar props={{ img: '', firstname: 'Emile', lastname: 'Cornelissen' }} />
      </Grid>
      <Grid
        columns={gridColumns}
        gapX='5'
        gapY='6' // Add this style to stretch to the bottom
        className='p-10 pb-16'
        width='100%'
      >
        <Box width='max-content'>
          <SidebarNav items={sidebarNavItems} />
        </Box>
        <Box className='flex-1'>{children}</Box>
      </Grid>
    </Flex>
  );
}
