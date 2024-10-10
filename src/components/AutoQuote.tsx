import {useSelector} from "react-redux";
import {RootState} from "@/store/store";
import {Box, Divider, Heading, HStack, Icon} from "@chakra-ui/react";
import {MdDirectionsCar, MdPerson} from "react-icons/md";
import React from "react";

export default function AutoQuote() {
    const drivers = useSelector((state: RootState) => state.quote.drivers);
    const vehicles = useSelector((state: RootState) => state.quote.vehicles);
    return (
        <>
            <Box
                borderRadius="8px"
                boxShadow='md'
                mb="8px"
                mt="30px"
                color="white"
                backgroundColor='#152C47'>
                <Box p="16px">
                    <Box fontSize="20px" fontWeight="500" mb="16px">Auto Quote</Box>
                    <Box fontSize="32px" fontWeight="700">$150</Box>
                    <Box fontSize="16px" fontWeight="500" style={{opacity: 0.6}}>per month</Box>
                </Box>
            </Box>
            <Heading fontSize="14px" fontWeight="500" mb="16px">Vehicles</Heading>
            <Box pl="70px" pr="70px">
                <Divider mb="24px"/>
            </Box>
            {vehicles.map((v, index) => (
                <Box
                    borderRadius="8px"
                    boxShadow='md'
                    mb="8px"
                    color="white"
                    backgroundColor='#406E8F'
                    key={index}>
                    <HStack spacing='24px' p="16px">
                        <Box borderRadius='full' border="1px" borderColor="white">
                            <Icon as={MdDirectionsCar} boxSize={6} m="8px" />
                        </Box>
                        <Box>
                            <p>{v.year} {v.make} {v.model}</p>
                        </Box>
                    </HStack>
                </Box>
            ))}
            <Heading fontSize="14px" fontWeight="500" mb="16px">Drivers</Heading>
            <Box pl="70px" pr="70px">
                <Divider mb="24px"/>
            </Box>
            {drivers.map((d, index) => (
                <Box
                    borderRadius="8px"
                    boxShadow='md'
                    mb="8px"
                    color="white"
                    backgroundColor='#406E8F'
                    key={index}>
                    <HStack spacing='24px' p="16px">
                        <Box borderRadius='full' border="1px" borderColor="white">
                            <Icon as={MdPerson} boxSize={6} m="8px" />
                        </Box>
                        <Box>
                            <p>{d.firstName} {d.lastName}</p>
                        </Box>
                    </HStack>
                </Box>
            ))}
        </>
    );
}
