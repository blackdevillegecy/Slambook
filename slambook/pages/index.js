import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  const logoCSS = {
    marginLeft: "1.2vh",
    marginTop: "2vh"
  }

  const parentBox = {
    border: "1px solid black",
    backgroundColor: "#C5C3C3",
    padding: "2vw",
    width: "fit-content",
    margin: "auto",
    marginTop: "15vh",
    borderRadius: "7px"
  }

  return (

    
    <div>
        <div style={logoCSS}><Image src="/iitgoa_logo.png" width={80} height={80} /></div>
        <div style={parentBox}>
          <div className= {styles.boxes}>
            <div className={styles.headings} style={{backgroundColor: "rgb(208, 255, 239)"}}>Email ID</div>
            <div style={{padding: "0.8vh"}}>:</div>
            <input className={styles.input} style={{marginLeft: "2.6vw"}}/>
          </div>

          <div className= {styles.boxes}>
            <div className={styles.headings} style={{backgroundColor: "rgb(208, 255, 239)"}}>Password</div>
            <div style={{padding: "0.8vh"}}>:</div>
            <input className={styles.input} />
          </div>
        </div> 
    </div>
  )
}
