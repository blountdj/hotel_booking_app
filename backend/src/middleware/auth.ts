import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken"

// add a userId property to the request type in the express namespace (extends the express request type)
declare global {
    namespace Express {
        interface Request {
            userId: string;
        }
    }
}

const verifyToken = (req: Request, res: Response, next: NextFunction) => { 
    const token = req.cookies["auth_token"]
    if (!token) {
        return res.status(401).json({message: "unauthorised"})
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY as string) // verify that the token was created by us, not somebody else
        req.userId = (decoded as JwtPayload).userId;
        next()
    } catch (error) {
        return res.status(401).json({message: "unauthorised"})
    }
}

export default verifyToken