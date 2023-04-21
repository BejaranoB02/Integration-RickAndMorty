const validate = (props) => {
    const errors = {}
    const password = props.password 
    if (/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/.test(props.email)) {
        errors.email = "";
    } else {
        errors.email = "El email no es valido";
    }
    if (props.password.length < 6 || password.length > 10){
        errors.password = "la contraseña debe tener entre 6 y 10 caracteres"
    }
    if (!/\d/.test(password)){
        errors.password = "La contraseña debe tener por lo menos un numero"
    }
    return errors;
}

export default validate