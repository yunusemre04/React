import { useFormik } from 'formik'
import React from 'react'
import { formikScheme } from '../schemes/formikSchmes';

function FormComponent() {

    const formik = useFormik({
        initialValues: {
            email: '',
            age: '',
            password: '',
            rePassword: '',
            term: false
        },
        onSubmit: (values, action) => {
            console.log(values);
            setTimeout(() => {
                action.resetForm()
            }, 1000)
        },
        validationSchema: formikScheme,

    });

    return (
        <form className='form-group form' onSubmit={formik.handleSubmit}>
            <div className='mt-2'>
                <label className='form-label'>E-mail</label>
                <input type='text' className='form-control '
                    value={formik.values.email} onChange={formik.handleChange} id='email'></input>
                {formik.errors.email && <div className='h6 text-danger mt-1'>{formik.errors.email}</div>}

            </div>
            <div className='mt-2'>
                <label className='form-label'>Age</label>
                <input type='text' className='form-control'
                    value={formik.values.age} onChange={formik.handleChange} id='age'></input>
                {formik.errors.age && <div className='h6 text-danger mt-1'>{formik.errors.age}</div>}
            </div>
            <div className='mt-2'>
                <label className='form-label'>Password</label>
                <input type='text' className='form-control'
                    value={formik.values.password} onChange={formik.handleChange} id='password'></input>
                {formik.errors.password && <div className='h6 text-danger mt-1'>{formik.errors.password}</div>}
            </div>
            <div className='mt-2'>
                <label className='form-label'>Re-Password</label>
                <input type='text' className='form-control'
                    value={formik.values.rePassword} onChange={formik.handleChange} id='rePassword'></input>
                {formik.errors.rePassword && <div className='h6 text-danger mt-1'>{formik.errors.rePassword}</div>}
            </div>
            <div className='d-flex mt-2'>
                <input
                    type='checkbox'
                    className='form-check-lg ms-1 '
                    checked={formik.values.term}
                    onChange={formik.handleChange}
                    id='term'
                    name='term'>
                </input>
                <label className='form-label ms-2   mt-1'>Agree Privite Policy</label>

            </div>
            {formik.errors.term && (<div className='h6 text-danger '>{formik.errors.term}</div>)}
            <div className='text-center'>
                <button type='submit' className='btn btn-light'>Submit</button>
            </div>
        </form>
    )
}

export default FormComponent