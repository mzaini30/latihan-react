import { BrowserRouter, useRoutes } from "react-router-dom";
import { routes } from "./routes";

function Routernya(){
  const routertu = useRoutes(routes)
  return routertu
}

export default function App(){
  return <BrowserRouter>
  <Routernya></Routernya>
</BrowserRouter>
}