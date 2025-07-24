import { addNewSighting } from "../utils/addNewSighting.js";
import { getData } from "../utils/getData.js";
import { parseJsonBody } from "../utils/parseJsonBody.js";
import { sendResponse } from "../utils/sendResponse.js";

export const handleGet = async (res) => {
    const data = JSON.stringify(await getData())
    sendResponse(res, 200, 'application/json', data);
}

export const handlePost = async(req, res) =>{
    try{
        const parsedBody = await parseJsonBody(req)
        await addNewSighting(parsedBody)
        sendResponse(res, 201, 'application/json', JSON.stringify(parsedBody))
    }
    catch(err){
        sendResponse(res, 400, 'application/json', JSON.stringify({ error: err }))
    }
}

