import { useForm } from "react-hook-form"
import Simple from "../component/Navbar";
import * as yup from 'yup'
import '../styles/Form.css'
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Link,
    Select 
  } from '@chakra-ui/react';
  import { useState } from 'react';
  import { useToast } from '@chakra-ui/react'
  
  
  
  
  
  
  
  
  export default function Form() {
   
const [idtype,setIdtype]=useState("")
const [id,setId]=useState("")
const [err,setErr]=useState(false)
const[name,setName]=useState("")
const[age,setAge]=useState(0)
const[sex,setSex]=useState("")
const[mobile,setMobile]=useState(0)
const [con,setCon]=useState(false)
const[guardian,setGuardian]=useState("")
const[email,setEmail]=useState("")
const[guardilabel,setGuardilabel]=useState("")
const[emergency,setEmergency]=useState(0)
const[address,setAddress]=useState("")
const[state,setState]=useState("")
const[city,setCity]=useState("")
const[country,setCountry]=useState("")
const[pin,setPin]=useState("")
const[occ,setOcc]=useState("")
const[religion,setReligion]=useState("")
const[marry,setMarry]=useState("")
const[blood,setBlood]=useState("")
const[nation,setNation]=useState("")
const toast = useToast()
const userSchema= yup.object().shape({

   
   
   
    name:yup.string().required(),
    Age:yup.number().required(),
    sex:yup.string().required(),
    mobile:yup.string().notRequired().max(10),
   idtype:yup.string(),
    govtID:yup.string(),
    guardian_label:yup.string(),
   guradianname:yup.string(),
    email:yup.string().email(),
    emergency:yup.string().notRequired().max(10),
    address:yup.string(),
   state:yup.string(),
   city:yup.string(),
    country:yup.string(),
 pincode:yup.string(),
  Occupation:yup.string(),
   religion:yup.string(),
    marrital_stat:yup.string(),
  blood_group:yup.string(),
    nationality:yup.string(),
   



})
let len=idtype=="Aadhar"?12:10;
let x=idtype=="PAN"?/[A-Z]/:"[0-9]*"
let p=idtype=="PAN"?"string":"number"

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        setName(data.exampleRequired)
        setAge(data.exampleAge)
        setEmail(data.exampleEmail)
        setEmergency(data.exampleEmer)
        setMobile(data.exampleMobile)
        setSex(data.exampleSex)
        setId(data.firstId)
        //console.log(data)




        let userData={
            name,
                      Age:age,
                      sex:sex,
                      mobile:mobile,
                      idtype:idtype,
                      govtID:id,
                       guardian_label:guardilabel,
                      guradianname:guardian,
                      email:email,
                      emergency:emergency,
                      address:address,
                      state:state,
                      city:city,
                      country:country,
                      pincode:pin,
                      Occupation:occ,
                      religion:religion,
                      marrital_stat:marry,
                      blood_group:blood,
                      nationality:nation,
                  }

                  console.log("userdata",userData)
                  let  isvalid=  userSchema.isValid(userData).then((res)=>{
                
                    if(res){
                      
                      postData(userData)
                    }
                    
                   })
                   
    };
    
    



