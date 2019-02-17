import React from "react";


const RenderCity = (props) => {

    if(typeof props.Weatherplace.place.length !== "undefined" && props.Weatherplace.place.length !== ""){
        return props.Weatherplace.place.slice(0, 1).map((objectss,ind) =>{
            const validTime = new Date(objectss.validTime);
            var temparature = objectss.parameters.find( temp => temp.name === 't');
            var pressure = objectss.parameters.find( temp => temp.name === 'msl');
            var humidity = objectss.parameters.find( temp => temp.name === 'r');
            var imgNr = objectss.parameters.find( temp => temp.name === 'Wsymb2');

             return(

                    <div className = "header" key = {ind}>

                        <div className = "header-top">
                            <h2>{props.Weatherplace.latlong.name} Weather</h2>
                        </div>
                        <div className = "header-body">
                            <p>Date : <br/> {validTime.toUTCString()}</p><br/>
                            <p>Temperature :<br/> {temparature.values[0]}&deg;C <img src={`https://www.smhi.se/startpage/images/WPT-icons/weathersymbols/80x60/day/${imgNr.values[0]}.png?v=1545133432571&proxy=wpt-abc`} alt="weather-icon"/></p><br/>
                            <p>Pressure (hPa) : <br/>{pressure.values[0]}</p><br/>
                            <p>Humidity (%) : <br/>{humidity.values[0]}</p><br/>
                        </div>

                    </div>

                    )

                }
            );
        }else{
            return null;
        }

};

class CurrentWeather extends React.Component {

    render() {
        if(typeof this.props.onWeatherplace.place.length !== "undefined" && this.props.onWeatherplace.place.length !== ""){
            return (
                <div>
                    <RenderCity Weatherplace={this.props.onWeatherplace}></RenderCity>
                </div>
            );
        }else{
            return null;
        }
    }


}

export default CurrentWeather;
