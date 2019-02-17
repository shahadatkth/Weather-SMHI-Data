import React from "react";

class LatestMonthTemp extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data:{},
        isLoading:false};

    }
    componentDidMount(){
        this.setState({isLoading:true});
        fetch('https://opendata-download-metobs.smhi.se/api/version/1.0/parameter/1/station.json')
            .then(response => response.json())
            .then(data => {console.log(data);

                console.log(data.station.find( temp => temp.name === this.props.Weatherplace.name));
                let stationName = data.station.find( temp => temp.name === this.props.Weatherplace.name);

                return fetch(`https://opendata-download-metobs.smhi.se/api/version/1.0/parameter/1/station/${stationName.id}/period/latest-months/data.json`);

            })
        .then(function(response) {

            return response.json();
        })
            .then(data=> {
            console.log(data);
                this.setState({ data:data,
                isLoading:false});

        })
    }

    render() {
        if(this.state.isLoading){
            return (

                <tr><td>loading...</td></tr>
            );

        }

        if(typeof this.state.data.value!=="undefined" && this.state.data.value.length > 0 ){

            return this.state.data.value.slice(0, 200).map((objectss, ind) => {
                let validTime = new Date(objectss.date);
                let temparature = objectss.value;

                return(
                    <tr key={ind}>
                        <td>{validTime.toUTCString()}</td>
                        <td>{temparature}&deg;C</td>

                    </tr>
                );

            });
        }else {
            return null;
        }

    }

}

export default LatestMonthTemp;
