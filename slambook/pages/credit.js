import Head from "next/head"

const Credit = () => {

    const CreditDiv = {
        backgroundColor: 'rgb(174, 229, 248)', 
        // border: '1px solid red', 
        textAlign: 'center',
        height: '80vh'
    }

    const CreditHead = {
        fontSize: '35px',
        color: 'white', 
        transform: 'translateY(20vh)',
        marginBottom: '2vh',
    }

    const Names = {
        transform: 'translateY(20vh)',
        fontSize: '20px',
        fontWeight: '500',
        color: 'rgb(32, 39, 93)'
    }
    return ( 
        
        <div style={CreditDiv}>
            <Head>
                <title>Slambook | Credits</title>
            </Head>
            <div style={CreditHead}>CREDITS</div>
            <div style={Names}>Name</div>
            <div style={Names}>Name</div>
            <div style={Names}>Name</div>
            <div style={Names}>Name</div>
        </div>
     );
}
 
export default Credit;