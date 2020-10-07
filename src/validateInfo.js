export default function validateInfo(values) {
  let errors = {};

  if (!values.username.trim()) {
    errors.username = "firstname required";
  }

  //Email

  if (!values.email) {
    errors.email = "Email Required";
  } else if (
    !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9.-]+\.[A-Z]{2,}$/i.test(
      values.email
    )
  ) {
    errors.email = "Email address invalid";
  }

  if (!values.phone) {
    errors.phone = " Phone Number Required";
  } else if (values.phone.length < 3) {
    errors.phone = "Enter valid phone mumber";
  }

  if (!values.password) {
    errors.password = "password Required";
  } else if (values.password.length < 8) {
    errors.password = "password needs to be 8 characters or more";
  }

  if (!values.password) {
    errors.password = "password Required";
  } else if (values.password2 !== values.password) {
    errors.password2 = "password does not match";
  }
  return errors;
}
