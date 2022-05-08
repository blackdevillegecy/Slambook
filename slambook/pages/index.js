import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {


  const parentBox = {
    backgroundColor: 'rgb(174, 229, 248)',
    padding: "2vw",
    margin: "auto",
    // border: '1px solid red',
    height: '52vh',
    paddingTop: '22vh'
  }

  const submitButtonDiv = {
    // border: '1px solid red',
    margin: 'auto',
    marginTop: '3vh',
    height: '5vh',
    width: '7vw',
  }

  const submitButton = {
    height: '100%', 
    width: '100%', 
    borderRadius: '20px', 
    color: 'white',
    backgroundColor: 'black'
  }

  return (
      <div style={parentBox}>
        <Head>
        <title>Slambook | Sign In</title>
      </Head>
          <div className= {styles.boxes}>
            <div className={styles.headings}>Email ID</div>
            <div style={{padding: "0.8vh 1.9vh"}}>:</div>
            <input className={styles.input} style={{marginLeft: "1.4vw"}} spellCheck="false"/>
          </div>

          <div className= {styles.boxes}>
            <div className={styles.headings}>Password</div>
            <div style={{padding: "0.8vh"}}>:</div>
            <input className={styles.input} spellCheck="false" />
          </div>
          <Link href='/branch'><div style={submitButtonDiv}><button style={submitButton}>Submit</button></div></Link>
        </div>
  )
}
