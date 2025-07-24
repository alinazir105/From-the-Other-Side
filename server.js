import http from 'node:http'
import { serveStatic } from './utils/serveStatic.js'
import { handleGet, handlePost } from './handlers/routeHandlers.js'
import { sendResponse } from './utils/sendResponse.js'
import path from 'node:path'
import fs from 'node:fs/promises'

const PORT = 8000

const __dirname = import.meta.dirname

const server = http.createServer(async (req, res) => {
    if(req.url === '/api'){
        if(req.method === 'GET'){
            return await handleGet(res)
        }
        else if (req.method === 'POST'){
            return await handlePost(req, res)
        }
        else{
            sendResponse(res, 405, 'application/json', JSON.stringify({ error: 'Method Not Allowed' }))
        }
    }
    else if(!req.url.startsWith('/api')){
        await serveStatic(req, res, __dirname)
    }
    else{
        const content = await fs.readFile(path.join(__dirname, 'public', '404.html'))
        sendResponse(res, 404, 'text/html', content)
    }
})

server.listen(PORT, () => console.log(`Server is running on port ${PORT}`))