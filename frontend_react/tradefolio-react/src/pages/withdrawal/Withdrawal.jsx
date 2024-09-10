import React from 'react'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

const Withdrawal = () => {
  return (
    <div className='px-5 lg:p-10'>
    <h1 className=' text-start font-bold text-3xl pb-5'>Activity</h1>
    <Table className='border'>
        <TableHeader>
            <TableRow className='flex items-center justify-between' >
                <TableHead className="">Date</TableHead>
                <TableHead>Method</TableHead>
                <TableHead>Amount</TableHead>
               
                <TableHead className=" text-red-600">Status</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
            {[1, 1, 1, 1, 1, 1].map((item, index) =>
                <TableRow key={index} className='flex justify-between items-start'>
                    <TableCell >
                        <p>June 2,2024 at 11:43</p>
                    </TableCell>
                    
                    <TableCell>Bank</TableCell>
                    <TableCell>23423432143</TableCell>
                    
                    <TableCell className="">
                        345
                    </TableCell>
                </TableRow>
            )}

        </TableBody>
    </Table>
    </div>
  )
}

export default Withdrawal
