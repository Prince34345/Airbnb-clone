'use client';
import Container from "../Container";
import Categories from "./Categories";
import Logo from "./Logo";
import Search from "./Search";
import Usermenu from "./Usermenu";
import { SafeUser } from "@/app/types";



interface Navbarprops{
     currentUser?: SafeUser | null
}
const Navbar: React.FC<Navbarprops> = ({
    currentUser
}) => {
    
    return ( <>
        <div className="fixed w-full z-10 shadow-sm bg-white">
            <div
               className="
                   py-4
                   border-b-[1px]
               "
            >
             <Container>
                 <div className="
                    flex
                    flex-row
                    items-center
                    justify-between 
                    gap-3
                    md:gap-0 
                 ">
                    <Logo/>
                    <Search/>
                    <Usermenu currentUser={currentUser}/>
                 </div>
             </Container>
            </div>
            <Categories/>
        </div>
    </> );
}
 
export default Navbar;