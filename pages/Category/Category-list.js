import React, { useEffect, useState } from 'react'
import { DataGrid, GridToolbar , GridColDef } from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';
import {
  Button,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Box,
  IconButton
} from "@mui/material";
import Link from 'next/link'
import {
  AddCircle,
  Delete as DeleteIcon,
  Edit as EditIcon,
} from "@mui/icons-material";
import { useQuery } from '@apollo/client';
import { GET_ALL_CATEGORY } from '../../query';
import { getApolloClient } from '../_app';




const Categorylist = (props) => {
   const renderDetailsButton = (params) => {
     const onClick1 = (e) => {
       e.stopPropagation(); // don't select this row after clicking
     };
     const onClick2 = (e) => {
       e.stopPropagation(); // don't select this row after clicking
       localStorage.setItem("isEdit", true);
     };

     return (
       <strong>
         <IconButton
           onClick={(e) => {
             onClick1(e);
           }}
           aria-label="delete"
         >
           <DeleteIcon />
         </IconButton>
         <IconButton
           href="/Category/edit"
           onClick={(e) => {
             onClick2(e);
           }}
           aria-label="delete"
         >
           <EditIcon color="success" />
         </IconButton>
       </strong>
     );
   };

    const [columns, setColumns] = useState([
      {
        field: "id",
        headerAlign: "left",
        headerName: "ID",
        width: 250,
        disableClickEventBubbling: true,
      },
      {
        field: "fld_category_name",
        headerAlign: "left",
        headerName: "Category",
        width: 250,
        disableClickEventBubbling: true,
      },
      {
        field: "fld_isActive",
        headerAlign: "left",
        headerName: "Status",
        width: 250,
        disableClickEventBubbling: true,
      },
      {
        field: "action",
        headerAlign: "left",
        headerName: "Action",
        width: 250,
        renderCell: renderDetailsButton,
        disableClickEventBubbling: true,
      },
    ]);

  console.log(props.category);
   const { loading, error, data } = useQuery(GET_ALL_CATEGORY);
  //  if(!loading){
  //    console.log(data)
  //  console.log(error)
  //  }
   

  //  if (error) {
  //    return {
  //      notFound: true,
  //    };
  //  } else {
  //    console.log(data);
  //  }
   console.log(props.getAllCategory)
  let datas = props.category&&props.category.map(row=>{
    return {
      id: row._id,
      fld_isActive: row.fld_isActive,
      fld_category_name: row.fld_name,
    };
  })
  useEffect(() => {
     if(localStorage.getItem('isEdit')){
         localStorage.removeItem('isEdit')
     }
  }, [])
  


  return (
    <div>
      <div style={{ display: "flex" }}>
        <h1 style={{ display: "inline" }}>Category List</h1>{" "}
     
        <Button
          href="/Category/Add"
         
          onClick={() => {
            localStorage.setItem("isEdit", false);
          }}
          color="success"
          style={{ height: "55px", marginBlock: "1.2%",marginLeft:'71%' }}
          variant="outlined"
          startIcon={<AddCircle />}
        >
          Add More
          
        </Button>
      </div>
      <div
        style={{
          height: 600,
          width: "98%",
          display: "flex",
          marginInline: "1%",
        }}
      >
        <div style={{ flexGrow: 1 }}>
          <DataGrid
            columns={columns}
            rows={datas}
            components={{
              Toolbar: GridToolbar,
            }}
            initialState={{
              filter: {
                filterModel: {
                  items: [
                    {
                      columnField: "commodity",
                      operatorValue: "contains",
                      value: "rice",
                    },
                  ],
                },
              },
            }}
          />
        </div>
      </div>
    </div>
  );
}
export async function getStaticProps(context) {
  
  const apolloClient = getApolloClient();
   const { data ,loading} = await apolloClient.query({
     query: GET_ALL_CATEGORY,
   });
  
 console.log(await apolloClient.query({
     query: GET_ALL_CATEGORY,
   }))
if(loading){
  return {
    notFound:true
  }
}

   if(!loading)
  return {
    props: {
      category: data.getAllCategory,
    }, // will be passed to the page component as props
  };

}

export default Categorylist
