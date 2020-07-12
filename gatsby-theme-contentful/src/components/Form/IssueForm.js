import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TextFieldInput from '../Form/TextFieldInput';
import Button from '../Button/Button';
import ListComponent from '../List/ListComponent';

export default function IssueForm() {
  const [feedback, setFeedback] = useState('');
  const [name, setName] = useState('');
  const [curiousity, setCuriousity] = useState('');
  const [items, setItems] = useState([]);
  function handleChange(event, method) {
    method(event.target.value);
  }
  useEffect(() => {
    axios.get(`${process.env.GATSBY_FORM_GET_API}`).then(res => {
      setItems(res.data);
    });
  }, []);
  function handleSubmitForm(feedback, name, curiousity) {
    const data = {
      feedback: feedback,
      name: name,
      curiousity: curiousity,
    };
    fetch(`${process.env.GATSBY_FORM_API}`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(res => {
      axios.get(`${process.env.GATSBY_FORM_GET_API}`).then(res => {
        setItems(res.data);
      });
    });
  }
  return (
    <div>
      <TextFieldInput
        id="name"
        label="Name"
        value={name}
        onChange={event => handleChange(event, setName)}
      />
      <TextFieldInput
        id="feedback"
        label="Give us your feedback"
        value={feedback}
        onChange={event => handleChange(event, setFeedback)}
      />
      <TextFieldInput
        id="curiousity"
        label="What does Joy look like for you?"
        value={curiousity}
        onChange={event => handleChange(event, setCuriousity)}
      />
      <Button onClick={() => handleSubmitForm(feedback, name, curiousity)}>
        Submit
      </Button>
      {items.length > 0 ? <ListComponent items={items} /> : null}
    </div>
  );
}
