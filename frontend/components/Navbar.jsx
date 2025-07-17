import {Button,Container,Flex,HStack,Text,useColorMode,useColorModeValue } from '@chakra-ui/react'
import { Link } from "react-router-dom"
import { TiShoppingCart } from "react-icons/ti";
import { CiSquarePlus } from "react-icons/ci";
import { IoIosMoon } from "react-icons/io";
import { CgSun } from "react-icons/cg";
import { useProductStore } from '../src/store/product.js'

const Navbar =()=>{
    const { colorMode,toggleColorMode } = useColorMode();
    const { products } = useProductStore()
    return(
     <Container maxW={'full'} px={4} bg={useColorModeValue("gray.100","gray.900")} borderRadius={10} border=" 2px solid white" mt={5} >
        <Flex  
        h={16}
        alignItems={'center'}
        justifyContent={'space-between'}
        >
            <Text
  bgGradient={'linear(to-l,rgb(255, 0, 0),rgb(255, 123, 0))'}
  bgClip={'text'}
  textTransform={'uppercase'}
  textAlign={'center'}
  fontSize={{base:'22',sm:'28'}}
  fontWeight={'bold'}
>
        <Link to={'/'} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        Product Store 
        <TiShoppingCart size={30} color={'red'}/>
        </Link>
    </Text>
    <HStack spacing={2} alignItems={'center'}>
    <Link to={'/create'}>
    <Button>
        <CiSquarePlus  fontsize={20}/>
    </Button>
    </Link>
    <Button onClick={toggleColorMode}>
  {colorMode === 'light' ? <IoIosMoon size={20} /> : <CgSun size={20} />}
</Button>
    </HStack>
        </Flex>
        
    </Container>
    );
};
export default Navbar;