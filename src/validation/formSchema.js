import * as yup from 'yup'

const formSchema = yup.object().shape({
    username: yup
      .string()
      .min(3, "Username must be at least 3 characters long.")
      .required("Username is Required"),
    size: yup
      .string()
      .oneOf(['small','medium', 'large','extLarge'], "You must select one"),
    special: yup
        .string()
        .min(0, "Add instruction.")
  });

  export default formSchema
