import { useState } from "react";
import validate from "./Validation";



const Form = (props) => {

    const [info, setInfo] = useState({
        email: "",
        password: ""
    });

    const [errors, setErrors] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInfo({
            ...info,
            [name]: value
        });
        setErrors(
            validate({
                ...info,
                [name]: value
            })
        )
    };

    const handleSubmit = (event) => {
        event.preventDefault()
        props.login(info)
    }


    return (

        <form onSubmit={handleSubmit}>
            <div>
                <label>Email:  </label>
                <input type='text' name='email' autoComplete="off" onChange={handleChange} value={info.email} />
                {errors.email !== "" ? <p>{errors.email}</p> : ""}
            </div>
            <div>
                <label>Password:  </label>
                <input type='password' name='password' autoComplete="off" onChange={handleChange} value={info.password} />
                {errors.password !== "" ? <p>{errors.password}</p> : ""}
            </div>
            <button>Submit</button>
        </form>

    )
}

export default Form;