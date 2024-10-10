import {Box, Button, FormControl, FormLabel, Select} from "@chakra-ui/react";
import React from "react";
import {useDispatch} from "react-redux";
import DriversRecord from "@/types/DriversRecord";
import {FormProvider} from "react-hook-form";
import {increment} from "@/store/stepper/stepper.slice";
import {setDriversRecord} from "@/store/quote/quote.slice";

const emptyDriversRecord: DriversRecord = {
    accidentsInLast6Years: undefined,
    convictionInLast6Years: undefined,
    licenseSuspensions: undefined
};

export default function DriversRecord() {
    const dispatch = useDispatch();
    const [drRecord, setDrRecord] = React.useState(emptyDriversRecord);
    const convertSelectedToBool = (value) => value === '' ? undefined : value === 'yes';
    return (
        <FormProvider>
            <FormControl>
                <FormLabel>Has any driver had any at-fault accidents in the past 6 years?</FormLabel>
                <Select placeholder='Select' onChange={(event) => {
                    setDrRecord({...drRecord, accidentsInLast6Years: convertSelectedToBool(event.target.value)})
                }}>
                    <option value='yes'>Yes</option>
                    <option value='no'>No</option>
                </Select>
            </FormControl>
            <FormControl>
                <FormLabel>Has any driver had any minor or major convictions in the past 6 years?</FormLabel>
                <Select placeholder='Select' onChange={(event) => {
                    setDrRecord({...drRecord, convictionInLast6Years: convertSelectedToBool(event.target.value)})
                }}>
                    <option value='yes'>Yes</option>
                    <option value='no'>No</option>
                </Select>
            </FormControl>
            <FormControl>
                <FormLabel>Has any driver had any license suspensions/revocations?</FormLabel>
                <Select placeholder='Select' onChange={(event) => {
                    setDrRecord({...drRecord, licenseSuspensions: convertSelectedToBool(event.target.value)})
                }}>
                    <option value='yes'>Yes</option>
                    <option value='no'>No</option>
                </Select>
            </FormControl>
            <Box display="flex" justifyContent="end">
                <Button
                    mt="70px"
                    mb="20px"
                    colorScheme='teal'
                    type='submit'
                    isDisabled={drRecord.accidentsInLast6Years === undefined || drRecord.convictionInLast6Years === undefined || drRecord.licenseSuspensions === undefined}
                    onClick={() => {
                        dispatch(setDriversRecord(drRecord));
                        dispatch(increment());
                    }}
                >
                    Continue
                </Button>
            </Box>
        </FormProvider>
    );
}
