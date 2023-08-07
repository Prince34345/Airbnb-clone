"use client";

import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import { useState } from "react";
import Modal from "./Modal";
import Heading from "../Heading";
import Input from "../Inputs/Input";
import {toast} from "react-hot-toast";
import Button from "../Button";
import {signIn} from "next-auth/react"
import useLoginModal from "@/app/hooks/useLoginModal";
import { useRouter } from "next/navigation";

const LoginModal = () => {
  const router = useRouter()
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal()
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    signIn('credentials',
    {
        ...data,
        redirect: false
    }).then((callback) => {
      setIsLoading(false)
      if (callback?.ok) {
        toast.success('Logged In');
        router.refresh();
        loginModal.onClose();
      }else {
        toast.error(callback?.error || 'Authentication is Wrong.')
      }
    })
  };
  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading title="Welcome Back! " subtitle="Login to existing account" />
      <Input
        id="email"
        label="Email"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="password"
        label="password"
        type="password"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
    </div>
  );
  const footerContent = (
     <div className="flex flex-col gap-4 mt-3">
        <hr />
        <Button 
           outline
           label="Continue With Google"
           icon={FcGoogle}
           onClick={() =>{}}
        />
         <Button 
           outline
           label="Continue With Github"
           icon={AiFillGithub}
           onClick={() =>{}}
        />
        <div 
          className="
             text-neutral-500
             text-center
             mt-4
             font-light
          ">
        <div className=" justify-center flex flex-row items-center gap-2">
            <div>
                If You Haven't any account?
            </div>
            <div onClick={registerModal.onClose} className="text-neutral-600 font-bold cursor-pointer hover:underline">
                Sign In
            </div>
        </div>
        </div>
     </div>
  )
  return (
    <>
      <Modal
        disabled={isLoading}
        isOpen={loginModal.isOpen}
        title="Login"
        actionLabel="Continue"
        onClose={loginModal.onClose}
        onSubmit={handleSubmit(onSubmit)}
        body={bodyContent}
        footer={footerContent}
      />
    </>
  );
};

export default LoginModal;