import React, {useState} from 'react';
import {makeStyles, TextField, Button, Divider} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
    comentario: {
        width: '70vh',
    }
}));

const initialInputs = {
    nombre:'',
    email:'',
    asunto:'',
    comentario:''
}


const Contactform = () => {

    const classes = useStyles();

    const [inputs, setInputs] = useState(initialInputs);
    const [errors, setErrors] = useState({});

    const validateInputs = (input) => {
        let errors = {};
        let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
        let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
        let regexComments = /^.{1,255}$/;

        if (!input.nombre.trim()) {
            errors.nombre = "El campo 'Nombre' es requerido";
        } else if (!regexName.test(input.nombre.trim())) {
            errors.nombre = "El campo 'Nombre' sólo acepta letras y espacios en blanco";
        }

        if (!input.email.trim()) {
            errors.email = "El campo 'E-mail' es requerido";
        } else if (!regexEmail.test(input.email.trim())) {
            errors.email = "El campo 'Email' es incorrecto";
        }

        if (!input.asunto.trim()) {
            errors.asunto = "El campo 'Asunto' es requerido";
        }

        if (!input.comentario.trim()) {
            errors.comentario = "El campo 'Comentarios' es requerido";
        } else if (!regexComments.test(input.comentario.trim())) {
            errors.comentario =
            "El campo 'Comentarios' no debe exceder los 255 caracteres";
        }

        return errors;
    }

    const handleInput = (e) => {
        const { name, value } = e.target

        setInputs({
            ...inputs,
            [name]: value
        })
    }
    
    const handleBlur = (e) => {
        handleInput(e)
        setErrors(validateInputs(inputs))
        
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        /* seteamos los errores para evaluar q no tenga errores */
        setErrors(validateInputs(inputs))
        //object.keys devuelve Un array de strings que representan toda las propiedades  del objeto
        // evalua si el objeto errores tine algun error
        if (Object.keys(errors).length === 0) {

            alert('El mensaje se envio correctamente')
            //si no hay errores hago el fetch con las options para un envio por post
            fetch('https://formsubmit.co/ajax/gusacosta.87@gmail.com', {
                method: 'POST',
                body: JSON.stringify(inputs),
                headers: {
                    'content-type':'application/json',
                    Accept: 'application/json'
                }
            })
            //hago el then con el response y mando un objeto de errores si es q lo hay y seteo el formulario a los valores iniciales
            .then((res)=> {
                res.ok
                ? res.json()
                : Promise.reject({
                    err: true,
                    status: res.status || "00",
                    statusText: res.statusText || "Ocurrió un error",
                })
            })

            .catch((error) => error);
            setInputs(initialInputs)

        }else{
            return
        }
        
    }

    return (
        <>
            <h2>Formulario de contacto</h2>

            <form onSubmit={handleSubmit} className={classes.root} noValidate autoComplete="off">
            
            <TextField name='nombre' label="Nombre" variant="outlined" onChange={handleInput} onBlur={handleBlur} helperText={errors.nombre } error={errors.nombre}/>

            <TextField name='email' label="E-Mail" variant="outlined" inputMode='email' onChange={handleInput} onBlur={handleBlur} helperText={errors.email } error={errors.email} />
            <Divider/>
            <TextField name='asunto' label="Asunto" variant="outlined" onChange={handleInput} onBlur={handleBlur} helperText={errors.asunto } error={errors.asunto} />
            <TextField name='comentario' className={classes.comentario} multiline={true} rows={5} label="Comentario" variant="outlined" inputMode='text' onChange={handleInput} onBlur={handleBlur} helperText={errors.comentario } error={errors.comentario} />
            
            <input type="submit" value='Enviar' />

            </form>
        </>
    );
}

export default Contactform;
