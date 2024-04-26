import React from "react";

const GetData = async (): Promise<any[]> => {
  try {
    const res = await fetch("https://restcountries.com/v3.1/all");
    const data = await res.json();
    return data;
  } catch (error) {
    throw new Error("Error from getting data");
  }
};

export { GetData };
