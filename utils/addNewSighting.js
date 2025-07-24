import path from 'node:path'
import fs from 'node:fs/promises'
import { getData } from "./getData.js"
import { sanitizeInput } from './sanitizeInput.js'
import { sightingEvents } from '../events/sightingEvents.js'

export const addNewSighting = async (newSighting) => {
    
    const __dirname = import.meta.dirname

    try{
        const data = await getData()

        newSighting = await sanitizeInput(newSighting)
        
        data.push(newSighting)

        const pathToData = path.join(__dirname, '..', 'data', 'data.json')

        await fs.writeFile(pathToData, JSON.stringify(data, null, 2), 'utf-8')

        sightingEvents.emit('sighting-added', newSighting)
    }
    catch(err){
        throw new Error(`Failed to add new sighting: ${err}`)
    }
}