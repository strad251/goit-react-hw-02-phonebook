import { Component } from 'react';

export class ContactForm extends Component {
    state = {
    name: '',
    number: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
    
  }

  handleSubmit = (event) => {
    event.preventDefault();
    
    this.props.addContact({ ...this.state })
    this.setState({ name: '', number: '' })
  }

  render() {
    const { name, number } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            onChange={this.handleChange}
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label>
          Number:
          <input
            type="tel"
            name="number"
            onChange={this.handleChange}
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button type='submit'>Add contact</button>
      </form>
    )
  }
}