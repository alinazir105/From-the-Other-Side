import sanitizeHtml from 'sanitize-html'

export const sanitizeInput = async (input) => {
    const keys = Object.keys(input)

    const sanitizedInput = {}

    keys.forEach(key => {
        if(typeof input[key] === 'string'){
            sanitizedInput[key] = sanitizeHtml(input[key], {
                allowedTags: ['b'],
                allowedAttributes: {}
            })
        }
        else{
            sanitizedInput[key] = input[key]
        }
    })

    return sanitizedInput
}