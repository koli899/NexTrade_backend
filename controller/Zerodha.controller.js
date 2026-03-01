const { KiteConnect } = require("kiteconnect");


const ZerodhaAuth = (req, res) => {
    res.redirect(`https://kite.zerodha.com/connect/login?api_key=${process.env.Zerodha_API_KEY}&v=3`)

}

const ZerodhaAuthCallback = async (req, res) => {
    const { request_token } = req.query;
    console.log("Received request token:", request_token); 
    
    const kite = new KiteConnect({
        api_key: process.env.Zerodha_API_KEY,
    });

     const response = await kite.generateSession(request_token, process.env.Zerodha_API_SECRET);   
     console.log("Session generated:", response.access_token);
           
    res.redirect(`http://localhost:5173/connect`)
}

module.exports = {
    ZerodhaAuth,
    ZerodhaAuthCallback
}

