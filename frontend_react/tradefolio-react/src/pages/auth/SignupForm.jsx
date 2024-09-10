import React from 'react'

import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { register } from '@/state/Auth/Action'

const SignupForm = () => {

    const dispatch =useDispatch();
    const form = useForm({
        resolver: "",
        defaultValues: {
            fullName: "",
            email: "",
            password: "",
            
        },
    });
    const onSubmit = (data) => {
        console.log(data)
        dispatch(register(data));
    }
    return (
        <div >
        <h1 className='text-xl font-bold text-center pb-3'>Create new account</h1>

            <Form {...form}>

                <form onSubmit={form.handleSubmit(onSubmit)} className=' space-y-6'>

                    <FormField control={form.control}
                        name="fullName"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input className=' border w-full border-gray-700 p-5' placeholder="Trade Folio" {...field} />
                                </FormControl>

                            </FormItem>
                        )} />

                    <FormField control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input className=' border w-full border-gray-700 p-5' placeholder="abc@xyz.com" {...field} />
                                </FormControl>
                            </FormItem>
                        )} />

                    <FormField control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input className=' border w-full border-gray-700 p-5' placeholder="your password" {...field} />
                                </FormControl>

                            </FormItem>
                        )} />

            

                        <Button type="submit" className=" w-full py-5 text-xl">
                            Submit
                        </Button>

                </form>
            </Form>
        </div>
    )
}

export default SignupForm

