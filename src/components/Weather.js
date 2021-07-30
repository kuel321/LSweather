
import React, { Component } from 'react'
import cloudy8 from '../media/cloudy.svg';
import sunny from '../media/day.svg';
import rainy from '../media/rainy-1.svg';
import Forecast from './Forecast';
import Forecastinterior from './Forecastinside';
import thunderstorm from '../media/rainy-5.svg';
import snow from '../media/rainy-7.svg';


export default class Weather extends Component {
   state = {
        loading: true,
        weatherResult: null,
        cloudID: null,
        clearSkies: null,
        weeklyData: null,
        weeklyClouds: null,
        newsData: 1,
      };
      
      async componentDidMount() {
        const url = "https://api.openweathermap.org/data/2.5/weather?zip=25302&units=imperial&appid=9c689f2694b973dd8c9b43e659987689";
        const urlweek = "https://api.openweathermap.org/data/2.5/onecall?lat=38.34&lon=-81.63&units=imperial&exclude=hourly&appid=9c689f2694b973dd8c9b43e659987689";
        const responseweek = await fetch(urlweek);
        const response = await fetch(url);
        const urlnews = "https://newsapi.org/v2/top-headlines?country=us&apiKey=9b9bf1c8aa7c4d128e7cae57b671be27";
        const responsenews = await fetch(urlnews);
        const datanews = await responsenews.json();
        const dataweek = await responseweek.json();
        const data = await response.json();
        console.log(data);
        console.log(dataweek);
        this.setState({  
                         weatherResult: data,  cloudID: data.weather[0].id, weeklyData: dataweek, weeklyClouds: dataweek.daily, newsData: datanews, loading: false });
                         if (this.state.cloudID === 800){
                          this.setState({
                               cloudID: 0
                          })
                        }
       
      }
        
    
      
    
      render(props) {
     
        
        if (this.state.loading) {
          return <div>loading...</div>;
        }
    
        if (!this.state.weatherResult) {
            
          return <div>didn't get weather data</div>;
          
        }
        var cloudnumber = this.state.cloudID.toString()[0];
        var intcloudnumber = parseInt(cloudnumber);
        const cloudsWeek = this.state.weeklyClouds;
        const cloudsweekConverted = [];

        for(let i = 0; i < this.state.weeklyClouds.length; i++ ){
           cloudsweekConverted.push(cloudsWeek[i].weather[0].id.toString()[0])
           
        }
       
       

      const clouds = [
        sunny,
        sunny,
        rainy,
        rainy,
        rainy,
        rainy,
        snow,
        cloudy8,
        cloudy8
      ]
      
      
       
    
        return (
          <div>
            <div className="weatherContainer">
              <div className="mainWeather">
                <div className="iconDiv"> 
                  <div className="temperaturedivTitle"><div className="temperaturedivContainer"><img className="iconImg" src={clouds[intcloudnumber]}></img></div><h1 className="mainTemp">{Math.round(this.state.weatherResult.main.temp)}</h1></div>

                  <div className="tempHigh"><h1 className="mainHigh">76</h1></div>
                  <div className="tempLow"><h1 className="mainLow">54</h1></div>
                  <div className="cloudType"><h1 className="clouds">{this.state.weatherResult.weather[0].description}</h1></div>

                  
                </div>
              </div>
              <div className="weeklyContainer">
                <div className="weeklyDiv"><Forecast  imageA={"https://nypost.com/wp-content/uploads/sites/2/2021/07/delta-variant-chickenpox-08.jpg?quality=90&strip=all&w=1200"} imageB={"https://nypost.com/wp-content/uploads/sites/2/2021/07/texas-covid-66.jpg?quality=90&strip=all&w=900&h=600&crop=1"}
                                                              monImgA={clouds[cloudsweekConverted[0]]}
                                                              tuesImgA={clouds[cloudsweekConverted[1]]}
                                                              wedImgA={clouds[cloudsweekConverted[2]]}
                                                              thursImgA={clouds[cloudsweekConverted[3]]}
                                                              friImgA={clouds[cloudsweekConverted[4]]}
                                                              satImgA={clouds[cloudsweekConverted[5]]}
                                                              sunImgA={clouds[cloudsweekConverted[6]]}
                                                                  monTempA={Math.round(this.state.weeklyData.daily[0].feels_like.day)}
                                                                  tuesTempA={Math.round(this.state.weeklyData.daily[1].feels_like.day)} 
                                                                  wedTempA={Math.round(this.state.weeklyData.daily[2].feels_like.day)} 
                                                                  thursTempA={Math.round(this.state.weeklyData.daily[3].feels_like.day)} 
                                                                  friTempA={Math.round(this.state.weeklyData.daily[4].feels_like.day)} 
                                                                  satTempA={Math.round(this.state.weeklyData.daily[5].feels_like.day)} 
                                                                  sunTempA={Math.round(this.state.weeklyData.daily[6].feels_like.day)} 
                                                                  
                                                                  newstitleA={"The Delta COVID-19 variant appears to ca" + "..."} newstitleB={"Texas pediatric hospitals report uptick i" + "..."}
                                                                  newsaltA={"newsdeltacovid"} newsaltB={"newstexas"}
                                                                  newsdescriptionA={"The Delta COVID-19 variant appears to cause more sever illness and spread as..."} newsdescriptionB={"Northern Texas hospitals are reporting an increase in pediatric COVID-19 patients as federal data..."}
                                                                  newslinkA={"https://nypost.com/2021/07/30/delta-covid-variant-spreads-like-chickenpox-cdc-docs-reveal/"} newslinkB={"https://nypost.com/2021/07/30/texas-pediatric-hospitals-report-uptick-in-covid-19-patients/"}


                                                                  />
            
                  
                </div>
              </div>
              
              
                </div>
            </div>
        );
      }
      
     
    }

 
    

