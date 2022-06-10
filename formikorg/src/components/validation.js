import * as yup from 'yup';

const validations = yup.object().shape({
    firstName: yup.string().required('Zorunlu Alan'),
    email: yup.string().email('Geçerli bir email giriniz').required(),
    password: yup.string().min(5).required(),
    passwordConfirm:yup.string().oneOf([yup.ref('password')], 'Parolalar uyuşmuyor')
  });

  export default validations;
  