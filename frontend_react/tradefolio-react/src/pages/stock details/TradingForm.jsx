import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { DotIcon } from 'lucide-react'
import React, { useState } from 'react'

const TradingForm = () => {
     const [orderType ,setOrderType] = useState("BUY")
    const handleChange = () => {

    }
    return (
        <div className='space-y-10 p-5'>

            <div>
                <div className=' flex gap-4 items-center justify-between'>
                    <Input
                        className=" py-7 focus:outline-none"
                        placeholder="Enter Amount..."
                        onChange={handleChange}
                        type="number"
                        name="amount" />

                    <div>
                        <p className=' border text-2xl flex justify-center
                 items-center w-36 h-14 rounded-md'>4223</p>
                    </div>
                </div>
                {false && <h1 className=' text-red-600 text-center pt-4'>Insufficent wallet balance to buy</h1>}
            </div>
            <div className=' flex gap-5 items-center'>

                <div>
                    <Avatar>
                        <AvatarImage src={"https://icon2.cleanpng.com/20240304/rkz/transparent-blue-circle-ether-cryptocurrency-logo-in-blue-1710851612641.webp"} />

                    </Avatar>
                </div>

                <div>

                    <div className='flex items-center gap-2'>
                        <p>ETH</p>
                        <DotIcon className=' text-gray-400' />
                        <p className='text-gray-400'>Ethereum</p>
                    </div>
                    <div className='flex items-end gap-2'>
                        <p className=' text-xl font-bold'>$523</p>
                        <p className=' text-red-600'>

                            <span>-1313123.332</span>
                            <span>(-0.323%)</span>

                        </p>
                    </div>
                </div>

            </div>

            <div className=' flex items-center justify-between'>
                <p>Order Type</p>
                <p>Market Order</p>
            </div>

            <div className=' flex items-center justify-between'>
                <p>{ orderType=="BUY"?"Available Cash":"Available Quantity"}</p>
                <p>{orderType=="BUY"?9000:23}</p>
            </div>

            <div>
                <Button className={` w-full py-6 ${orderType=="SELL"?" bg-red-600 text-white":" bg-green-600"}`}>
                    {orderType}
                </Button>
                <Button variant="link"
                className=" w-full mt-5 text-xl"
                onClick={()=>setOrderType(orderType=="BUY"?"SELL":"BUY")}>
                    {orderType=="BUY"?"Or Sell":"Or Buy"}
                </Button>
            </div>
        </div>
    )
}

export default TradingForm
