import axios from "axios";

//Вход
export const postSignIn = async (login: string, password: string) => {
  try {
    const response = await axios.post(
      "https://easydev.club/api/v1/auth/signin",
      {
        login,
        password,
      }
    );
    console.log(response);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error + "Регестрация не прошла");
    throw error;
  }
};

// Регестрация

export const postSignUp = async (
  email: string,
  login: string,
  password: string,
  phoneNumber: string,
  username: string
) => {
  try {
    const response = await axios.post(
      "https://easydev.club/api/v1/auth/signup",
      {
        email,
        login,
        password,
        phoneNumber,
        username,
      }
    );
    console.log(response);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

//Выход из системы

export const postLogOut = async () => {
  try {
    await axios.post(
      "https://easydev.club/api/v1/user/logout",
      {},
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );

    localStorage.removeItem("token");
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getUser = async () => {
  try {
    const response = await axios.get(
      "https://easydev.club/api/v1/user/profile",
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    console.log(response);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
