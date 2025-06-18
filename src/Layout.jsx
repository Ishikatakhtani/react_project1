import { Outlet } from "react-router-dom";
import Header from "./Component/Header";

const Layout=()=>{
    return(
        <>
       <Header>
            <Outlet></Outlet>
     </Header>
        </>
    )
}
export default Layout;