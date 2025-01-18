import { combineReducers } from "@reduxjs/toolkit";

import main from "modules/main";
import servers from "modules/servers";

export default combineReducers({
    main,
    servers,
});
