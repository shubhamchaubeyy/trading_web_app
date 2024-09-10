import React from 'react'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { ScrollArea } from '@/components/ui/scroll-area'
  

const AssetList = ({coin,category})=> {
  const dispatch= useDispatch();
  const navigate = useNavigate();
  return (
    <Table>
      <ScrollArea className={`${category=="all" ? "h-[75vh]":"h-[82vh]"}`}>

  <TableHeader>
    <TableRow className='flex justify-between'>
      <TableHead className=" w-20 ">COIN</TableHead>
      <TableHead className=" w-20 ">SYMBOL</TableHead>
      <TableHead className=" w-20 ">VOLUME</TableHead>
      <TableHead className=" w-20 ">MARKET CAP</TableHead>
      <TableHead className=" w-20 ">24hr</TableHead>
      <TableHead className=" w-20 ">PRICE</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {coin.map((item,index)=>
      <TableRow key={item.id} className='flex justify-between '>
      <TableCell onClick={()=>navigate(`/market/${item.id}`)} className=" w-20 font-medium flex items-center gap-2">
        <Avatar className='-Z-50 h-8 w-8'>
            <AvatarImage src={item.image}/>
        </Avatar>
        <span className=' font-bold'>{item.name}</span>
      </TableCell>
      <TableCell className=" w-20  h-8">{item.symbol.toUpperCase()}</TableCell>
      <TableCell className=" w-20  h-8">{item.total_volume}</TableCell>
      <TableCell className=" w-20  h-8">{item.market_cap}</TableCell>
      <TableCell className=" w-20  h-8">{item.price_change_percentage_24h}</TableCell>
      <TableCell className=" w-20  h-8">${item.current_price}</TableCell>
    </TableRow>
    )}
  
  </TableBody>
      </ScrollArea>
</Table>

  )
}

export default AssetList;
