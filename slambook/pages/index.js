import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { useState } from 'react'
import Script from 'next/script'

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

  const [details, setDetails] = useState({
    email: '',
    password: '',
  })

  const setEmail = (e) => {
    setDetails({...details, email: e.target.value})
  }

  const setPassword = (e) => {
    setDetails({...details, password: e.target.value})
  }

  return (
      <div style={parentBox}>
        <Head>
          <title>Slambook | Sign In</title>
        </Head>
          <div className= {styles.boxes}>
            <div className={styles.headings}>Email ID</div>
            <div style={{padding: "0.8vh 1.9vh"}}>:</div>
            <input 
            autoComplete="off"
            id='email' 
            className={styles.input} 
            style={{marginLeft: "1.4vw"}} 
            spellCheck="false" 
            onChange={setEmail}
            />
          </div>

          <div className= {styles.boxes}>
            <div className={styles.headings}>Password</div>
            <div style={{padding: "0.8vh"}}>:</div>
            <input 
            type="password"
            id='password' 
            className={styles.input} 
            spellCheck="false" 
            onChange={setPassword}
            autoComplete="off"
            />
          </div>
          <Link href='/branch'><div style={submitButtonDiv}><button style={submitButton}>Submit</button></div></Link>
        </div>
  )
}