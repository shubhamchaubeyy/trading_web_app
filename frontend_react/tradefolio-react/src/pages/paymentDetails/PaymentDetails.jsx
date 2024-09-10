import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import React from 'react'
import PaymentDetailsForm from './PaymentDetailsForm'

const PaymentDetails = () => {
  return (
    <div className='px-20 text-start'>
      <h1 className='text-3xl font-bold py-10'>Payment Details</h1>

      {true? <Card>
        <CardHeader>
          <CardTitle className="font-bold text-xl">HDFC BANK</CardTitle>
          <CardDescription>A/C No. *******1212</CardDescription>
        </CardHeader>
        <CardContent>
          <div className='flex  items-center'>
            <p className='w-32'>A/C Holder</p>
            <p className='text-gray-600'>:Shubham Chaubey</p>
          </div>

          <div className='flex  items-center'>
            <p className='w-32'>IFSC</p>
            <p className='text-gray-600'>:HDFC002121</p>
          </div>
        </CardContent>
      </Card> :    <Dialog>
        <DialogTrigger>
          <Button className="mt-5 ">Add payment details</Button>
        </DialogTrigger>

        <DialogContent>
          <DialogHeader>
            <DialogTitle>Payment Details</DialogTitle>
          </DialogHeader>
          <PaymentDetailsForm />
        </DialogContent>
      </Dialog>}
     

   
    </div>
  )
}

export default PaymentDetails
