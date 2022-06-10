import React from 'react';
import { useFormik } from 'formik';
import validationSchema from './validation';

function Signup() {
    const {handleSubmit, handleChange,handleBlur, values,errors, touched} = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            password: '',
            passwordConfirm:'',
            email: '',
            gender: 'female',
            hobies:[],
            country:"",
        },
        onSubmit: (values) => {
          console.log(values);
        },
        validationSchema
      });

      console.log(errors);
  return (
    <div>
        <h1>Sign Up</h1>
    
        <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input name='firstName' value={values.firstName} 
        onChange={handleChange} 
        onBlur={handleBlur}
        />
        {errors.firstName && touched.firstName && <div className="errorsSytle">{errors.firstName}</div>}
        <br/>
        <br/>
        <label htmlFor="lastName">Last Name</label>
        <input name='lastName' value={values.lastName} onChange={handleChange} />
    
        <br/>
        <br/>
        <label htmlFor="email">Email</label>
        <input name='email' value={values.email} 
        onChange={handleChange} 
        onBlur={handleBlur} />
        {errors.email && touched.email && <div className='errorsSytle'>{errors.email}</div>}
        <br/>
        <br/>
        <label htmlFor="password">Password</label>
        <input name='password' value={values.password} onChange={handleChange} />
        {errors.password && <div className='errorsSytle'>{errors.password}</div>}
        <br/>
        <br/>
        <label htmlFor="passwordConfirm">Password Confirm</label>
        <input name='passwordConfirm' value={values.passwordConfirm} onChange={handleChange} />
        {errors.passwordConfirm && <div className='errorsSytle'>{errors.passwordConfirm}</div>}
        <br/>
        <br/>
        
        <span>Male</span>
        <input type="radio" name='gender' value="male" onChange={handleChange} />
        <span>Female</span>
        <input type="radio" name='gender' value="female" checked={values.gender === "female"}  onChange={handleChange} />

        <br/>
        <br/>

        <div>
        <input type="checkbox" name='hobies' value="Volleyball" onChange={handleChange}/>
        Volleyball
        </div>
        <div>
        <input type="checkbox" name='hobies' value="Cinema" onChange={handleChange}/>
        Cinema
        </div>
        <div>
        <input type="checkbox" name='hobies'   value="Photografy"  onChange={handleChange}/>
        Photografy
        </div>
        <br/>
        <br/>

        <select name='country' value={values.country}  onChange={handleChange}>
        <option value="tr" >Turkey</option>
        <option value="en" >England</option>
        <option value="usa" >ABD</option>
        </select>
        <br/>
        <br/>
        <button type="submit">Submit</button>
        <br/>
        <br/>
        {JSON.stringify(values)}
    </form>
    </div>
  );
}

export default Signup;
