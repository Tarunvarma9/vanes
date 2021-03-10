import React, { Component } from 'react';

class Contact extends Component{
    render(){
        return(
            <div>
                <h1>Contact</h1>
                <section className="contacts-3 bg-clouds">
        <div className="container">
          <div className="row">
            <div className="col-sm-5">
              <h3>Contact Us</h3>
              <p>
                Reaching us, sometimes causes to threats & may sometimes lead to Violence which you're Eyes can't believe it Happend. so Please Contact us at your own Risk.-(yours Faithfully-Anilesh(Ps:Welcome to Fight Club)).  
              </p>
              <div className="links">
                <a href="#"><span className="fui-phone"></span>+91 9550006466</a
                ><br />
                <a href="#"><span className="fui-mail"></span>anileshvarma11@gmail.com</a>
              </div>
              <h6>Corporate HQ</h6>
              <p>Vanes is located near to heart of technology in Hyderabad.</p>
              <p>Vanes Industries</p>
              <p>
                Door No: 2-91/5&6/MPTP/3F/B-2<br />
                Kondapur, Serilingampally,<br />
                Hyderabad, Telangana-500084.
              </p>
            </div>
            <div className="col-sm-6 col-sm-offset-1">
              <h3>Email us</h3>
              <p>
                Want to reach us by email, Send us a quick message by filling
                form below.
              </p>
              <form>
                <label className="h6">Name / Last Name</label>
                <input type="text" className="form-control" />
                <label className="h6">E-mail</label>
                <input type="text" className="form-control" />
                <label className="h6">Message</label>
                <textarea rows="7" className="form-control"></textarea>
                <button type="submit" className="btn btn-primary">
                  <span className="fui-mail"></span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
            </div>
        )
    }
}
export default Contact ;