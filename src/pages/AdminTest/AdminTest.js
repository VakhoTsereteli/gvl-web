import React, { useRef, useState } from 'react';
import Main from '../../components/Main/Main'
import emailjs from '@emailjs/browser';
import {MdSende} from 'react-icons/md';
import './AdminTest.css'

const AdminTest = () => {

  const form = useRef();
  const [formSubmitted, setFormSubmitted] = useState(false);


    const handleSubmit = (event) => {
    event.preventDefault();
    setFormSubmitted(true);
    sendEmail(event);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_vrykdjs', 'template_qmsng4m', form.current, 'q0xHcwFgs38OzDxDT')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  const [name, setName] = useState('');
  const [last_name, setLast_Name] = useState('');
  const [age, setAge] = useState('');
  const [mail, setMail] = useState('');

  const handleName = (event) => {
    const { value } = event.target;
    const georgianRegExp = /^[ა-ჰ]*$/;
    if (georgianRegExp.test(value)) {
      setName(value);
    }
  }

  const handleLast_Name = (event) => {
    const { value } = event.target;
    const georgianRegExp = /^[ა-ჰ]*$/;
    if (georgianRegExp.test(value)) {
      setLast_Name(value);
    }
  }
  
  const handleAge = (event) => {
    const { value } = event.target;
    const georgianRegExp = /^[0-9]*$/;
    if (georgianRegExp.test(value)) {
      setAge(value);
    }
  }

  const handleMail = (event) => {
    const { value } = event.target;
    const georgianRegExp = /^[a-zA-Z0-9@.]*$/;
    if (georgianRegExp.test(value)) {
      setMail(value);
    }
  }

  return (
    <>
      <Main/>

      <div className='test_main'>
        <h1>ამინისტრაციის ტესტირება</h1>
        {formSubmitted ? (
          <h1>CV GAGZAVNILIA</h1>
        ) : (
          <>
            <p>
          გთხოვთ გამოიყენოთ მხოლოდ ქართული და არა ლათინური შრიფტი!
          <br/>
          (გამონაკლისი დაიშვება მხოლოდ პერსონაჟის აღწერისას!)
        </p>
        <form ref={form} onSubmit={handleSubmit}>
          <div className='box'>
            <li>
              <label>OOC სახელი</label>
              <br/>
              <input type='text' name='name' value={name} onChange={handleName}/>
            </li>
            <li>
              <label>OOC გვარი</label>
              <br/>
              <input type='text' name='last_name' value={last_name} onChange={handleLast_Name}/>
            </li>
          </div>

          <div className='box'>
            <li>
              <label>OOC ასაკი</label>
              <br/>
              <input type='text' name='age' value={age} onChange={handleAge}/>
            </li>
            <li>
              <label>მეილი</label>
              <br/>
              <input type='mail' name='mail' value={mail} onChange={handleMail}/>
            </li>
          </div>

          <div className='box'>
            <li>
              <label>FB პროფილის ბმული</label>
              <br/>
              <input type='text' name='fb_url'/>
            </li>
            <li>
            <label>Discord_ის ნიკი</label>
              <br/>
              <input type='mail' name='dc_nick'/>
            </li>
          </div>
        </form>
        <button onClick={handleSubmit}>SEND</button>
          </>
        )
      }
      </div>
    </>
  );
};

export default AdminTest;