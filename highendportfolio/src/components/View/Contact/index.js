import React from 'react';

function Contact() {
    return (
        <div>
            <h1>Contact</h1>
            <div>
                <img src="https://i.imgur.com/px6cNb.png" alt="contact" />
                <div className="form container">

                    <form>
                        <div className="form-group">
                            <label htmlFor="exampleInputName1">Name</label>
                            <input type="Name" className="form-control" id="exampleInputName1" aria-describedby="NameHelp" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email</label>
                            <input type="Email" className="form-control" id="exampleInputEmail1" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputSubject1">Subject</label>
                            <input type="Subject" className="form-control" id="exampleInputSubject1" />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;