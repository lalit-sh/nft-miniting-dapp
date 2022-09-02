import store from "./redux/store";
import { Provider } from "react-redux";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';


const Root = () => {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    )
}

export default Root;