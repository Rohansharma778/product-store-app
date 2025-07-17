import { Box,Container,Heading,VStack,useColorModeValue,Input,Button,useToast } from "@chakra-ui/react";
import { useProductStore } from "../src/store/product.js";

import{useState} from "react";

const CreatePage =()=>{
    const [newProduct,setNewProduct]=useState({
        name:"",
        price:"",
        image:"",
    })

    const toast =useToast()
    const {createProduct}=useProductStore()
    const HandleAddProduct = async() =>{
          const { success,message }= await createProduct(newProduct);
        if(!success){
            toast({
                title:"Error",
                descrioption:message,
                status:"error",
                isClosable:true
            })
        }else{
            toast({title:"Success",
            descrioption:message,
            status:"success",
            isClosable:true})
        }
        setNewProduct({name:"",price:"",image:""})
    }
    return <Container maxW={"container.sm"}>
        <VStack 
        spacing={8}>
            <Heading as={"h1"} size={"2xl"} textalign={"center"} mt={10} mb={8}>
                Create New Product
            </Heading>
            <Box
            w={"full"} bg={useColorModeValue("white","gray.800")}
            p={6} rounded={"lg"} shadow={"md"}
            >
                <VStack spacing={4}>
                    <Input
                    placeholder="Product Name"
                    name="name"
                    value={newProduct.name}
                    onChange={(e)=>setNewProduct({...newProduct,name:e.target.value})}
                    ></Input>

                     <Input
                    placeholder="Price"
                    name="price"
                    type="number"
                    value={newProduct.price}
                    onChange={(e)=>setNewProduct({...newProduct,price:e.target.value})}
                    ></Input>

                     <Input
                    placeholder="Image URL"
                    name="image"
                    value={newProduct.image}
                    onChange={(e)=>setNewProduct({...newProduct,image:e.target.value})}
                    ></Input>
                    <Button
                    colorScheme="blue" onClick={HandleAddProduct} w="full"
                    >
                        Add Product
                    </Button>
                </VStack>
            </Box>
        </VStack>
    </Container>
}
export default CreatePage;