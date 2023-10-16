import { Flex, Box, Heading, Text } from '@radix-ui/themes';
import { CalendarIcon, PersonIcon } from '@radix-ui/react-icons';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { ModeToggle } from './mode-toggle';

function getInitials(firstname: string, lastname: string) {
  if (firstname && lastname) {
    const name = `${firstname} ${lastname}`;
    // Split the name into words
    const words = name.split(' ');

    // Extract the first letter from each word and join them
    const initials = words.map((word) => word[0]).join('');

    return initials;
  } else {
    return <PersonIcon />;
  }
}

export default function TopNavBar(props: any) {
  console.log(props);

  const initials = getInitials(props.firstname, props.lastname);
  console.log(initials);

  return (
    <Flex direction='row' justify='between'>
      <Flex direction='row' gap='9' justify='start'>
        <Box>
          <Heading>Settings</Heading>
          <Text className='text-muted-foreground'>
            Manage your account settings and set e-mail preferences.
          </Text>
        </Box>
      </Flex>
      <Flex>
        <Popover>
          <PopoverTrigger asChild>
            <Avatar>
              <AvatarImage src={props.img} />
              <AvatarFallback>{initials}</AvatarFallback>
            </Avatar>
          </PopoverTrigger>
          <PopoverContent className='w-80'>
            <Flex justify='between' gap={'1'} align='center'>
              <Avatar>
                <AvatarImage src={props.img} />
                <AvatarFallback>{initials}</AvatarFallback>
              </Avatar>
              <div className='space-y-1'>
                <h4 className='text-sm font-semibold'>
                  {props.firstname} {props.lastname}
                </h4>
                <p className='text-sm'>{props.email}</p>
                <div className='flex items-center pt-2'>
                  <CalendarIcon className='mr-2 h-4 w-4 opacity-70' />
                  <span className='text-xs text-muted-foreground'>Organisation</span>
                </div>
              </div>
            </Flex>
          </PopoverContent>
        </Popover>
        <ModeToggle />
      </Flex>
    </Flex>
  );
}
