import React, { useState } from 'react'
import devbg from "../assets/dev bg.png"
import { Box,Text } from '@chakra-ui/react';
import { useToast } from '@chakra-ui/react'
const Contact = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobileNo, setMobileNo] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const scriptURL = 'https://script.google.com/macros/s/AKfycbwSgvF8aXDQL-Cftp3wC2PktPmg0rFjkmGIjdqsXCA0ISkwPOh-S_C1xVpRyTJCEPJndA/exec'
    const toast = useToast()
    const form = document.forms['submit-to-google-sheet']
        const msg = document.getElementById("msg")

    const handleSubmit = (e) => {
      e.preventDefault();
      e.preventDefault()
            fetch(scriptURL, {
                    method: 'POST',
                    body: new FormData(form)
                })
                .then(response => {
                    // msg.innerHTML = "Message Sent Successfully"
                        //alert("Message Sent Successfully to Anirban")
                        toast({
                          title: 'Message Sent Successfully',
                          description: "Your Message has been sent",
                          status: 'success',
                          duration: 5000,
                          isClosable: true,
                        })
                    setTimeout(function() {
                        msg.innerHTML = ""
                    }, 10000)
                    form.reset()
                })

            .catch(error => 
              toast({
                title: 'Message Not sent ',
                description: "We could not send your message.",
                status: 'error',
                duration: 5000,
                isClosable: true,
              })
              )
    };
    
  return (
   
    <Box id='contact' backgroundImage={devbg}>
    <section className="contact" id="contact">

    <Box fontSize={"3rem"} className="heading" display={"flex"} justifyContent={"center"} >
      <Text mr={"1rem"} >Contact</Text>
      <Text color={"#0ef"}>Us!</Text>
    </Box>
    <form name='submit-to-google-sheet' onSubmit={handleSubmit}>
      <div className="input-box">
        <div className="input-field">
          <input
            type="text"
            name="Name"
            placeholder="Full Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <span className="focus"></span>
        </div>
        <div className="input-field">
          <input
            type="text"
            name="Email_Id"
            placeholder="Email Address"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <span className="focus"></span>
        </div>
      </div>

      <div className="input-box">
        <div className="input-field">
          <input
            type="number"
            name="Mobile_No."
            placeholder="Mobile Number"
            required
            value={mobileNo}
            onChange={(e) => setMobileNo(e.target.value)}
          />
          <span className="focus"></span>
        </div>

        <div className="input-field">
          <input
            type="text"
            name="Email_Subject"
            placeholder="Email Subject"
            required
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
          <span className="focus"></span>
        </div>
      </div>
      <div className="textarea-field">
        <textarea
          name="Message"
          cols="30"
          rows="10"
          placeholder="Your message"
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <span className="focus"></span>
      </div>
      <br />
      <div className="btn-box-submit">
        <button onClick={handleSubmit} type="submit" className="btn-submit">
          Submit
        </button>
      </div>
    </form>
    <br />
    <marquee id="msg" width="100%" direction="left" height="100px"></marquee>
  </section>
  </Box>
);
  
}

export default Contact