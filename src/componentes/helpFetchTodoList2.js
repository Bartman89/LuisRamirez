const helpFetchTodoList = () =>{


    const URL = "https://web-production-33d8.up.railway.app"

    const customFetch = (endpoint, options ={})=>{

        options.method = options.method  || "GET"

        options.body = JSON.stringify(options.body)

        options.headers= {
            "content-type" : "application/json"
        }

        return fetch (`${URL}/${endpoint}`, options)
        .then (response =>{
            return response.ok 
            ? response.json() 
            : Promise.reject()

        })

        .catch(error =>{
            return {
                error: true,
                statusText:"Hubo un error en la peticion"
,
            }
        })

    }

    
        const get = (endpoint)=>{
            return customFetch(endpoint)
        }

        const post =(endpoint,options)=>{
            return customFetch(endpoint, options)
        }

        const put =(endpoint, options, id)=>{
            return customFetch( `${endpoint}/${id}`,options)

        }

        const eliminar = (endpoint,options,id) =>{
            return customFetch( `${endpoint}/${id}`,options)
        }

        return {get, post, put, eliminar}
}






export default helpFetchTodoList