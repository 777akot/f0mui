import { Component } from 'react';

class LeaderBoard extends Component {

state = {
  open: false,
  leaderboardContent: this.props.leaderboardContent,
};

  render() {
    const leaderboardContent = this.state.leaderboardContent;

  return (
    leaderboardContent.map((item,index) => (
    item.id + " . " + item.best + " . " + item.speed + " . " + item.bads + " . " + item.goods + " . " + item.last
    )
    )
  )

}
}

export default (LeaderBoard);
