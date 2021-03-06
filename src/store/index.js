import { createStore, applyMiddleware,compose  } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducers";

function saveState (state){
    try{
        const serializedState=JSON.stringify(state)
        localStorage.setItem('state',serializedState)
    }catch(e){
        console.log(e)
    }
}
export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('state');
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
};

const persistedState = loadState();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer,persistedState,composeEnhancers(applyMiddleware(thunk)));

store.subscribe(()=>saveState(store.getState()))

export default store;
