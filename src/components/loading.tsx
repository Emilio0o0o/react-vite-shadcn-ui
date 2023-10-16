import { Skeleton } from '@/components/ui/skeleton';
import { Heading, Flex } from '@radix-ui/themes';

export default function LoadingTable() {
  return (
    <Flex direction='column' gap='3' className='text-muted-foreground'>
      <Heading size='2'>Loading table...</Heading>
      <Skeleton className='h-4 w-[250px]' />
      <Skeleton className='h-4 w-[200px]' />
      <Skeleton className='h-4 w-[220px]' />
    </Flex>
  );
}
