import React from "react";

const defaultValue = {
  locale: 'ar',
  setLocale: () => {} 
}

export default React.createContext(defaultValue);