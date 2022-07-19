import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Formik } from 'formik';
import { nanoid } from 'nanoid';
import * as yup from 'yup';
import { Input, LabelName, Button, Error } from './NewContactForm.styled';
import Section from 'components/Section';

const schema = yup.object().shape({
  name: yup
    .string()
    .required()
    .matches(/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/, {
      message:
        "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",
    }),
  number: yup
    .string()
    .required()
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      {
        message:
          'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +',
      }
    ),
});

export default class NewContactForm extends Component {
  static propTypes = {
    addContact: PropTypes.func.isRequired,
  };

  submitHandler = (values, actions) => {
    try {
      this.props.addContact({
        id: nanoid(),
        name: values.name,
        number: values.number,
      });
      actions.resetForm();
    } catch (error) {
      alert(error);
    }
  };
  render() {
    const nameInputId = nanoid();
    const numberInputId = nanoid();
    return (
      <Section>
        <Formik
          initialValues={{
            name: '',
            number: '',
          }}
          onSubmit={this.submitHandler}
          validationSchema={schema}
        >
          <Form autoComplete="off">
            <LabelName htmlFor={nameInputId}>Name</LabelName>
            <Input id={nameInputId} name="name" type="text" />
            <Error name="name" component="p" />
            <LabelName htmlFor={numberInputId}>Number</LabelName>
            <Input id={numberInputId} name="number" type="tel" />
            <Error name="number" component="p" />
            <Button type="submit">Add contact</Button>
          </Form>
        </Formik>
      </Section>
    );
  }
}
