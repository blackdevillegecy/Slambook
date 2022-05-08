import Image from "next/image";
import Link from "next/link";

const Navbar = () => {

    const logoCSS = {
        marginLeft: "1.2vh",
        marginRight: '30vw',
        marginTop: "2vh",
      }

      const linkCSS = {
        marginLeft: '4vw',
        fontSize: '19px',
        color: 'white',
        textShadow: '0px 3px 5px grey',
        cursor: 'pointer',
      }

      const parentLink = {
          display: 'flex',
          marginTop: '5vh'
      }
    
    return ( 
        <div style={{display: 'flex', backgroundColor: 'rgb(174, 229, 248)'}}>
            <div style={logoCSS}><Image src="/iitgoa_logo.png" width={80} height={80} /></div>
            <div  style={parentLink}>
                <div className="links" style={linkCSS}>HOME</div>
                <Link href="/branch"><div className="links" style={linkCSS}>BRANCH</div></Link>
                <Link href="/"><div className="links" style={linkCSS}>SIGN IN</div></Link>
            </div>
        </div>
     );
}
 
export default Navbar;