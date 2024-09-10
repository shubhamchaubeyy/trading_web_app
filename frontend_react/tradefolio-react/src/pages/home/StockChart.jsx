import { Button } from '@/components/ui/button';
import { fetchMarketChart } from '@/state/Coin/Action';
import { store } from '@/state/Store';
import { Key } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import ReactApexChart from 'react-apexcharts';
import { useDispatch, useSelector } from 'react-redux';
const timeSeries =[
    {
        keyword:"DIGITAL_CURRENCY_DAILY",
        Key:"Time Series (Daily)",
        lable:"1 Day",
        value:1
    },
    {
        keyword:"DIGITAL_CURRENCY_WEEKLY",
        Key:"Weekly Time Series ",
        lable:"1 Week",
        value:7
    },
    {
        keyword:"DIGITAL_CURRENCY_MONTHLY",
        Key:"Monthly Time Series ",
        lable:"1 Month",
        value:30
    },
    {
        keyword:"DIGITAL_CURRENCY_YEARLY",
        Key:"Yearly Time Series",
        lable:"1 Year",
        value:365,
    }
]
const StockChart =({coinId})=> {
    const dispatch = useDispatch();
    const {coin} =useSelector(store=>store);
    const [activeLable,setActiveLable] =useState(timeSeries[0])
    const series=[
        {
            data:coin.marketChart.data,
        },
    ];

    const options ={
        chart:{
            id:"area-datetime",
            type:"area",
            height:350,
            zoom:{
                autoScaleYaxis:true
            }
        },
        dataLabels:{
            enabled:false
        },
        xaxis:{
            type:"datetime",
            tickAmount:6
        },
        colors:["#758AA2"],
        markers:{
            colors:["#fff"],
            strokeColor:"#fff",
            size:0,
            strokeWidth:1,
            style:"hollow"
        },
        tooltip:{
            theme:"dark"
        },
        fill:{
            type:"gradient",
            gradient:{
                shadeIntensity:1,
                opacityFrom:0.7,
                opacityTo:0.9,
                stops:[0,100]
            }
        },
        grid:{
            borderColor:"#47535E",
            strokeDashArray:4,
            show:true
        }
    }

    const handleActiveLable=(value)=>{
        setActiveLable(value);
    }
    useEffect( ()=>{
        dispatch(fetchMarketChart({coinId,days:activeLable.value,jwt:localStorage.getItem("jwt")}))
    },[dispatch,coinId,activeLable])
  return (
    <div>
        <div className='space-x-3 flex justify-start'>
            {timeSeries.map((item)=>
                <Button key={item.value}
                 onClick={()=>handleActiveLable(item)}
                 variant={activeLable.lable==item.lable?"":"outline"}>
                    {item.lable}
                </Button>
            )}
        </div>
       <div id='chart-timelines'>
        <ReactApexChart
         options={options}
         series={series}
         height={450}
         type='area'
        />
       </div>
    </div>
  )
}

export default StockChart