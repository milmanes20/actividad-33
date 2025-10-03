
// Valida que el usuario tenga al menos 3 caracteres (sin espacios al inicio/fin)
export const validarusuario = (userName) => {  

    const withoutSpaces = userName.trim();
    if(withoutSpaces.length > 2){
      return true;
    }else{
      return false;
    }
    };
    
    
  
  // Valida que el email tenga formato correcto
  export const validarEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email.trim());
  };
  
  // Valida que la contraseña tenga al menos 6 caracteres
  export const validarPassword = (password) => {

    const withoutSpaces = password.trim();
    
    const passwordAsArray = withoutSpaces.split("");
   
     const hasNumber = passwordAsArray.some((character) => {
   
       if (!isNaN(character)){
         return true;
       }else{
         return false;
       }
     } );
    
  //validamos la extesion y que haya al menos un numero
if (withoutSpaces.length > 5 && hasNumber){
    return true;
  }else{
    return false;
  }
  };
  