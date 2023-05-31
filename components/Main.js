import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { useRoute } from "../router";

import { authStateCahngeUser } from "../redux/auth/authOperations";

export const Main = () => {


 

  //const { stateChange } = useSelector((state) => state.auth);
  const { state } = useSelector((state) => state);
  console.log("fffff"+state);
  const dispatch = useDispatch();
   console.log('$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$');
  useEffect(() => {
    console.log('$$$$$');
    dispatch(authStateCahngeUser());
    console.log('%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%');
  }, []);

  const routing = useRoute(state);
  useEffect(() => {}, []);
  return <NavigationContainer>{routing}</NavigationContainer>;
};

// export default Main;