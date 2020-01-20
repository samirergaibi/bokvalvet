function validatePassword(password) {
  const regex = /.{6,}/;
  return regex.test(password);
}

export default validatePassword;
