import { combineReducers } from "@reduxjs/toolkit";

import main from "@renderer/modules/main";
import servers from "@renderer/modules/servers";

export default combineReducers({
    main,
    servers,
});
