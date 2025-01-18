import * as actions from "./redux/main.actions";
import * as selectors from "./redux/main.selectors";

export { actions, selectors };
export { default as App } from "./App";
export { default as getElectronWindow } from "./electron-window";

import reducer from "./redux/main.reducer";
export default reducer;
