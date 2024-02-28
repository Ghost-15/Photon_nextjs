import info from '../style/info.css';

const Info = () => {
    return(
            <div className="containerinfo">
                <div className="content">
                    <div className="left-side">
                        <div className="address details">
                            <i className="fas fa-map-marker-alt"/>
                            <div className="topic">Address</div>
                            <div className="text-one">74 Avenue Jacques Opangault,<br/>
                                Songolo Pointe-Noire, Republique du Congo</div>
                        </div>
                        <div className="phone details">
                            <i className="fas fa-phone-alt"/>
                            <div className="topic">Phone</div>
                            <div className="text-one">+242 06 405 0548</div>
                            <div className="text-two">+242 05 381 8178</div>
                        </div>
                        <div className="email details">
                            <i className="fas fa-envelope"/>
                            <div className="topic">Email</div>
                            <div className="text-one">contact@photon-cg.com</div>
                        </div>
                    </div>

                    <div className="right-side">
                        <div className="topic-text">Send us a message</div>
                        <p>Can't find what you're searching for?<br/>
                            Fill in the details below</p>
                        <form action="#">
                            <div className="input-box">
                                <input type="text" placeholder="Enter your name"/>
                            </div>
                            <div className="input-box">
                                <input type="text" placeholder="Enter your email"/>
                            </div>
                            <div className="input-box message-box">
                                <input type="textarea" placeholder="Enter your message"/>
                            </div>
                            <div className="button">
                                <input type="button" value="Send Now"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
    );
};
export default Info;