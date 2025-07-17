import { Container,VStack,Text, SimpleGrid } from '@chakra-ui/react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useProductStore } from '../src/store/product'
import ProductCard from '../components/ProductCard';

const HomePage = () => {
    const {fetchProducts,products} =useProductStore();
    useEffect(()=>{
        fetchProducts()
    },[fetchProducts]);
    console.log("products",products)

    return (
        <Container maxW='container.x1' py={12}>
            <VStack spacing={8}>
                 {products.length === 0 ? (
                <Text
                    bgGradient='linear(to-l, rgb(255, 0, 0),rgb(255, 123, 0))'
                    bgClip='text'
                    fontSize='6xl'
                    fontWeight='extrabold'
                >
                    Create Product
                </Text>
                 ):(<Text
            bgGradient="linear(to-l, rgb(255, 0, 0), rgb(255, 123, 0))"
            bgClip="text"
            fontSize="5xl"
            fontWeight="bold"
          >
            Current Products
          </Text>
        )}

                <SimpleGrid columns={{
                    base:1,
                    md:2,
                    lg:3
                }}
                spacing={10}
                w={"full"}
                >{products.map((product)=>(
                    <ProductCard key={product._id} product={product}/>
                ))}

                </SimpleGrid>
                    {products.length === 0&&(
                <Text
                fontSize='x1' textAlign={"center"} fontWeight="bold" color="gray.500"
                >
                    No product found !{" "}  
                    <Link to={"/create"}>
                    <Text as="span" color="blue.500" _hover={{textDecoration:"underline"}}
                    >
                        Create a product
                    </Text>
                    </Link>
                </Text>
                    )}
                
            </VStack>
        </Container>
    )
}
export default HomePage