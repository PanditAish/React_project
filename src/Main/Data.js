let users = [
  {
     role: 'admin',
     email: 'shreyasmahamuni@gmail.com',
     password: '123456',
  },
  {
    role: 'techsupport',
    email: 'testing@gmail.com',
    password: '123456',
 },
 {
    role: 'user',
    email: 'aishpandit@gmail.com',
    password: '123456',
 },
]

export const addUser = (newUser, setUserData) =>{
   users.push(newUser);
   setUserData(users);
   localStorage.setItem("userData", JSON.stringify(users));
   console.log('all userdata ',users);
}

export default users;