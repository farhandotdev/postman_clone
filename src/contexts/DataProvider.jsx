import React, {createContext, useState} from 'react'

export const DataContext = createContext(null); 

const DataProvider = ({children}) => {
    const [formData, setFormData] = useState(
        {
            type:'Get',
            url:''
        }
    )
  return (
    <DataContext.Provider value={{formData, setFormData}}>
        {children}
    </DataContext.Provider>
  )
}

export default DataProvider