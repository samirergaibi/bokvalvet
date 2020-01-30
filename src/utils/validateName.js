function validateName(name){
  const regex = /[a-öA-Ö]/;
  return regex.test(name);
};

export default validateName;