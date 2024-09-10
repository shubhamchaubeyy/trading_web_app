import { Button } from '@/components/ui/button';
import { DialogClose } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { DotFilledIcon } from '@radix-ui/react-icons';
import React, { useState } from 'react'

const TopupForm = () => {
    const [amount, setAmount] = useState('')

    const [paymentMethod, setPaymentMethod] = useState("RAZORPAY");

    const handlePaymentMethodChange = (value) => {
        setPaymentMethod(value)
    }
    const handleChange = (e) => {
        setAmount(e.target.value)
    }
    const handleSubmit = () => {
        console.log(amount, paymentMethod)
    }
    return (
        <div className=' pt-10 space-y-5'>
            <div>
                <h1 className=' pb-1'>Enter Amount</h1>
                <Input
                    onChange={handleChange}
                    value={amount}
                    className="py-7 text-lg"
                    placeholder="$999" />
            </div>
            <div>
                <h1 className='pb-1'>Select payment method</h1>
            </div>
            <div>

                <RadioGroup defaultValue="RAZORPAY" className=" flex justify-between"
                    onValueChange={(value) => handlePaymentMethodChange(value)}>

                    <div className=' flex items-center space-x-2 border p-3 px-5 rounded-md'>
                        <RadioGroupItem
                            icon={DotFilledIcon}
                            className=" h-9 w-9"
                            value="RAZORPAY" id="r1" />

                        <Label htmlFor="r1">
                            <div className='bg-white rounded-md px-5 py-2 w-32'>
                                <img src="https://banner2.cleanpng.com/20180531/uzi/avo3tecan.webp" alt="" />
                            </div>
                        </Label>
                    </div>

                    <div className=' flex items-center space-x-2 border p-3 px-5 rounded-md'>
                        <RadioGroupItem
                            icon={DotFilledIcon}
                            className=" h-9 w-9"
                            value="STRIPE" id="r2" />

                        <Label htmlFor="r2">
                            <div className='bg-white rounded-md px-5 py-2 w-32'>
                                <img src="https://banner2.cleanpng.com/20180705/csj/kisspng-stripe-logo-e-commerce-payment-system-business-5b3ee3b1de16d3.9737638415308481779097.jpg" alt="" />
                            </div>
                        </Label>
                    </div>

                </RadioGroup>
            </div>
            <DialogClose className='w-full'>

                <Button className=" w-full py-7 text-xl "
                    onClick={handleSubmit}>
                    Submit
                </Button>
            </DialogClose>
        </div>

    )
}

export default TopupForm
