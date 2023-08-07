"use client";
import { useCallback, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "../Avatar";
import Menuitem from "./Menuitem";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import useLoginModal from "@/app/hooks/useLoginModal";
import { signOut } from "next-auth/react";
import { SafeUser } from "@/app/types";


interface UserMenuProps {
  currentUser?: SafeUser | null 
}

const Usermenu :React.FC<UserMenuProps> = ({
   currentUser
}) => {
  const registerModal =  useRegisterModal()
  const loginModal =  useLoginModal()
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleOpen = useCallback(() => {
       setIsOpen((val) => !val)
  }, [])
  return (
    <>
      <div className="relative">
        <div className=" flex flex-row items-center gap-3 ">
          <div
            onClick={() => {}}
            className="hidden md:block text-sm  text-center  font-smeibold py-3 px-4 rounded-full hover:bg-neutral-100 trnasition cursor-pointer"
          >
            Airbnb Your Home
          </div>
          <div
            onClick={toggleOpen}
            className="p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
          >
            <AiOutlineMenu />
            <div className="hidden md:block">
              <Avatar />
            </div>
          </div>
        </div>
        {isOpen && (
            <div className="
                absolute
                rounded-xl
                shadow-md
                w-[40vw]
                md:w-3/4
                bg-white
                oveflow-hidden
                right-0
                top-12
            ">
              <div className="flex flex-col cursor-pointer">
                  {currentUser ? (
                      <>
                       <Menuitem onClick={() => {}} label="My Trips"/>
                       <Menuitem onClick={() => {}} label="My favorites."/>
                       <Menuitem onClick={() => {}} label="My reservations."/>
                       <Menuitem onClick={() => {}} label="My properties."/>
                       <Menuitem onClick={() => {}} label="Airbnb my home"/>
                       <hr />
                       <Menuitem onClick={() => signOut()} label="Logout"/>
                      </>
                  ): (
                  <>
                  <Menuitem onClick={loginModal.onOpen} label="Login"/>
                  <Menuitem onClick={registerModal.onOpen} label="Sign up"/>
                  </>
                  )}
              </div>
            </div>
        )}
      </div>
    </>
  );
};

export default Usermenu;
