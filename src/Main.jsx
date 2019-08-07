import React, {Component} from "react";
import axios from 'axios';
import CategoryPanel from "./CategoryPanel";
import ReloadPanel from "./ReloadPanel";
import Blockquote from "./Blockquote";

const list = ["All", "Inspire", "Management", "Sports", "Life", "Funny", "Love", "Art", "Students"];

class Main extends Component {

  constructor(props){
    super(props);
    this.state = {
      currentIndex: 0,
      quote: {}
    }
  }

  next(){
    if(this.state.currentIndex === 8){
      this.setState({currentIndex: 0})
    } else {
      this.setState({currentIndex: this.state.currentIndex + 1});
    }
  }

  prev(){
    if(this.state.currentIndex === 0){
      this.setState({currentIndex: 8})
    } else {
      this.setState({currentIndex: this.state.currentIndex - 1});
    }
  }

  fetchNewQuote(){
    let url;
    if(this.state.currentIndex === 0){
      url = `https://cors-anywhere.herokuapp.com/http://quotes.rest/qod.json`
    } else {
      let category = list[this.state.currentIndex].toLowerCase();
      url = `http://quotes.rest/qod.json?category=${category}`
    }
    axios.get(url)
      .then(res => {
        const quote = res.data;
        this.setState({ quote: quote.contents.quotes[0]});
      })
  }

  componentDidMount() {
    axios.get(`https://cors-anywhere.herokuapp.com/http://quotes.rest/qod.json`)
      .then(res => {
        const quote = res.data;
        this.setState({ quote: quote.contents.quotes[0]});
      })
  }

  render() {
    return(
      <div className={'main'}>
        <div className={'main__blockquote col-xs-12'}>
          <Blockquote cite={this.state.quote.permalink} author={this.state.quote.author} text={this.state.quote.quote}/>
        </div>
        <div className={'main__category-panel col-xs-12 row'}>
          <CategoryPanel currentIndex={this.state.currentIndex} onNext={() => this.next()} onPrev={() => this.prev()}/>
        </div>
        <div className={'main__ui-panel col-xs-12'}>
          <ReloadPanel onReload={() => this.fetchNewQuote()}/>
        </div>
      </div>
    )
  }
}

export default Main