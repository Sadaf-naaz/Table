
  import { useEffect } from "react";
  import './style.css'
const TableData=[
    {id:1, fullName:"Noor Khan", age:25, city:"Patna"},
    {id:2, fullName:"Rapsan Jani", age:26, city:"Noida"},
    {id:3, fullName:"Monika Singh", age:18, city:"New Delhi"},
    {id:4, fullName:"Sunil Kumar", age:22, city: "Jaipur"},
    {id:5, fullName:"Kajol Kumari", age: 21, city: "Chennai"}
]

function App(){
// return (
//     <div className="table-container">
//     <table>
//       <thead>
//         <tr>
//           {Object.keys(TableData[0]).map((key) => (
//             <th key={key}>{key}</th>
//           ))}
//         </tr>
//       </thead>
//       <tbody>
//         {TableData.map((data, index) => (
//           <tr key={index}>
//             {Object.values(data).map((value, index) => (
//               <td key={index}>{value}</td>
//             ))}
//           </tr>
//         ))}
//       </tbody>
//     </table>
//     </div>
//   );


// Extracting all unique keys from the JSON data
const allKeys = Array.from(
  new Set(TableData.flatMap((data) => Object.keys(data)))
);

return (
  <div className="table-container">
    <table>
      <thead>
        <tr>
          {allKeys.map((key) => (
            <th key={key}>{key}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {TableData.map((data, index) => (
          <tr key={index}>
            {allKeys.map((key) => (
              <td key={key}>{data[key] || '-'}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
};



  


export default App;
