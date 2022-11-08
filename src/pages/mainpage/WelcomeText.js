const WelcomeText = () => {
    return(
        <div className ="card bg-light mb-3" style={{maxWidth: '18rem'}}> 
            <div className= "card-header"> <h2 className = "centered">Welcome to BINHI</h2></div>
            <div className= "card-body">
                <h5 className= "card-title">About Us</h5>
                <p className = "card-text">BINHI is a simple Plant Monitoring that aims to monitor polants soil moisture and water leve</p>
            </div>
        </div>

    );
}

export default WelcomeText;