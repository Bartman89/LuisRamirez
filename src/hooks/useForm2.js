import { useState } from "react"

const useForm2 = (initialData, onValidate)=>{
 
    const [form, setForm] = useState(initialData)
    const [loading, setLoading] = useState(null)
    const [errors, setErrors] = useState({})

    const handleChange = (e)=>{
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })

        

    }

    const handleSubmit = (e)=>{
        e.preventDefault()

        let err = onValidate(form)

        //console.log(Object.keys(err).length)

        if (Object.keys(err).length === 0){
            setLoading(true)
            fetch("https://formsubmit.co/ajax/ercblilxqbzorvwalu@nbmbb.com", {
                method: "POST",
                headers: { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(form)
            })
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    
                   data.success === "true" &&  setForm(initialData)
                    
                    setLoading(false)
                })
                .catch(error => {
                    setLoading(false)    
                    console.log(error)});
    
           
        }

        else{
           setErrors(err)
           //console.log(err)
           

            
            }

        
    }

    return {form, errors, loading, handleChange, handleSubmit}
}

export default useForm2