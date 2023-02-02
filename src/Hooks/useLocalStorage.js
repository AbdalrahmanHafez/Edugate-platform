import { useEffect, useState } from "react";

export default function useLocalStorage(key, fallbackValue = undefined) {
  // assumes value to be json object
  const [value, setValue] = useState(() => {
    const jsonValue = localStorage.getItem(key);
    if (jsonValue == null)
      return typeof fallbackValue === "function"
        ? fallbackValue()
        : fallbackValue;
    else return JSON.parse(jsonValue);
  });

  useEffect(() => {
    if (value === undefined) {
      localStorage.removeItem(key);
      return;
    }

    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
}
