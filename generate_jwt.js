'use strict';
import jwt from 'jsonwebtoken';

const secret = "secretresource";
const expiryTime = "1hr";
const issuer = "sridurgav";

const generateJWT = function(userId){
    const payload = {
        id: userId
    };
    return jwt.sign(payload,secret,{expiresIn: expiryTime, issuer: issuer});
}

const userId = "user-1";
const token = generateJWT(userId);
console.log("JWT : "+token);