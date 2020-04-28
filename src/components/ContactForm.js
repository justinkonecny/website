import React, {Component} from 'react';
import '../css/ContactForm.scss';

export class ContactForm extends Component {
    constructor(props) {
        super(props);
        this.submitForm = this.submitForm.bind(this);
        this.updateInput = this.updateInput.bind(this);
        this.state = {
            status: '',
            name: '',
            email: '',
            message: ''
        };
    }

    updateInput(event) {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({[name]: value});
    }

    render() {
        const disabled = (this.state.name.length < 2) || (this.state.email.length < 4) || (this.state.message.length < 5);

        return (
            <form id={'contact-form'} className={'contact-form'} onSubmit={this.submitForm}
                  action={'https://formspree.io/mdownkkq'}
                  method={'POST'}>

                {this.state.status === 'SUCCESS' && <p className={'success'}>Thanks for the message! I'll be in touch as soon as possible.</p>}
                {this.state.status === 'ERROR' && <p className={'error'}>Ooops! Something went wrong. Please try again.</p>}

                <p>Name</p>
                <input placeholder={'Name'} type={'name'} name={'name'} value={this.state.name} onChange={this.updateInput}/>

                <p>Email</p>
                <input placeholder={'Email Address'} type={'email'} name={'email'} value={this.state.email} onChange={this.updateInput}/>

                <p>Message</p>
                <textarea className={'input-msg'} placeholder={'Message'} name={'message'} value={this.state.message} onChange={this.updateInput}/>

                {<button className={disabled ? 'btn-disabled' : 'btn-enabled'} type={'submit'} disabled={disabled}>Submit</button>}
            </form>
        );
    }

    submitForm(event) {
        event.preventDefault();
        const form = event.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader('Accept', 'application/json');
        xhr.onreadystatechange = () => {
            if (xhr.readyState !== XMLHttpRequest.DONE) {
                return;
            }
            if (xhr.status === 200) {
                form.reset();
                this.setState({
                    status: 'SUCCESS',
                    name: '',
                    email: '',
                    message: ''
                });
            } else {
                this.setState({status: 'ERROR'});
            }
        };
        xhr.send(data);
    }
}
