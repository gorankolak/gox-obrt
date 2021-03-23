import React from 'react';
import { Button, Input, Textarea } from 'components/common';
import { InputField } from './styles';

export default () => (
    <form name="Contact Form" netlify-honeypot="bot-field" method="POST" data-netlify="true">
      <input type="hidden" name="form-name" value="Contact Form" />
      <InputField>
        <p class="hidden">
          <label>Don’t fill this out if you’re human: <input name="bot-field" /></label>
        </p>
      </InputField>
      <InputField>
        <Input type="text" name="name" placeholder="Ime"/>
      </InputField>
      <InputField>
        <Input type="email" name="email" placeholder="Email" required/>
      </InputField>
      <InputField>
        <Textarea rows="8" type="text" name="message" placeholder="Vaša poruka" required/>
      </InputField>
      <Button type="submit">Pošalji</Button>
    </form>
);
