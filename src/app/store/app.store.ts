 // This file to get all reducer 
import { userReducer } from "./modules/user.reducer";

// modules alll reducers
let modules = {
  user: userReducer
};

// export modules to inject in StoreModule in module app
export default modules;