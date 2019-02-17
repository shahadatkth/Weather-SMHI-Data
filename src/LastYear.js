import React from "react";
import LatestMonthTemp from "./LatestMonthTemp";

 const LastYear = (props)=> {
         if(typeof props.onWeatherplace !== "undefined" && props.onWeatherplace !== ""){
             return (
                 <div className = "header-top">
                     <h2>Last Year Forcast</h2>

                     <table className="table table-hover">
                         <thead>

                         <tr>
                             <th>Time</th>
                             <th>Temp<br/>&deg;C</th>

                         </tr>
                         </thead>
                         <tbody>
                         <LatestMonthTemp Weatherplace={props.onWeatherplace}></LatestMonthTemp>

                         </tbody>
                     </table>
                 </div>
             );
         }else{
             return null;
         }

};
export default LastYear;