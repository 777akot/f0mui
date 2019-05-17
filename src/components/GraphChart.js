import React, { Component } from 'react';
import '../App.css';
import '../../node_modules/react-vis/dist/style.css';
import {XYPlot, VerticalGridLines,HorizontalGridLines,YAxis,XAxis,VerticalBarSeries} from 'react-vis';
import Button from '@material-ui/core/Button';
import Slider from './Slider';

const tries = [

  {
    id: 0,
    result: 0,
    speed: 10,
  },

];

const developers = [

  {
    id: 0,
    best: 0,
    speed: 0,
    bads: 0,
    goods: 0,
    last: 0,
  },

];

const devspeedsbest = [
  {x: 0, y: 0}
];
const devspeedsavg = [
  {x: 0, y: 0}
];
const volumesbad = [
  {x: 0, y: 0}
];
const volumesgood = [
  {x: 0, y: 0}
];
const xlabels = [
        'Script',
       ];

class GraphChart extends Component {
  state = {
    xlabels: xlabels,
    developers: developers,
    devspeedsbest: devspeedsbest,
    devspeedsavg: devspeedsavg,
    volumesbad: volumesbad,
    volumesgood: volumesgood,
  };

  DevsUpdate() {
    if (developers.length > 10) {
      clearInterval(this.interRandom);
      return;
    }

    developers.push(
      {
        id: 0,
        best: 0,
        speed: 0,
        bads: 0,
        goods: 0,
        last: 0,
      },
    );




  }

  GraphUpdate() {
        //alert( 'Привет' );
        if(tries.length > 200) {
          clearInterval(this.intervalId);
          clearInterval(this.interRandom);
          alert("200 tries done");
          return
        }

        tries.push({
          id: Math.round(Math.random()*(developers.length-1)),
          result: Math.round(Math.random()),
          speed: Math.random()*(Math.random()*10)
        })

        //Данные последней попытки
        const tryId = tries[tries.length-1].id;
        //const trySpeed = tries[tries.length-1].speed;
        //const tryResult = tries[tries.length-1].result;

        //Массив скоростей для Developer с ID этой конкретной попытки из всех попыток
        var currentIdSpeedArr = tries
        .filter(x => x.id === tryId)
        .filter(x => x.result === 1)
        .map(function (x) {return x.speed});
        //console.log(currentIdSpeedArr);

        if (currentIdSpeedArr.length < 2) {
        var currentIdmaxSpeed = 0;
        var averageSpeed = 0;
      } else {
        //Максимальная скорость для Developer с ID этой конкретной попытки из всех попыток

        currentIdmaxSpeed = currentIdSpeedArr
        .reduce(function(previousValue, currentValue, index, array) {
          return previousValue < currentValue ? currentValue : previousValue;
        });




        //Средняя скорость для Developer с ID этой конкретной попытки из всех попыток
        averageSpeed = currentIdSpeedArr
        .reduce(function(previousValue, currentValue, index, array) {
          return previousValue + currentValue
        }) / currentIdSpeedArr.length;
      };
        //console.log(tries[tries.length-1].result + " . MaxSpeed: " + currentIdmaxSpeed + " . AvgSpeed: " + averageSpeed);
        //console.log(tries[tries.length-1].speed > averageSpeed);

        //Количество всех попыток Developera с ID этой конкретной попытки
        //var triescount = tries.filter(x => x.id == tryId).length;
        //console.log(speeds);

        //console.log("ID: " + tryId + " . " + "RES: " + tryResult + " . " + "Speed: " + trySpeed);

        //Обновление массива результатов Developer
        developers[tryId].id = tryId;
        developers[tryId].speed = averageSpeed;
        developers[tryId].best = currentIdmaxSpeed;
        developers[tryId].bads = tries.filter(x => x.id === tryId).filter(x => x.result === 0).length;
        developers[tryId].goods = tries.filter(x => x.id === tryId).filter(x => x.result === 1).length;

        devspeedsbest[tryId] = {x: tryId, y: developers[tryId].best};
        devspeedsavg[tryId] = {x: tryId, y: developers[tryId].speed};
        volumesbad[tryId] = {x: tryId, y: developers[tryId].bads};
        volumesgood[tryId] = {x: tryId, y: developers[tryId].goods};
        /*
        var devspeedsbest = this.state.developers
        .map(function(x,index) {
          return (
            {
              x: developers[index].id,
              y: developers[index].best
            }
          )
        })

        var devspeedsavg = this.state.developers
        .map(function(x,index) {
          return (
            {
              x: developers[index].id,
              y: developers[index].best
            }
          )
        })
        */
        //console.log(dev[tryId]);

        //Обновление массивов для отображения графиков



        this.setState({
          //data: data,
          //volumes: volumes,
          volumesgood: volumesgood,
          volumesbad: volumesbad,

          devspeedsbest: devspeedsbest,
          devspeedsavg: devspeedsavg,

          xlabels: xlabels,
          developers: developers,

        });
        //console.log(x);

  }

  componentDidMount() {
    this.intervalId = setInterval(this.GraphUpdate.bind(this), 450);
    this.interRandom = setInterval(this.DevsUpdate.bind(this), ((Math.random()*10) + 1)*1000);
  }
  componentWillUnmount(){
    clearInterval(this.intervalId);
    clearInterval(this.interRandom);
  }

  render() {

    return (
      <>
        <XYPlot margin={{left:32,right:0,bottom: 10,top:10}}  height={250} stroke="" stackBy="x" width={520} xDomain={[0, this.state.developers.length-1]}>

          <VerticalBarSeries data={this.state.devspeedsavg} color="rgba(150,200,150,0.2)"/>
          <VerticalBarSeries data={this.state.devspeedsbest} color="rgba(250,150,150,0.2)"/>
          <HorizontalGridLines />
          <VerticalGridLines />
          <XAxis top={0} tickTotal={this.state.developers.length-1} tickFormat={v => `speed`} />
          <YAxis/>

        </XYPlot>
        <XYPlot margin={{left:32,right:0,bottom: 40,top:10}} height={150} stroke="" stackBy="y" width={520} xDomain={[0, this.state.developers.length-1]}>
          <VerticalBarSeries data={this.state.volumesgood} color="rgba(150,200,150,0.2)"/>
          <VerticalBarSeries data={this.state.volumesbad} color="rgba(250,150,150,0.2)"/>
          <HorizontalGridLines />
          <VerticalGridLines />
          <XAxis tickTotal={this.state.developers.length-1} tickFormat={v => `Script`} />

          <YAxis />
        </XYPlot>
        <div container style={{wrap: 'nowrap'}}>
        <Button variant="outlined">change</Button>Zoom: <Slider />
        </div>
        </>

    );
  }
}

export default GraphChart;
