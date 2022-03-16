import { category } from '../enums/enums'

function getCategoryNameUsingEnumKey(key) {
    
    let resp = ""
    switch (key) {    
        case "1":
           resp = category[1]
           break
        case "2": 
            resp = category[2]
            break
        case "3": 
        resp = category[3]
            break
        default:
            resp = category[4]
        


    }
    return resp
    
}

export { getCategoryNameUsingEnumKey}