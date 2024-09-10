import { Button } from '@/components/ui/button'
import { DialogClose } from '@/components/ui/dialog'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import React from 'react'
import { useForm } from 'react-hook-form'

const PaymentDetailsForm = () => {

    const form = useForm({
        resolver: "",
        defaultValues: {
            accountHolderName: "",
            ifsc: "",
            accountNumber: "",
            bankName: ""
        }
    })
    const onSubmit = (data) => {
        console.log(data)
    }
    return (
        <div >
            <Form {...form}>

                <form onSubmit={form.handleSubmit(onSubmit)} className=' space-y-6'>

                    <FormField control={form.control}
                        name="accountHolderName"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Accout Holder Name</FormLabel>
                                <FormControl>
                                    <Input className=' border w-full border-gray-700 p-5' placeholder="Trade Folio" {...field} />
                                </FormControl>

                            </FormItem>
                        )} />

                    <FormField control={form.control}
                        name="ifsc"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>IFSC Code</FormLabel>
                                <FormControl>
                                    <Input className=' border w-full border-gray-700 p-5' placeholder="HDFC000000" {...field} />
                                </FormControl>
                            </FormItem>
                        )} />

                    <FormField control={form.control}
                        name="accountNumber"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Accout Number</FormLabel>
                                <FormControl>
                                    <Input className=' border w-full border-gray-700 p-5' placeholder="**********3456" {...field} />
                                </FormControl>

                            </FormItem>
                        )} />

                    <FormField control={form.control}
                        name="accountNumber"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Confirm Accout Number</FormLabel>
                                <FormControl>
                                    <Input className=' border w-full border-gray-700 p-5' placeholder="**********3456" {...field} />
                                </FormControl>

                            </FormItem>
                        )} />

                    <FormField control={form.control}
                        name="bankName"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Bank Name</FormLabel>
                                <FormControl>
                                    <Input className=' border w-full border-gray-700 p-5' placeholder="HDFC Bank" {...field} />
                                </FormControl>

                            </FormItem>
                        )} />

                    <DialogClose className=' w-full'>
                        <Button type="submit" className=" w-full py-5 text-xl">
                            Submit
                        </Button>
                    </DialogClose>

                </form>
            </Form>
        </div>
    )
}

export default PaymentDetailsForm
