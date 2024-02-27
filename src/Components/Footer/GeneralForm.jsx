import { useFormik } from "formik";
import axios from 'axios';
import { useState } from "react";
import { FormVAlidation } from "./FormVAlidation";
import { FaHandshake } from "react-icons/fa6";


const onSubmit = async(values,action) =>{
    console.log(values)
    const response = axios.post('https://sheet.best/api/sheets/bec1321d-698f-4456-b383-2fe80c719132',values).catch((err)=>{
        if(err && err.response) seterroe1(err.response.data.message);
    });
    await new Promise((resolve)=>setTimeout(resolve,2000))
    action.resetForm()
}



export const GeneralForm = () => {
    const [erro1, seterroe1] = useState(null);

    const{values, handleChange, handleBlur, touched, isSubmitting, handleSubmit, errors} = useFormik({
        initialValues:{
            Name: '',
            Email: '',
            Message: '',
        },
        validationSchema: FormVAlidation,
        onSubmit

    })
    return (
        <>
        <form autoComplete="off" className="F-Form" onSubmit={handleSubmit}>
            <div className="info">
            <input type="text" name="Name" className={errors.Name && touched.Name ? "error" : 'input'} placeholder="Name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.Name}
            />
            <p className={errors.Name  && touched.Name ? 'errorPara' : 'NoErrorPara'}>{errors.Name}</p>
            <input
                type="email"
                name="Email"
                className={errors.Email && touched.Email ?"error" : 'input'}
                placeholder="Email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.Email}
            />
            <p className={errors.Email  && touched.Email ? 'errorPara' : 'NoErrorPara'}>{errors.Email}</p>
            </div>
            <textarea
            name="Message"
            id=""
            cols="30"
            rows="5"
            className={errors.Message && touched.Message ?"error" : 'input'}
            placeholder="Message"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.Message}
            ></textarea>
            <div className= {isSubmitting ? 'SucssMessage' : 'NoSucssMessage'}>
                <p className="SucssPara">Thanks for Messaging Me...!</p>
                <p className="handshake"><FaHandshake /></p>
            </div>
            <p className={errors.Message  && touched.Message ? 'errorPara' : 'NoErrorPara'}>{errors.Message}</p>
            <button type="submit" className="btn" disabled={isSubmitting}>
                Submit
            </button>
        </form>
        </>
    );
};
