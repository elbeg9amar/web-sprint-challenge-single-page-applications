import * as yup from 'yup'

const formSchema = yup.object().shape({
    username: yup
      .string()
      .min(3, "Username must be at least 3 characters long.")
      .required("Username is Required"),
    size: yup
      .string(),
    special: yup
        .string()
        .min(0, "Add instruction.")
  });

  export default formSchema
