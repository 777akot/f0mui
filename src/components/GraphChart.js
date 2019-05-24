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

  GraphUpdate() {
    //Данные последней попытки
    const tryId = tries[tries.length-1].id;
    //const trySpeed = tries[tries.length-1].speed;
    //const tryResult = tries[tries.length-1].result;

    //Массив скоростей для Developer с ID этой конкретной попытки из всех попыток
    var currentIdSpeedArr = tries
    .filter(x => x.id === tryId && x.result === 1)
    .map(x => x.speed);

    if (currentIdSpeedArr.length < 1) {
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

    //Количество всех попыток Developera с ID этой конкретной попытки

    //Обновление массива результатов Developer
    developers[tryId].id = tryId;
    developers[tryId].speed = 2;
    developers[tryId].best = 3;
    developers[tryId].bads = tries.filter(x => x.id === tryId).filter(x => x.result === 0).length;
    developers[tryId].goods = tries.filter(x => x.id === tryId).filter(x => x.result === 1).length;

    //console.log(dev[tryId]);

    //Обновление массивов для отображения графиков
    devspeedsbest[tryId] = {x: tryId, y: 3};
    devspeedsavg[tryId] = {x: tryId, y: 2};
    volumesbad[tryId] = {x: tryId, y: developers[tryId].bads};
    volumesgood[tryId] = {x: tryId, y: developers[tryId].goods};

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

  }

  TriesUpdate() {
        //alert( 'Привет' );
        if(tries.length > 200) {
          clearInterval(this.intervalId);
          clearInterval(this.interRandom);
          alert("200 tries done");
          return;
        }

        tries.push({
          id: Math.round(Math.random()*(developers.length-1)),
          result: Math.round(Math.random()),
          speed: Math.random()*10
        })






        //console.log(x);
        this.GraphUpdate();
  }

  DevsUpdate() {
    if (developers.length > 10) {
      clearInterval(this.interRandom);
      return;
    }

    developers.push(
      {
        id: developers.length - 1,
        best: 0,
        speed: 0,
        bads: 0,
        goods: 0,
        last: 0,
      },
    );

    devspeedsbest.push(
      {
        x: developers.length - 1,
        y:0,
      },
    );

    devspeedsavg.push(
      {
        x: developers.length - 1,
        y:0,
      },
    );

    this.GraphUpdate();
  }

  componentDidMount() {
    this.intervalId = setInterval(this.TriesUpdate.bind(this), 450);
    this.interRandom = setInterval(this.DevsUpdate.bind(this), ((Math.random()*10) + 1)*1000);
  }
  componentWillUnmount(){
    clearInterval(this.intervalId);
    clearInterval(this.interRandom);
  }

  render() {

    return (
      <>
        <XYPlot margin={{left:32,right:0,bottom: 10,top:10}}  height={250} stroke="" stackBy="x" width={520} xDomain={[0, this.state.developers.length]}>

          <VerticalBarSeries data={this.state.devspeedsavg} color="rgba(150,200,150,0.2)"/>
          <VerticalBarSeries data={this.state.devspeedsbest} color="rgba(250,150,150,0.2)"/>
          <HorizontalGridLines />
          <VerticalGridLines />
          <XAxis top={0} tickTotal={this.state.developers.length} tickFormat={v => `speed`} />
          <YAxis/>

        </XYPlot>
        <XYPlot margin={{left:32,right:0,bottom: 40,top:10}} height={150} stroke="" stackBy="y" width={520} xDomain={[0, this.state.developers.length]}>
          <VerticalBarSeries data={this.state.volumesgood} color="rgba(150,200,150,0.2)"/>
          <VerticalBarSeries data={this.state.volumesbad} color="rgba(250,150,150,0.2)"/>
          <HorizontalGridLines />
          <VerticalGridLines />
          <XAxis tickTotal={this.state.developers.length} tickFormat={v => `Script`} />
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
