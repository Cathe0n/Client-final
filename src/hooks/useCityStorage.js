import { useCallback, useContext, useState } from "react";
import { GlobalContext } from "../context/globalContext";
import { CITIES_KEY } from "../constants";

const useCityStorage = () => {
  const getStorage = () => {
    const storedHistory = JSON.parse(localStorage.getItem('weatherHistory')) || [];
    return storedHistory;
  };

  const setStorage = (city) => {
    const storedHistory = getStorage();
    const updatedHistory = [...storedHistory, { city }];
    localStorage.setItem('weatherHistory', JSON.stringify(updatedHistory));
  };

  return { getStorage, setStorage };
};

export default useCityStorage;