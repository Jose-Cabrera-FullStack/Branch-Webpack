import React from 'react';
import Safe from "react-safe"

const Loader = () => {
  
  return (
    <Safe.script>{
        `let loader = document.getElementById('loader');
            window.addEventListener("load", function (event) {
            loader.classList.remove('loading');
            loader.classList.add('loaded');
            document.body.classList.add('imgloaded');`
    }</Safe.script>
  )

};

export default Loader;


