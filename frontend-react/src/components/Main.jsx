import Button from "./Button"
const Main = () =>{
    return(
        <>

            <div className="container ">
                <div className="p-5 text-center bg-light-dark rounded">
                    <h1 className="text-light"> Stock Prediction Port </h1>
                    <p className="text-light lead">Welcome to our Stock Prediction Portal — your intelligent companion for making smarter investment decisions. Powered by advanced machine learning algorithms and real-time data analytics, our platform delivers highly accurate short-term and long-term stock forecasts. Whether you're a beginner or an experienced trader, you'll benefit from AI-driven insights, interactive charts, sentiment analysis, and customizable watchlists. Stay ahead of market trends with confidence as you explore historical data, monitor current price movements, and receive timely alerts. With a strong focus on accuracy, transparency, and user-friendly design, our portal empowers investors to navigate the stock market with precision and ease.
                    </p>
                    <Button text='Login' class='btn-info'/>

                </div>
            </div>
        
        </>
    )
}


export default Main