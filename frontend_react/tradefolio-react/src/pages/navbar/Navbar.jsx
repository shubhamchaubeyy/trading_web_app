import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from '@/components/ui/button'
import { DragHandleHorizontalIcon, MagnifyingGlassIcon } from '@radix-ui/react-icons'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import Sidebar from './Sidebar'
import { useSelector } from 'react-redux'
import { store } from '@/state/Store'

function Navbar() {

    const {auth} =useSelector(store=>store);
    return (
        <div className=' px-2 py-3 border-b z-50 bg-background bg-opacity-0 sticky
    top-0 left-0 right-0 flex justify-between items-center'>
            <div className='flex items-center gap-3 p-2'>

                <Sheet>
                    <SheetTrigger>
                        <Button variant='ghost' size='icon' className="rounded-full h-11">
                            <DragHandleHorizontalIcon className=' h-7 w-7'/>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left" className='w-72 border-r-0 flex flex-col justify-center'>
                        <SheetHeader>
                            <SheetTitle></SheetTitle>
                             <div className='text-3xl flex justify-center items-center' >
                                <Avatar>
                                    <AvatarImage src="https://images.pexels.com/photos/6765363/pexels-photo-6765363.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
                                </Avatar>

                                <div>
                                    <span className='font-bold text-orange-700'>Trade</span>
                                    <span>Folio</span>
                                </div>
                             </div>
                        </SheetHeader>
                        <Sidebar/>
                    </SheetContent>
                </Sheet>
                <p className=' text-l lg:text-2xl cursor-pointer font-semibold text-orange-600'>
                    Trade Folio
                </p>
                <div className=' p-0 ml-9'>
                <Button variant="outline" className=" flex items-center gap-3">
                    <MagnifyingGlassIcon/>
                    <span>Search</span>
                </Button>
                </div>
            </div>
            <div>
                <Avatar>
                    <AvatarFallback>
                    {auth.user.fullName[0].toUpperCase()}
                    </AvatarFallback>
                </Avatar>
            </div>
        </div>
    )
}

export default Navbar
