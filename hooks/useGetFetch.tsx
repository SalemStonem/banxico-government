import { useState, useEffect } from "react";

export const useFetch = () => {
  const [stateData, setStateData] = useState({ message: "" });

  const sendingData = async (data) => {
    const url =
      "https://www.banxico.org.mx/SieAPIRest/service/v1/series/SG46,SG47,SG44,SG71,SG73,SG74,SG48,SG49,SG69,SG52,SG75,SG76,SG53,SG42,SG45,SG72/datos/2019-01-01/2021-02-01?token=${token}";
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      credentials: "include",
      mode: "cors",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    const resp = await response.json();
    // console.log('resp: ', resp);
    setStateData({
      message: resp.message,
    });
  };
  // console.log('state: ', stateData);
  return [stateData, sendingData];
};
