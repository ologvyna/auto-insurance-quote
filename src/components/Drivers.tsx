import {
    Box,
    Button,
    Divider,
    FormControl,
    FormLabel,
    Heading, HStack, Icon,
    Input,
    useDisclosure
} from "@chakra-ui/react";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import { increment } from "@/store/stepper/stepper.slice";
import {RootState} from "@/store/store";
import { MdPerson } from 'react-icons/md'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerContent,
} from '@chakra-ui/react'
import {addDriver, editDriver} from "@/store/quote/quote.slice";
import Driver from "@/types/Driver";

const emptyDriver: Driver = {
    firstName: '',
    lastName: '',
    licenseNumber: ''
};

export default function Drivers() {
    const drivers = useSelector((state: RootState) => state.quote.drivers);
    const dispatch = useDispatch();
    //TODO create editor component
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [driver, setVehicleValue] = React.useState(emptyDriver);
    const [index, setIndex] = React.useState(-1);

    function fillEditor(index: number, vehicle: Driver) {
        setVehicleValue(vehicle);
        setIndex(index);
    }
    function clearEditor() {
        fillEditor(-1, emptyDriver);
    }

    return (
        <>
            <Heading>Tell us about the driver(s)</Heading>
            {drivers.map((d, index) => (
                <Box
                    borderRadius="8px"
                    boxShadow='md'
                    mb="8px"
                    color="white"
                    backgroundColor='#23476B'
                    key={index} onClick={() => { fillEditor(index, d); onOpen(); } }>
                    <HStack spacing='24px' p="16px">
                        <Box borderRadius='full' border="1px" borderColor="white">
                            <Icon as={MdPerson} boxSize={6} m="8px" />
                        </Box>
                        <Box>
                            <p>{d.firstName} {d.lastName}</p>
                            <p style={{ opacity: '0.5' }}>{d.licenseNumber}</p>
                        </Box>
                    </HStack>
                </Box>
            ))}
            <Box display="flex" justifyContent="center" mt="40px" mb="20px">
                <Button
                    colorScheme='teal'
                    type='submit'
                    onClick={onOpen}
                    variant={drivers.length > 0 ? 'ghost' : 'solid'}
                >
                    + Add driver
                </Button>
            </Box>
            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
            >
                <DrawerContent>
                    <DrawerHeader>Add driver</DrawerHeader>
                    <Divider />

                    <DrawerBody>
                        <FormControl>
                            <FormLabel>First Name</FormLabel>
                            <Input value={driver.firstName} onChange={(event) => {
                                setVehicleValue({...driver, firstName: event.target.value })
                            }} />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Last Name</FormLabel>
                            <Input value={driver.lastName} onChange={(event) => {
                                setVehicleValue({...driver, lastName: event.target.value })
                            }} />
                        </FormControl>
                        <FormControl>
                            <FormLabel>License Number</FormLabel>
                            <Input value={driver.licenseNumber} onChange={(event) => {
                                setVehicleValue({...driver, licenseNumber: event.target.value })
                            }} />
                        </FormControl>
                    </DrawerBody>

                    <Divider />
                    <DrawerFooter>
                        <Button variant='outline' mr={3} onClick={onClose}>
                            Cancel
                        </Button>
                        <Button colorScheme='teal' isDisabled={!driver.firstName || !driver.lastName || !driver.licenseNumber} onClick={() => {
                            onClose();
                            if (index === -1) dispatch(addDriver(driver));
                            else dispatch(editDriver({index, driver}));
                            clearEditor();
                        }}>
                            Confirm
                        </Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
            {drivers.length > 0 &&
                <Box display="flex" justifyContent="end" mt="60px" mb="20px">
                    <Button

                        colorScheme='teal'
                        type='submit'
                        onClick={() => { dispatch(increment()) }}
                    >
                        Continue
                    </Button>
                </Box>
            }
        </>
    );
}
