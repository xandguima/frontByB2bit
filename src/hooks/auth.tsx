import React, { createContext, useContext,useState, ReactNode,useEffect} from "react";
import Api from '../services/api';
import Cookies from "js-cookie";

type AuthContextType = {
  signIn: (credentials: { email: string; password: string }) => Promise<void>;
  signOut: () => void;
  user: any; 
};  

const AuthContext = createContext<AuthContextType | undefined>(undefined);

type AuthProviderProps = {
  children: React.ReactNode;
};

//envolve todas as rotas no contexto, compartilhando todos os dados com as rotas filhas

function AuthProvider({ children }: AuthProviderProps) {

  const [data, setData] = useState({});

  async function signIn({ email, password }:{email: string; password: string}) {
    const api = new Api();
    const responsePost = await api.post('/login/',  email, password );
    console.log("responsePost do signIn: ", responsePost.tokens.access);
    const accessToken = responsePost.tokens.access;
    console.log("accessToken do signIn: ", accessToken);
    Cookies.set('accessToken', accessToken);
    
    const responseGet = await api.get('/profile/');
    
    const user = responseGet;
    console.log("user do get sing in: ", user);
    const { email: userEmail, avatar: { high } ,name} = user;
    
    const userFiltered = {email: userEmail, high, name};
    
    Cookies.set('user', JSON.stringify(userFiltered));
    console.log("cookie - accessToken: ", Cookies.get('accessToken'));
    console.log("cookie - user: ", Cookies.get('user'));


    setData({userFiltered, accessToken});


  }

  async function signOut() {
    Cookies.remove('user');
    Cookies.remove('accessToken');
  
    setData({});
  }


  return (
    <AuthContext.Provider value={{signIn,signOut, user: data} }>
      {children}
    </AuthContext.Provider>
  )
}

//utiliza o contexto
function useAuth():AuthContextType {
  const context = useContext(AuthContext);
  if(!context) { 
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

export { AuthProvider, useAuth }