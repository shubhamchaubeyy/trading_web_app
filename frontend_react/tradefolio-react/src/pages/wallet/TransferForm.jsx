import { Button } from '@/components/ui/button'
import { DialogClose } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import React, { useState } from 'react'

const TransferForm = () => {
    const [formData ,setFormData] = useState({ amount :'',
        walletId:'' ,purpose:'',
    })

    const handleChange =(e)=>{
     setFormData({...formData,[e.target.name]: e.target.value})
    }

    const handelSubmit =()=>{
        console.log(formData)
    }
  return (
    <div className='pt-10 space-y-5'>
     
      <div>
        <h1 className=' pb-1'>Enter Amount</h1>
        <Input 
        name="amount"
        onChange={handleChange} 
        value={formData.amount} 
        className='py-7' placeholder="$999"/>
      </div>
      <div>
        <h1 className=' pb-1'>Wallet Id</h1>
        <Input 
        name="walletId"
        onChange={handleChange} 
        value={formData.walletId} 
        className='py-7' placeholder="#1232uu"/>
      </div>
      <div>
        <h1 className=' pb-1'>Purpose</h1>
        <Input 
        name="purpose"
        onChange={handleChange} 
        value={formData.purpose} 
        className='py-7' placeholder="gifts"/>
      </div>

    <DialogClose className='w-full'>
        <Button className=' w-full py-7 text-xl' onClick={handelSubmit}>Submit</Button>
    </DialogClose>
    </div>
  )
}

export default TransferForm
