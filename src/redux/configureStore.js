import { configureStore } from "@reduxjs/toolkit";
import highLightsReducer from "./slices/highLights";
import faqReducer from "./slices/faq"
import aboutContentReducer from "./slices/aboutContent"

export const store = configureStore({
    reducer: {
        highLightsReducer,
        faqReducer,
        aboutContentReducer
    }
});