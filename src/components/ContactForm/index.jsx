import emailjs from "emailjs-com";
import React, { useEffect, useRef, useState } from 'react';
import { MdKeyboardArrowRight, MdArrowForward } from 'react-icons/md';

import {
    StyledForm,
    StyledInput,
    StyledError,
    StyledTextArea,
    StyledButton,
} from './ContactForm';





function ContactUs() {
    const [hover, setHover] = useState(false);
    let btnRefSend = useRef();

    const onHover = () => {
        setHover(!hover);
    };
    const [inputstate, setInputState] = useState({
        from_name: '',
        email: '',
        message: '',
    });
    const [error, setError] = useState("");


    const handleInput = e => {
        const inputName = e.currentTarget.name;
        const value = e.currentTarget.value;

        setInputState(prev => ({ ...prev, [inputName]: value }));
    };


    function sendEmail(e) {
        e.preventDefault();
        if (btnRefSend.current) {
            btnRefSend.current.disabled = true
        }

        for (let key in inputstate) {
            if (inputstate[key] === '') {
                setError(`You must provide the ${key}`)
                return
            }
        }
        setError('');

        emailjs.sendForm('service_i4qe0yq', 'template_dsuw3qn', e.target, 'user_l8zND9dpA8lb1syjA6b9z')
            .then((result) => {
                console.log(result.text);
                setInputState({
                    from_name: '',
                    email: '',
                    message: '',
                })

                if (btnRefSend.current) {
                    btnRefSend.current.disabled = false
                }


            }, (error) => {
                console.log(error.text);

            });
        e.target.reset()

    }


    return (

        <>
            <StyledForm onSubmit={sendEmail} >
                <label htmlFor="from_name">Name *</label>
                <StyledInput type="text" name="from_name" onChange={handleInput} value={inputstate.from_name} />
                <label htmlFor="email" >Email * </label>
                <StyledInput type="email" name="email" onChange={handleInput} value={inputstate.email} />
                <label htmlFor="message"  >Message *</label>
                <StyledTextArea value={inputstate.message} name="message" onChange={handleInput} />
                {error && (
                    <StyledError>
                        <p>{error}</p>
                    </StyledError>
                )}
                <StyledButton ref={btnRefSend} onMouseEnter={onHover}
                    onMouseLeave={onHover}
                    type="submit">SEND {hover ? <MdArrowForward /> : <MdKeyboardArrowRight />}
                </StyledButton>
            </StyledForm>
        </>
    )
}

export default ContactUs