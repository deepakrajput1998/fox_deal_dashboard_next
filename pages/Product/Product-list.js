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




const Productlist = () => {
    const [category, setCategory] = useState('')
  const { data } = useDemoData({
    dataSet: "Commodity",
    rowLength: 100,
    maxColumns: 6,
  });
  console.log(data.rows);
  let datas = data.rows.map((datai) => {
    return { ...datai };
  });
  useEffect(() => {
     if(localStorage.getItem('isEdit')){
         localStorage.removeItem('isEdit')
     }
  }, [])
 const renderDetailsButton = (params) => {
       const onClick1 = (e) => {
        e.stopPropagation(); // don't select this row after clicking
       }
       const onClick2 = (e) => {
        e.stopPropagation(); // don't select this row after clicking
        localStorage.setItem('isEdit',true)
       }
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
       href='/Product/edit'
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
let columns=data.columns.map((data)=>{
    return {...data,
        headerAlign:'center',
        headerFontWeight:'bold',
    width:200}
})


 columns=  [...columns, {
        field: 'action',
        headerName: 'Action',
        width: 250,
        fontWeight:'bolder',
        renderCell: renderDetailsButton,
        disableClickEventBubbling: true,
    }]


  return (
    <div>
      <div style={{ display: "flex" }}>
        <h1 style={{ display: "inline" }}>Product List</h1>{" "}
        <div
          style={{
            display: "inline-block",
            width: "20%",
            marginLeft: "50%",
            marginBlock: "15px",
          }}
        >
          {" "}
          <Box sx={{ maxWidth: "200px" }}>
            <FormControl fullWidth>
              <InputLabel
                style={{ width: "100%" }}
                id="demo-simple-select-label"
              >
                Category
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Category"
                name="category"
                value={category}
                onChange={(e) => {
                  setCategory(e.target.value);
                }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Food{"     "}</MenuItem>
                <MenuItem value={20}>Footware{"  "}</MenuItem>
                <MenuItem value={30}>Socks{"  "}</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>
    
          <Button
            href="/Product/Add"
            disabled={category === ""}
            onClick={()=>{
                localStorage.setItem("isEdit",false);
            }}
            color="success"
            style={{ height: "55px", marginBlock: "1.2%" }}
            variant="outlined"
            startIcon={<AddCircle />}
          >
            Add More
            {category===''&&'(Select Category)'}
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

export default Productlist