if(con){

   setTimeout(()=>{
setCon(false)
   },2000)
}



















   const  postData=(userData)=>{

    fetch("https://assignment-i42w.onrender.com/userData", {
  method: "POST",
  body: JSON.stringify(userData),
  headers: {
    "Content-type": "application/json; charset=UTF-8"
  }
})
  .then((response) => response.json())
  .then((json) => setCon(true));
   }
       
         
    
    
    
    
   

    
    
    return (
        <Box>
            {con?toast({
                title: "User added Succesfully",
                status: "success",
                isClosable: true,
              }):""}
        <Simple/>
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
         <form onSubmit={handleSubmit(onSubmit)}>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
                <FormLabel>Personal Details</FormLabel>
            <Stack spacing={4}>
              <HStack>
                <Box>
                
                  <FormControl id="firstName" isRequired>
                    <FormLabel> Name</FormLabel>
                    {errors.exampleRequired && <span className="error"> * This field is required</span>}
                    <Input onChange={(e)=>setName(e.target.value)}   type="text" placeholder='Enter Name'  {...register("exampleRequired", { required: true })}/>
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="lastName" isRequired>
                    <FormLabel>Date of birth or Age</FormLabel>
                    {errors.exampleAge && <span className="error"> * This field is required</span>}
                    <Input onChange={(e)=>setAge(e.target.value)} type={"number"} placeholder='DD/MM/YYYY or age'   {...register("exampleAge", { required: true })} />
                  
                  </FormControl>

                  

                </Box>
                
              </HStack>
              <HStack>
                <FormControl id="firstName" isRequired>
              <FormLabel>Sex</FormLabel>
              {errors.exampleSex && <span className="error">* This field is required</span>}
              <Select onChange={(e)=>setSex(e.target.value)} placeholder='Enter Sex' type="text"  {...register("exampleSex", { required: true })} >
               
                <option value={'Male'}>Male</option>
                <option value={'Female'}>Female</option>
                <option value={'Transgender'}>Transgender</option>
              </Select>
              </FormControl>
              <FormControl id="email" >
                <FormLabel>Mobile</FormLabel>
                {errors.exampleMobile && <span className="error">* Number should be 10 digit</span>}
                <Input onChange={(e)=>setMobile(e.target.value)} type="number" placeholder='Enter mobile'  {...register("exampleMobile", {minLength:10,maxLength:10 ,pattern:"+91"})}  />
              </FormControl>
              <FormControl id="firstName">
              <FormLabel>Govt issued ID</FormLabel>
              <Select onChange={(e)=>setIdtype(e.target.value)}>
                <option value={""}>ID type</option>
                <option value={'Aadhar'}>Aadhar</option>
                <option value={"PAN"}>PAN</option>
                
              </Select>
              </FormControl>
              </HStack>







              <FormControl id="password" >
              {errors.firstId && <span className="error">Input length should be {len} digit {idtype=="PAN"?"&"+" must include uppercase letter":"" } {idtype=="Aadhar"?"&"+" Input must be numerics only ":""}</span>}
             
                <InputGroup>
                
                  <Input onChange={(e)=>setId(e.target.value)} type={p} placeholder='Enter Govt ID' {...register("firstId",{minLength: len,maxLength:len,
         
         pattern:x
            
           
        })}
        
        
       
        
        
        />
                 
                </InputGroup>

                
              
 </FormControl>



<FormLabel>Contact Details</FormLabel>




<HStack>


              <FormControl id="firstName">
              <FormLabel>Guardian Details</FormLabel>
              <Select onChange={(e)=>setGuardilabel(e.target.value)}>
                <option>Enter label</option>
                <option value={'MR'}>MR</option>
                <option value={'Miss'}>Miss</option>
                <option value={'Him'}>Him</option>
                <option value={'her'}>Her</option>
              </Select>
              </FormControl>
               <FormControl id="password" >
               
                <InputGroup>
                  <Input onChange={(e)=>setGuardian(e.target.value)} type='string' placeholder='Enter Guardian Name' mt='33px'/>
                 
                </InputGroup>
</FormControl>
</HStack>




<HStack>
                <Box>
                
                  <FormControl id="firstName" >
                    <FormLabel>Email</FormLabel>
                    {errors.exampleEmail && <span className="error">* Invalid Email address</span>}
                    <Input onChange={(e)=>setEmail(e.target.value)} type="email" placeholder='Enter email' {...register("exampleEmail", {pattern:/[^@\s]+@[^@\s]+\.[^@\s]+/})} />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="lastName">
                    <FormLabel>Emergency Contact No</FormLabel>
                    {errors.exampleEmer && <span className="error">* Number should be 10 digit</span>}
                    <Input onChange={(e)=>setEmergency(e.target.value)} type="number" placeholder='Emergency Contact no' {...register("exampleEmer", {minLength:10,maxLength:10 ,pattern:"+91"})}  />
                  </FormControl>

                  

                </Box>
                
              </HStack>





              <FormLabel>Address Details</FormLabel>


              <HStack>
                  
              <FormControl id="email" >
                <FormLabel>Address</FormLabel>
                <Input onChange={(e)=>setAddress(e.target.value)} type="string" placeholder="Enter address"/>
              </FormControl>


              <FormControl id="email" >
                <FormLabel>State</FormLabel>
                <Input onChange={(e)=>setState(e.target.value)} type="string" placeholder='Enter State'/>
              </FormControl>


              <FormControl id="email" >
                <FormLabel>City</FormLabel>
                <Input onChange={(e)=>setCity(e.target.value)} type="string" placeholder='Enter City'/>
              </FormControl>
              
              </HStack>









              <HStack>
                  
                  <FormControl id="email" >
                    <FormLabel>Country</FormLabel>
                    <Input onChange={(e)=>setCountry(e.target.value)} type="string" placeholder="Enter Country"/>
                  </FormControl>
    
    
                 
    
                  <FormControl id="email" >
                    <FormLabel>Pincode</FormLabel>
                    <Input onChange={(e)=>setPin(e.target.value)} type="number" placeholder='Enter Pincode'/>
                  </FormControl>
                  
                  </HStack>


                  <FormLabel>Other Details</FormLabel>
    






                  <HStack>


                  <FormControl id="password" >
 <FormLabel>Occupation</FormLabel>
  <InputGroup>
    <Input onChange={(e)=>setOcc(e.target.value)} type='string' placeholder='Enter occupation' />
   
  </InputGroup>
</FormControl>





<FormControl id="firstName">
<FormLabel>Religion</FormLabel>
<Select onChange={(e)=>setReligion(e.target.value)}>
  <option>Enter Religion</option>
  <option value={'Hindu'}>Hindu </option>
  <option value={'Islam'}>Islam</option>
  <option value={'Christian'}>Christian</option>
  <option value={'Sikh'}> Sikh</option>

  <option value={'Buddhism'}>Buddhism</option>
  <option value='Jainism'>Jainism</option>
</Select>
</FormControl>
 

<FormControl id="firstName">
<FormLabel>Marital Status</FormLabel>
<Select onChange={(e)=>setMarry(e.target.value)}>
  <option>Enter Marital Status</option>
  <option value={'Married'}>Married</option>
  <option value={'Unmarried'}>Unmarried</option>
  <option value={'Single'}>Single</option>
  <option value={'Widowed'}>widowed</option>
<option value={'Divorced'}>divorced</option>
  
</Select>
</FormControl>




</HStack>







<HStack>



<FormControl id="firstName">
<FormLabel>Blood Group</FormLabel>
<Select onChange={(e)=>setBlood(e.target.value)}>
  <option>Enter blood group</option>
  <option value={'A-'}>A-</option>
  <option value={'A+'}>A+</option>
  <option value={'B-'}>B-</option>
  <option value={'B+'}>B+</option>
<option value={'AB-'}>AB-</option>
<option value={'AB+'}>AB+</option>
  <option value={'O+'}>O+</option>
<option value={'O-'}>O-</option>
</Select>
</FormControl>


<FormControl id="password" >
 <FormLabel>Nationality</FormLabel>
  <InputGroup>
    <Input onChange={(e)=>setNation(e.target.value)} type='string' placeholder='Enter Nationality' />
   
  </InputGroup>
</FormControl>



</HStack>




































              <Stack spacing={10} pt={2}>
                <Input
               // onClick={handleSubmit(onSubmit)}
                  type="submit"
                  loadingText="Submitting"
                  size="lg"
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}
                  />
                 
                
              </Stack>
             
            </Stack>
          </Box>
          </form>
        </Stack>
      </Flex>
      </Box>
    );
  }