"use client";
import Button from './Button' 
import { useRef } from "react"
import emailjs from "@emailjs/browser"
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/ReactToastify.css'
import {useLang} from "./LangProvider"

export default function ContactForm() {
    const form: any=useRef()

    const sendmail=(e: any)=> {
        e.preventDefault()
        emailjs.sendForm("service_ycfvw4c", "template_xq7654m",form.current,"2iTJ5kXczUqV3RFzf")
        .then(()=>{
            toast.success("message send")
        },()=>{
            toast.error("somesthing is wrong")
        })
        e.target.reset()
    }

    const { getLang } = useLang();
    return getLang.then((lang:any) => {
    return <>
        <form ref={form} onSubmit={sendmail} className='py-4 flex flex-col mt-4 border-t gap-5'>
            <div>
                <label htmlFor="fullname">{lang('formFullName')}</label>
                <input name='fullname' type="text" id="fullname" placeholder="John Doe"/>
            </div>

            <div>
                <label htmlFor="email">{lang('formEmail')}</label>
                <input name='email' type="text" id="email" placeholder="example@example.com"/>
            </div>

            <div>
                <label htmlFor="phone">{lang('formPhone')}</label>
                <input name='phone' type="tel" id="phone" placeholder="+1 (123) 456-7890"/>
            </div>
            
            <div>
                <label htmlFor="message">{lang('formMessage')}</label>
                <textarea name='message' className='h-32 noresize' id="message" placeholder={lang('formMessagePlaceHolder')}></textarea>
            </div>
            
            <Button variant="btn_contact_send" type='submit' title={lang('formSendButton')} alt={''} />
        </form>
        <ToastContainer 
        position='top-center'
        hideProgressBar={true}
        theme='light'
        autoClose={2000}/>
    </>
    })
}