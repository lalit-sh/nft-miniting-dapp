import { applyMiddleware, compose, createStore, combineReducers } from "redux";
import thunk from "redux-thunk";
import blockchainReducer from "./blockchain/blockchain.reducer";
import dataReducer from "./data/data.reducer";
import flashMessageReducer from "./flashMessage/flashMessage.reducer";
import { logger } from "redux-logger";

const rootReducer = combineReducers({
	blockchain: blockchainReducer,
	data: dataReducer,
	flashMessage: flashMessageReducer
});

const middleware = [thunk];
if(process.env.NODE_ENV.toLowerCase() === "development"){
	middleware.push(logger);
}
const composeEnhancers = compose(applyMiddleware(...middleware));

const configureStore = () => {
	return createStore(rootReducer, composeEnhancers);
};

const store = configureStore();

export default store;
