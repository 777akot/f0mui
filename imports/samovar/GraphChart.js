import React, { Component } from 'react';
 import '../App.css';
 import 'react-vis/dist/style.css';
import {XYPlot, VerticalGridLines,HorizontalGridLines,YAxis,XAxis,VerticalBarSeries} from 'react-vis';
import Button from '@material-ui/core/Button';
import Slider from './Slider';


const devspeedsbest = [];
const devspeedsavg = [];
const volumesbad = [];
const volumesgood = [];

class GraphChart extends Component {
  state = {
    graphContent: this.props.graphContent,
    devspeedsbest: devspeedsbest,
    devspeedsavg: devspeedsavg,
    volumesbad: volumesbad,
    volumesgood: volumesgood,
    updateInterval: 100,
  };



  GraphUpdate() {
    const developers = this.state.graphContent;


    for (var i = 0; i < developers.length; i++) {
    //Обновление массивов для отображения графиков
    devspeedsbest[i] = {x: i+1, y: developers[i].best - developers[i].speed};
    devspeedsavg[i] = {x: i+1, y: developers[i].speed};
    volumesbad[i] = {x: i+1, y: developers[i].bads};
    volumesgood[i] = {x: i+1, y: developers[i].goods};
    }

    this.setState({
      volumesgood: volumesgood,
      volumesbad: volumesbad,
      devspeedsbest: devspeedsbest,
      devspeedsavg: devspeedsavg,
    });
  }


  componentDidMount() {
    this.GraphUpdate(this);
    //this.intervalId = setInterval(this.GraphUpdate.bind(this), 1000);
    //this.interRandom = setInterval(this.DevsUpdate.bind(this), ((Math.random()*10) + 1)*1000);
  }
  componentWillUnmount(){

    //clearInterval(this.intervalId);
    //clearInterval(this.interRandom);
  }

  render() {
    const developers = this.state.graphContent;
    return (
      <>
        <XYPlot
        margin={{left:32,right:0,bottom: 10,top:10}}
        height={250}
        stroke=""
        stackBy="y"
        width={520}
        xDomain={[1, this.state.graphContent.length]}>

          <VerticalBarSeries data={this.state.devspeedsavg} color="rgba(150,200,150,0.2)"/>
          <VerticalBarSeries data={this.state.devspeedsbest} color="rgba(250,150,150,0.2)"/>
          <HorizontalGridLines />
          <VerticalGridLines />
          <XAxis top={0} tickTotal={this.state.graphContent.length} tickFormat={v => `speed`} />
          <YAxis/>

        </XYPlot>
        <XYPlot
        margin={{left:32,right:0,bottom: 40,top:10}}
        height={150}
        stroke=""
        stackBy="y"
        width={520}
        xDomain={[1, this.state.graphContent.length]}>
          <VerticalBarSeries data={this.state.volumesgood} color="rgba(150,200,150,0.2)"/>
          <VerticalBarSeries data={this.state.volumesbad} color="rgba(250,150,150,0.2)"/>
          <HorizontalGridLines />
          <VerticalGridLines />
          <XAxis tickTotal={this.state.graphContent.length} tickFormat={v => `Script`} />
          <YAxis />

        </XYPlot>
        <div style={{wrap: 'nowrap'}}>
        <Button variant="outlined">change</Button>Zoom: <Slider />
        </div>
        </>

    );
  }
}

export default GraphChart;
