import path from 'node:path'
import fs from 'node:fs/promises'

export const getData = async() =>{
    const __dirname = import.meta.dirname
    const filePath = path.join(__dirname, "..", "data", "data.json")
    try{
        const data = await fs.readFile(filePath, 'utf-8')
        const content = JSON.parse(data)

        return content
    }
    catch(err){
        return []
    }
}