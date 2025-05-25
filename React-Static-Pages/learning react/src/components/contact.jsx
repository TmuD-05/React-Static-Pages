import './contact.css';
export default function Contacts()
{
    return(
        <div className="contacts">
            <article className="contact-card">
                <img 
                    src="/doggy.jpeg"
                    alt="Photo of Mr. Doggerson"
                />
                <h3>Mr. Doggerson</h3>
                <div className="info-group">
                    <img 
                        src="/phone.jpeg" 
                        alt="phone icon" 
                    />
                    <p>(212) 555-1234</p>
                </div>
                <div className="info-group">
                    <img 
                        src="/mail.jpeg" 
                        alt="mail icon"
                    />
                    <p>mr.dogger@raw.rouf</p>
                </div>
            </article>
        </div>    
           
    )
}