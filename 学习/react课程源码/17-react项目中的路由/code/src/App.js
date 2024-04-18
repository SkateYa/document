import logo from './logo.svg';
import './App.css';
import originArr from "./router/routesArr"
import { createRoute } from './router/createRoute';
import { Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
function App () {
    let userRoute = useSelector((state) => {
        return state.userInfo.userRoute
    })
    console.log(createRoute(userRoute.concat(originArr)))
    return (
        <div className="App">
            <Routes>
                {
                    createRoute(userRoute.concat(originArr))
                }
            </Routes>
        </div>
    );
}

export default App;
