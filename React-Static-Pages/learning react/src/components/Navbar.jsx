import './navbar.css';
export default function Navigation(){
    /**
 * Challenge: complete the Navbar to match the Figma design
 * 
 * Hints:
 * - for semantic HTML purposes, the Navbar should render
 *   a <header> with a <nav> nested inside. The image and "ReactFacts"
 *   text elements can both be rendered as children inside the <nav>
 * - reference the Figma design for the most accurate info about
 *   colors, sizes, font information, etc.
 */
    return (
        <>
            <header className='navbody'>
                <nav className='dis'>
                    <img src="public/react-icon.jpeg" className='image'/>
                    <h1 className="navig">
                        ReactFacts 
                    </h1>
                </nav>
            </header>
        </>
       
    )
}