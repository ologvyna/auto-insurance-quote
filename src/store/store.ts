'use client';

import { configureStore } from "@reduxjs/toolkit";
import quoteReducer from "@/store/quote/quote.slice";
import stepperReducer from "@/store/stepper/stepper.slice";

export const store = configureStore({
    reducer: {
        quote: quoteReducer,
        stepper: stepperReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
