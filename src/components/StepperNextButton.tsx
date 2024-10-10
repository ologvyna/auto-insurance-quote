import {Box, Button} from "@chakra-ui/react";
import {setOwnerInfo} from "@/store/quote/quote.slice";
import {increment} from "@/store/stepper/stepper.slice";
import React from "react";
import {useDispatch} from "react-redux";

export default function StepperNextButton(props: { isDisabled: boolean }) {
    const dispatch = useDispatch();
    return (
        <Box display="flex" justifyContent="end">
            <Button
                mt="70px"
                mb="20px"
                colorScheme='teal'
                type='submit'
                isDisabled={!props.isDisabled}
                onClick={() => {
                    dispatch(setOwnerInfo({ name, birthDate }));
                    dispatch(increment());
                }}
            >
                Continue
            </Button>
        </Box>
    )
}