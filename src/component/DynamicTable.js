
import { useSelector } from "react-redux";
import { data1 } from "./db1";

const DynamicTable = () => {
    const products = useSelector((state)=>state.productData)
    

  return (
    <>
      <table className="table " style={{maxWidth:'93rem'}}>
        <thead>
            <tr>
            {data1.colHead.map((col) => {
            return (
                <th scope="col">{col.header}</th>
            );
          })}
            </tr>
        </thead>
        <tbody>
        { products.map((value, index) => {
            return (
              <tr key={index}>
              {data1.colHead.map((col) => {
            return (
                <td>{value[col.value]}</td>
            );
          })}
             
              </tr>
            );
          })}
    
          {/* {userData.tableData.map((value, index) => {
            return (
              <tr key={index}>
              {data1.colHead.map((col) => {
            return (
                <td>{value[col.value]}</td>
            );
          })}
             
              </tr>
            );
          })} */}

        </tbody>
      </table>
    </>
  );
};

export default DynamicTable;
