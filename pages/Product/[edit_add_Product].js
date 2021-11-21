import React, { useEffect } from 'react'

const Add_editProduct = () => {
     
      let data;
        useEffect(() => {
          if (localStorage.getItem("isEdit")) {
              data = localStorage.getItem("isEdit");
           console.log(localStorage.getItem("isEdit"));
          }
        }, []);
     
    return (
        <div>
           {data}
            HELLO from add edit
        </div>
    )
}

export default Add_editProduct
