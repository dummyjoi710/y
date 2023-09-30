import { configureStore } from "@reduxjs/toolkit";
import menureducer from "./menuslice";
import authreducer from "./authslice";
import lmreducer from "./loginmodalslice";

const store = configureStore({
    reducer:{
        menu:menureducer,
        auth:authreducer,
        lm:lmreducer,
    }
});

export default store;