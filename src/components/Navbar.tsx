import * as React from 'react';
import * as Chakra from '@chakra-ui/react';
import { BsFillMoonFill } from 'react-icons/bs';

function Navbar(): JSX.Element {
  const { toggleColorMode } = Chakra.useColorMode();

  return (
    <Chakra.Flex justify="space-around" p={8}>
      <Chakra.Heading fontWeight="light" letterSpacing={2}>LUKA CERRUTTI</Chakra.Heading>
      <Chakra.IconButton onClick={toggleColorMode} aria-label="Toggle theme" icon={<BsFillMoonFill />} />
    </Chakra.Flex>
  );
}

export default Navbar as React.FC;
