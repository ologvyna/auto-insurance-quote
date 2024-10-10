import { FormProvider, useForm } from "react-hook-form";
import {Button, FormControl, FormLabel, Input, Heading, Box} from "@chakra-ui/react";
import React from "react";
import { increment } from "@/store/stepper/stepper.slice";
import { setOwnerInfo } from "@/store/quote/quote.slice";
import {useDispatch} from "react-redux";

export default function OwnerInfo() {
    const methods = useForm();
    const [name, setNameValue] = React.useState('');
    const [birthDate, setBirthDateValue] = React.useState('');
    const dispatch = useDispatch();

    return (
        <FormProvider {...methods}>
            <Heading>Tell us about yourself</Heading>
            <FormControl>
                <FormLabel>Name</FormLabel>
                <Input value={name} onChange={(event) => setNameValue(event.target.value)} size="sm" />
            </FormControl>
            <FormControl>
                <FormLabel>Date of Birth</FormLabel>
                <Input value={birthDate} onChange={(event) => setBirthDateValue(event.target.value)}  type='date' />
            </FormControl>
            <Box display="flex" justifyContent="end">
                <Button
                    mt="70px"
                    mb="20px"
                    colorScheme='teal'
                    type='submit'
                    isDisabled={!name || !birthDate}
                    onClick={() => {
                        dispatch(setOwnerInfo({ name, birthDate }));
                        dispatch(increment());
                    }}
                >
                    Continue
                </Button>
            </Box>
        </FormProvider>
    );
}
