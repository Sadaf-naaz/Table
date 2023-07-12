
  import { useEffect } from "react";
  import './style.css'
const TableData=[
  {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
  },
    {
    "id": 6,
    "name": "Mrs. Dennis Schulist",
    "username": "Leopoldo_Corkery",
    "email": "Karley_Dach@jasper.info",
    
    "phone": "1-477-935-8478 x6430",
    "website": "ola.org",
    
    },
    {
    "id": 7,
    "name": "Kurtis Weissnat",
    "username": "Elwyn.Skiles",
    "email": "Telly.Hoeger@billy.biz",
    
    "phone": "210.067.6132",
    "website": "elvis.io",
    
    },
    {
    "id": 8,
    "name": "Nicholas Runolfsdottir V",
    "username": "Maxime_Nienow",
    "email": "Sherwood@rosamond.me",
    
    "phone": "586.493.6943 x140",
    "website": "jacynthe.com",
   
    },
    {
    "id": 9,
    "name": "Glenna Reichert",
    "username": "Delphine",
    "email": "Chaim_McDermott@dana.io",
    
    
    },
    {
    "id": 10,
    "name": "Clementina DuBuque",
    "username": "Moriah.Stanton",
    "email": "Rey.Padberg@karina.biz",
    
    "phone": "024-648-3804",
    "website": "ambrose.net",
    
    }
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
// const TableData = JSON.parse(jsonData);

console.log(TableData);
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
