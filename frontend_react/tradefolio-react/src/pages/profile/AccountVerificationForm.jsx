import React, { useState } from 'react'
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSeparator,
    InputOTPSlot,
  } from "@/components/ui/input-otp"
import { Button } from '@/components/ui/button';
  

const AccountVerificationForm = () => {
    const [value ,setValue] = useState("");

    const handleSubmit = () =>{
        console.log("submit")
    }
    return (
        <div className=' flex  flex-col justify-center'>
            <div className=' mt-10 w-full flex justify-normal gap-10 '>
                <p>Email:</p>
                <p>shbham2324@gmial.com</p>
            </div>
            <div className=' mt-10'>

                <Dialog>
                    <DialogTrigger className=' w-full'>
                       
                        <Button className=' w-full'>Send OTP
                            </Button> </DialogTrigger>
                       
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Enter OTP</DialogTitle>
                        </DialogHeader>

                        <div className=' py-5 flex gap-10 justify-center items-center'>
                            <InputOTP 
                            value ={value}
                            onChange={ (value)=>setValue(value)}
                            maxLength={6}>
                                <InputOTPGroup className=' bg-gray-500'>
                                    <InputOTPSlot index={0} />
                                    <InputOTPSlot index={1} />
                                    <InputOTPSlot index={2} />
                                </InputOTPGroup>
                                {/* <InputOTPSeparator /> */}
                                <InputOTPGroup>
                                    <InputOTPSlot index={3} />
                                    <InputOTPSlot index={4} />
                                    <InputOTPSlot index={5} />
                                </InputOTPGroup>
                            </InputOTP>
                            <DialogClose>
                                <Button onClick={handleSubmit} className=" w-[10rem]">
                                        Submit
                                </Button>
                            </DialogClose>
                        </div>
                    </DialogContent>
                </Dialog>
            </div>

            </div>
     
    )
}

export default AccountVerificationForm
