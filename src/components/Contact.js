import React from 'react';
import {
  ContactWrapper, ProjectTitle, Title, ContactForm, Label, Input, TextArea, ContactFormDiv, FormButton,
} from './StyledComponents';

const Contact = () => (
  <ContactWrapper>
    <ProjectTitle>
      <Title> Contact </Title>
    </ProjectTitle>
    <ContactFormDiv>
      <ContactForm
        action="https://formspree.io/simo.edwin@yahoo.com"
        method="POST"
      >

        <Label> Name</Label>
        <Input type="text" name="name" />
        <Label> Email</Label>
        <Input type="email" name="_replyto" />
        <Label> Description</Label>
        <TextArea name="description" />
        <FormButton type="submit" value="Send">Submit </FormButton>
      </ContactForm>
    </ContactFormDiv>
  </ContactWrapper>
);

export default Contact;
