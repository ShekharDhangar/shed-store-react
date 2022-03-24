import axios from "axios"; 
const useSignUp = async () => {
    try {
      const response = await axios.post(`/api/auth/signup`, {
        firstName: "Shekhar",
        lastName: "Dhangar",
        email: "shekhardhangar@yahoo.com",
        password: "shekhardhangar",
      });
      // saving the encodedToken in the localStorage
      localStorage.setItem("token", response.data.encodedToken);
    } catch (error) {
      console.log(error);
    }
  };

  export {useSignUp};