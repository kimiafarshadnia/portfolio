"use client"
import { useState } from "react"
import { toast } from "react-toastify"

export const OrderForm = () => {

    const [form, setForm] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    })

    const changeHandler = (e: any) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const submitHandler = (e: any) => {
        e.preventDefault()
        if (!form) return null;
        else {
            const newMessage = {
                form,
                id: Date.now(),
                writeAt: new Date().toISOString(),
            }
            toast.success("Submit");
        }
    }

    return (
        <form onSubmit={submitHandler} className="md:basis-2/4 w-full flex flex-col gap-6 pb-6">
            <div className="flex flex-col gap-2">
                <label htmlFor="name" className="font-semibold capitalize text-secondary  dark:text-white">your name</label>
                <input type="text" name="name" id="name" onChange={changeHandler} className='bg-[#F2F2F2] dark:bg-[#2B2B2B] px-5 py-1 w-full rounded-lg placeholder:text-sm placeholder:text-[#BDBDBD]' placeholder="Enter Your Name here" />
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="email" className="font-semibold capitalize text-secondary dark:text-white">Your Email Address</label>
                <input type="email" name="email" id="email" onChange={changeHandler} className='bg-[#F2F2F2] dark:bg-[#2B2B2B] px-5 py-1 w-full rounded-lg placeholder:text-sm placeholder:text-[#BDBDBD]' placeholder="Example: johnbrown@gmail.com" />
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="subject" className="font-semibold capitalize text-secondary dark:text-white">What’s This about?</label>
                <input type="text" name="subject" id="subject" onChange={changeHandler} className='bg-[#F2F2F2] dark:bg-[#2B2B2B] px-5 py-1 w-full rounded-lg placeholder:text-sm placeholder:text-[#BDBDBD]' placeholder="Enter a subject" />
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="message" className="font-semibold capitalize text-secondary dark:text-white">Message Box</label>
                <textarea rows={5} cols={4} name="message" id="message" onChange={changeHandler} className='bg-[#F2F2F2] dark:bg-[#2B2B2B] px-5 py-1 w-full rounded-lg placeholder:text-sm placeholder:text-[#BDBDBD]' placeholder="Please type your message here"></textarea>
            </div>
            <button type='submit' className='w-fit bg-lavender text-white font-medium capitalize px-4 py-1 rounded-lg'>
                send
            </button>
        </form>
    )
}