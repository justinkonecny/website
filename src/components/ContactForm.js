import React, {Component} from 'react';
import '../css/ContactForm.scss';

export class ContactForm extends Component {
    constructor(props) {
        super(props);
        this.submitForm = this.submitForm.bind(this);
        this.state = {
            status: ''
        };
    }

    render() {
        return (
            <form id={'contact-form'} className={'contact-form'} onSubmit={this.submitForm}
                  action={'https://formspree.io/mdownkkq'}
                  method={'POST'}>
                <div>
                    <label>Your Email:</label>
                    <input type={'email'} name={'email'}/>
                </div>

                <div>
                    <label>Your Message:</label>
                    <input type={'text'} name={'message'}/>
                </div>

                <button className={'btn-submit'} type={'submit'}>
                    Submit
                </button>

                {this.state.status === 'SUCCESS' ? <p>Thanks!</p> : <button>Submit</button>}
                {this.state.status === 'ERROR' && <p>Ooops! There was an error.</p>}
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
                this.setState({status: 'SUCCESS'});
            } else {
                this.setState({status: 'ERROR'});
            }
        };
        xhr.send(data);
    }
}
