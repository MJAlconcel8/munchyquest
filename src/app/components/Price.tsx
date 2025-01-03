"use client";

import React, { use, useState } from 'react'

type Props = {
    price: number;
    id: number;
    options?: {title: string, additionalPrice: number}[];
}

const Price = ({price, id, options}:Props) => {

    const [total, setTotal] = useState(price);
    const [quantity, setQuantity] = useState(1);
    const [selected, setSelected ] = useState(0);

    const calculateTotalPrice = (quantity:number) => {
        let updatedPrice = price;
        if (quantity > 1) {
            updatedPrice = price * quantity;
        }
        setTotal(updatedPrice);
    }

    const backGroundColor = (index:number) => {
        if(selected === index) {
            return 'rgb(248 113 113)';
        }
        else{
            return "white";
        }
    }
    
    const innerColor = (index:number) => {
        if(selected === index) {
            return 'white';
        }
        else{
            return "red";
        }
    }

    const handleSelectionClick = (index:number) => {
        setSelected(index);
    }

    const decreaseQuantity = () => {
        if(quantity > 1) {
            setQuantity(quantity - 1);
            calculateTotalPrice(quantity - 1);
        }
    }

    const increaseQuantity = () => {
        setQuantity(quantity + 1);
        calculateTotalPrice(quantity + 1);
    }
    

  return (
    <div className='flex flex-col gap-4'>
        <h2 className='text-2xl font-bold'>${total.toFixed(2)}</h2>
        <div className="flex gap-4">
            {options?.map(option=>(
                <button 
                    key={option.title} 
                    className='min-w-[6rem] p-2 ring-1 ring-red-400 rounded-md'
                    style={{
                        backgroundColor: backGroundColor(options.indexOf(option)),
                        color: innerColor(options.indexOf(option))
                    }}
                    onClick={()=>handleSelectionClick(options.indexOf(option))}
                    >
                        {option.title}
                </button>
            ))}
        </div>
        <div className="flex justify-between items-center">
            <div className="flex justify-between w-full p-3 ring-1 ring-red-500">
                <span>Quantity</span>
                <div className='flex gap-4 items-center'>
                    <button onClick={()=>decreaseQuantity()}>{'<'}</button>
                    <span>{quantity}</span>
                    <button onClick={()=>increaseQuantity()}>{'>'}</button>
                </div>
            </div>
            <div className="">
                <button className='uppercase w-56 bg-red-500 text-white p-3 ring-1 ring-red-500'>Add to Cart</button>
            </div>
        </div>
    </div>
  )
}

export default Price