import React from 'react'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Avatar, AvatarImage } from '@/components/ui/avatar';
function Activity() {
  return (
    <div className='px-5 lg:p-10'>
    <h1 className=' text-start font-bold text-3xl pb-5'>Activity</h1>
    <Table className='border'>
        <TableHeader>
            <TableRow className='flex justify-between items-center' >
                <TableHead className="">Date & Time</TableHead>
                <TableHead>Trading Pair</TableHead>
                <TableHead>Buy Price</TableHead>
                <TableHead>Sell Price</TableHead>
                <TableHead>Order Type</TableHead>
                <TableHead className="">Profit/Loss</TableHead>
                <TableHead className="text-right text-red-600">Value</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
            {[1, 1, 1, 1, 1, 1].map((item, index) =>
                <TableRow key={index} className='flex justify-between '>
                    <TableCell>
                        <p>2024/09/01</p>
                        <p className=' text-gray-500'>12:23:12</p>
                    </TableCell>
                    <TableCell className="font-medium flex items-center gap-2">
                        <Avatar className='-Z-50 h-6 w-6'>
                            <AvatarImage src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA
                                            NgAAADpCAMAAABx2AnXAAAAyVBMVEUAAAD/fwAREiQHBw7/hAD/gQDKZQBIIwAAAA
                                            NfMAE+HgPseAHacABJJQDgcgBuOAGwWACGQwHDYQGkUwAMDSEAABcAABoAABQAABi
                                            UlJoAAB1vb3gfIC9qanPyewGUTAFbLwFiY2ucnKB+f4dZWmPV1dkpKjhBQUw6O0mD
                                            hYwAAA4vMT45HgOdTQRkNgIlEQIeEAEQCQJ5PgBAIAErFQIxGwFRKgN0OwGEQQG6X
                                            wCsVgA1HAIfDgMXGCmqq65NUFnr6+vDxci1trck2kDmAAAH/ElEQVR4nO2dC3eaPB
                                            iAAx9xdN41QilIqyiItF1nb9PNsvb//6gvqLMaXFfKSxM5eXrqpVTO+5yEkLsISSQ
                                            SiUQikUgkEolEIpFIJBKJRCKRSCRFouvv/L9iwyiAy0pnyxVzbPF6qMMluDzUNfwH
                                            rcIca2wPYYVLcHmoY+UPOCWmvMIluDxIsWNDih0bUuzYkGLHhhQ7NqTYsVFWMf3L+
                                            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"/>
                        </Avatar>
                        <span>Bitcoin</span>
                    </TableCell>
                    
                    <TableCell>43245342554</TableCell>
                    <TableCell>2342343214333</TableCell>
                    <TableCell>-0.20009</TableCell>
                    <TableCell className="">$250.00</TableCell>
                    <TableCell className="text-right">
                        345
                    </TableCell>
                </TableRow>
            )}

        </TableBody>
    </Table>
    </div>
  )
}

export default Activity;
