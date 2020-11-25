import emailjs from "emailjs-com";
import React, { useEffect, useRef, useState } from 'react';
import { init } from 'emailjs-com';


import {
    StyledFormWrapper,
    StyledForm,
    StyledInput,
    StyledError,
    StyledTextArea,
    StyledButton,
} from './ContactForm';





function ContactUs() {

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


            }, (error) => {
                console.log(error.text);

            });
        e.target.reset()

    }


    return (

        <>

            <StyledFormWrapper>
                <StyledForm onSubmit={sendEmail} >
                    <label htmlFor="from_name">Name</label>
                    <StyledInput type="text" name="from_name" onChange={handleInput} value={inputstate.from_name} />
                    <label htmlFor="email">Email </label>
                    <StyledInput type="email" name="email" onChange={handleInput} value={inputstate.email} />
                    <label htmlFor="message"  >Message</label>
                    <StyledTextArea value={inputstate.message} name="message" onChange={handleInput} />
                    {error && (
                        <StyledError>
                            <p>{error}</p>
                        </StyledError>
                    )}
                    <StyledButton type="submit">Send Message</StyledButton>
                </StyledForm>
            </StyledFormWrapper>


            {/* <div>
                <div className="container">
                    {message}

                    <form onSubmit={sendEmail}>
                        <div className="row pt-5 mx-auto">
                            <div className="col-8 form-group mx-auto">
                                <input type="text" className="form-control" placeholder="Name" name="from_name" />
                            </div>
                            <div className="col-8 form-group pt-2 mx-auto">
                                <input type="email" className="form-control" placeholder="Email Address" name="email" />
                            </div>
                            <div className="col-8 form-group pt-2 mx-auto">
                                <textarea required className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
                            </div>
                            <div className="col-8 pt-3 mx-auto">
                                <input type="submit" className="btn btn-info" value="Send Message"></input>
                            </div>
                        </div>
                    </form>
                </div>
            </div> */}
        </>
    )
}

export default ContactUs