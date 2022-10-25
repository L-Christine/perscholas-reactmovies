import {useState} from 'react'

const Form = (props) => {
    const {movieSearch} = props

    //state to hold the form data
    const [formData, setFormData] = useState({searchTerm: ''})//can have more than one: {searchTerm: '', name: '',} then add input to the form

    // //another way
    // const [searchTerm, setSearchTerm] = useState({
    //     name: '',
    //     lastName: '',
    //     dob: ''
    // })

    // //another way
    // const[name, setName] = useState('')
    // const [lastName, setLastName] = useState('')
    // const [dob, setdob] = useState('')

    //function when form is changed
    
    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value}) //...is spread data = what's inside useState({})
    }

    const handleSubmit = (e) => {
        e.preventDefault() //stop the form from refreshing the page
        movieSearch(formData.searchTerm)
        setFormData({searchTerm:''})
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type='text' value={formData.searchTerm} onChange={handleChange} name="searchTerm" required/>

                <input type='submit' value='search' /> 
            </form>
        </div>
    )
}

export default Form;