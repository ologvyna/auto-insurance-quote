import Owner from "@/types/Owner";
import Vehicle from "@/types/Vehicle";
import Driver from "@/types/Driver";
import DriversRecord from "@/types/DriversRecord";
import {createSlice} from "@reduxjs/toolkit";

export interface QuoteDetails {
    owner?: Owner;
    vehicles: Vehicle[];
    drivers: Driver[];
    driversRecord?: DriversRecord;
}

const initialState: QuoteDetails = {
    vehicles: [],
    drivers: []
};

export const quoteSlice = createSlice({
    name: 'auto quote info',
    initialState,
    reducers: {
        setOwnerInfo: (state, action) => { state.owner = action.payload },
        addVehicle: (state, action) => { state.vehicles.push(action.payload) },
        editVehicle: (state, action) => { state.vehicles[action.payload.index] = action.payload.vehicle },
        addDriver: (state, action) => { state.drivers.push(action.payload) },
        editDriver: (state, action) => { state.drivers[action.payload.index] = action.payload.driver },
        setDriversRecord: (state, action) => { state.driversRecord = action.payload }
    }
});

export const { setOwnerInfo, addVehicle, editVehicle, addDriver, editDriver, setDriversRecord } = quoteSlice.actions;
export default quoteSlice.reducer;