const Router = require("express")
const { ZerodhaAuth , ZerodhaAuthCallback} = require("../controller/Zerodha.controller")

const ZerodhaRouter = Router()

ZerodhaRouter.get("/api/auth",ZerodhaAuth)
ZerodhaRouter.get("/api/callback", ZerodhaAuthCallback)




module.exports = ZerodhaRouter