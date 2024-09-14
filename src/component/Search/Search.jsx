import { useEffect, useState } from "react"
import { SearchInput } from "../SearchInput/Searchinput"
import './Search.css'
import { SearchList } from "../SearchList/SearchLIst"
import axios from "axios";

export const Search=()=>{
  const[userInput ,setUserInput]=useState('')
  const[searchList,setSearchList]=useState([])

  const api_Url="https://api.themoviedb.org/3/search/movie?api_key=d3449ff6ec0c027623bf6b6f5fff78b3&language=en-US&page=1&include_adult=false";

  const fetchApi=async()=>{
    try{
      const response= await axios(api_Url,{
        params:{
          query:userInput
        },
      });

      setSearchList(response.data.results);
    }
    catch(error){
      console.log(error)
    }


  };

  useEffect(()=>{
    const timeout = setTimeout(() => {

      if(userInput){
        fetchApi();
      }},500)

      return()=>{
        clearTimeout(timeout);   
    }

  },[userInput])

 
  const handleUserInput=(event)=>{

    setUserInput(event.target.value)
  }
  const clearInput=()=>{
    setUserInput('')
    setSearchList([])
  }

  return(
    <>
    <div className="main-contianer">
      <div className="header-contianer">
        <img src="../public/icon.png" alt="" width="50"  height="50"/>
        <h1>Millions of Movies...</h1>

      </div>
      <SearchInput userInput={userInput} handleUserInput={handleUserInput} clearInput={clearInput}/>
      <SearchList searchList={searchList}/>

    </div>
    </>
  )
}