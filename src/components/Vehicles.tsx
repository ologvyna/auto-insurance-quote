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
import { MdDirectionsCar } from 'react-icons/md'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerContent,
} from '@chakra-ui/react'
import {addVehicle, editVehicle} from "@/store/quote/quote.slice";
import Vehicle from "@/types/Vehicle";

const emptyVehicle: Vehicle = {
    make: '',
    model: '',
    year: '',
    value: undefined
};

export default function Vehicles() {
    const vehicles = useSelector((state: RootState) => state.quote.vehicles);
    const dispatch = useDispatch();
    //TODO create editor component
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [vehicle, setVehicleValue] = React.useState(emptyVehicle);
    const [index, setIndex] = React.useState(-1);

    function fillEditor(index: number, vehicle: Vehicle) {
        setVehicleValue(vehicle);
        setIndex(index);
    }
    function clearEditor() {
        fillEditor(-1, emptyVehicle);
    }

    return (
        <>
            <Heading>Tell us about your vehicle(s)</Heading>
            {vehicles.map((v, index) => (
                <Box
                    borderRadius="8px"
                    boxShadow='md'
                    mb="8px"
                    color="white"
                    backgroundColor='#23476B'
                    key={index} onClick={() => { fillEditor(index, v); onOpen(); } }>
                    <HStack spacing='24px' p="16px">
                        <Box borderRadius='full' border="1px" borderColor="white">
                            <Icon as={MdDirectionsCar} boxSize={6} m="8px" />
                        </Box>
                        <Box>
                            <p>{v.year} {v.make} {v.model}</p>
                            <p style={{ opacity: '0.5' }}>${v.value}</p>
                        </Box>
                    </HStack>
                </Box>
            ))}
            <Box display="flex" justifyContent="center" mt="40px" mb="20px">
                <Button
                    colorScheme='teal'
                    type='submit'
                    onClick={onOpen}
                    variant={vehicles.length > 0 ? 'ghost' : 'solid'}
                >
                    + Add vehicle
                </Button>
            </Box>
            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={() => { onClose(); clearEditor(); }}
            >
                <DrawerContent>
                    <DrawerHeader>Add vehicle</DrawerHeader>
                    <Divider />

                    <DrawerBody>
                        <FormControl>
                            <FormLabel>Make</FormLabel>
                            <Input value={vehicle.make} onChange={(event) => {
                                setVehicleValue({...vehicle, make: event.target.value })
                            }} />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Model</FormLabel>
                            <Input value={vehicle.model} onChange={(event) => {
                                setVehicleValue({...vehicle, model: event.target.value })
                            }} />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Year</FormLabel>
                            <Input value={vehicle.year} onChange={(event) => {
                                setVehicleValue({...vehicle, year: event.target.value })
                            }} />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Value</FormLabel>
                            <Input value={vehicle.value} type="number" onChange={(event) => {
                                setVehicleValue({...vehicle, value: +event.target.value })
                            }} />
                        </FormControl>
                    </DrawerBody>

                    <Divider />
                    <DrawerFooter>
                        <Button variant='outline' mr={3} onClick={() => { onClose(); clearEditor(); }}>
                            Cancel
                        </Button>
                        <Button colorScheme='teal' isDisabled={!vehicle.make || !vehicle.model || !vehicle.year || !vehicle.value} onClick={() => {
                            onClose();
                            if (index === -1) dispatch(addVehicle(vehicle));
                            else dispatch(editVehicle({index, vehicle}));
                            clearEditor();
                        }}>
                            Confirm
                        </Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
            {vehicles.length > 0 &&
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
