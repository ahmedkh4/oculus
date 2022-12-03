import {Input} from 'antd-v3'
import React from 'react';
const { Search } = Input;

 const SearchBar = () => {

  const SearchStyling ={margin:"30px" ,borderRadius:"30px" ,width:"80%" , height:"50px" , textAlign:"center"}
   
  return (
  <>
  <Input style={SearchStyling}  placeholder="search ..." onSearch={value => console.log(value)}  />
  
  </>
  )
}
export {SearchBar}