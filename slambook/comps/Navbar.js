import Image from "next/image";
import Link from "next/link";

const Navbar = () => {

    const logoCSS = {
        marginLeft: "1vh",
        marginRight: '30vw',
        marginTop: "2vh",
        cursor: 'pointer'
      }

      const linkCSS = {
        marginLeft: '4vw',
        fontSize: '21px',
        color: 'white',
        textShadow: '0px 3px 5px black',
        cursor: 'pointer',
        fontWeight: '500',
        letterSpacing: '2px'
      }

      const parentLink = {
          display: 'flex',
          marginTop: '5vh'
      }
    
    return ( 
        <div style={{display: 'flex', backgroundColor: 'rgb(174, 229, 248)'}}>
            <Link href="https://iitgoa.ac.in/"><div style={logoCSS}><Image src="/iitgoa_logo.png" width={80} height={80} /></div></Link>
            <div  style={parentLink}>
                <div className="links" style={linkCSS}>HOME</div>
                <Link href="/branch"><div className="links" style={linkCSS}>BRANCH</div></Link>
                <Link href="/"><div className="links" style={linkCSS}>SIGN IN</div></Link>
            </div>
        </div>
     );
}
 
export default Navbar;