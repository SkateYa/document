import { Route } from "react-router-dom"
import routeMap from "./routeMap"
export function createRoute (routesArr) {
    return routesArr.map((item) => {
        if (item.children && item.children.length > 0) {
            return <Route path={item.path} Component={routeMap[item.component]} key={item.path}>
                {createRoute(item.children)}
            </Route>
        } else {
            return <Route key={item.path} path={item.path} Component={routeMap[item.component]}></Route>
        }

    })
}