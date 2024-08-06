import { AuthClient } from '@dfinity/auth-client'
import React, { createContext, useContext, useEffect, useState } from 'react'
import { createActor,canisterId } from 'declarations/car_shop_backend'
const AuthContext=createContext();
const MAX_TIME = BigInt(7 * 24 * 60 * 60 * 1000 * 1000 * 1000);
const IDENTITY_PROVIDER = `http://127.0.0.1:4943/?canisterId=be2us-64aaa-aaaaa-qaabq-cai`;
const defaultOptions={
  createOptions:{
    idleOPtions:{
      disableIdle:true,
    }
  },
  loginOptions:{
    identityProvider:IDENTITY_PROVIDER,
    maxTimeToLIve: MAX_TIME,
  }
}
export const useAuthClient=(options=defaultOptions)=>{


  const[isAuth,setIsAuth]=useState(false);
  const[authUser,setAuthUser]=useState(null);
  const[principal,setPrincipal]=useState(null);
  const[callFunction,setCallFunction]=useState(null);
  const[identity,setIdentity]=useState(null);
  useEffect(()=>{
    AuthClient.create(options.createOptions).then(async(client)=>{
      updateClient(client);

    })
  },[]);
  async function updateClient(client){
    const isAuthenticated=await client.isAuthenticated();
    setIsAuth(isAuthenticated);
    const identity=client.getIdentity();
    setIdentity(identity);
    const principal=identity.getPrincipal();
    setPrincipal(principal);

    setAuthUser(client);

    const actor=createActor(canisterId,{
      agentOptions:{
        identity,
      },
    });
    setCallFunction(actor);
  }
  const login =async()=>{
     await   authUser.login({
      ...options.loginOptions,
      
      onSucess:async()=>{
        await updateClient(authUser);
        window.location.reload();
      
      },
    });
    
  };
  async function logout(){
    await authUser?.logout();
    await updateClient(authUser);
    window.location.reload()
  }
  return {
    isAuth,
    login,
    logout,
    authUser,
    identity,
    principal,
    callFunction
  }
}

export const AuthProvider=({children})=>{
  const auth=useAuthClient();
  return<AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
}
export const useAuth=()=>useContext(AuthContext);