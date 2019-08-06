import React, {Component} from "react";
import {faChevronLeft} from "@fortawesome/free-solid-svg-icons";
import {faChevronRight} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const list = ["All", "Inspire", "Management", "Sports", "Life", "Funny", "Love", "Art", "Students"];

class Main extends Component {

  constructor(props){
    super(props);
    this.state = {
      currentIndex: 0,
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


  getPrevItem(currentIndex){
    let prevIndex = currentIndex === 0 ? 8 : (currentIndex - 1);
    return <li key={prevIndex}><p>{list[prevIndex]}</p><span className={'list__prev-item'}/></li>
  }

  getCurrentItem(currentIndex){
    return <li key={currentIndex}><p className={'list__current-item'}>{list[currentIndex]}</p></li>
  }

  getNextItem(currentIndex){
    let nextIndex = currentIndex === 8 ? 0 : (currentIndex + 1);
    return <li key={nextIndex}><p>{list[nextIndex]}</p><span className={'list__next-item'}/></li>
  }

  render() {
    return(
      <div className={'main'}>
        <div className={'main__blockquote col-xs-12'}>
          <blockquote cite={'https://theysaidso.com/quote/sally-blount-if-we-ever-stop-thinking-about-the-person-we-want-to-become-we-stop'}>
            <p>"If we ever stop thinking about the person we want to become, we stop learning and taking risks."</p>
            <span>Sally Blount</span>
          </blockquote>
        </div>
        <div className={'main__category-panel col-xs-12 row'}>
          <div style={{textAlign:'right'}} className={'col-xs-1'} onClick={() => this.prev()}><FontAwesomeIcon icon={faChevronLeft}/></div>
          <div className={'col-xs-10 list'}>
            <ul>
              {this.getPrevItem(this.state.currentIndex)}
              {this.getCurrentItem(this.state.currentIndex)}
              {this.getNextItem(this.state.currentIndex)}
            </ul>
          </div>
          <div style={{textAlign:'left'}} className={'col-xs-1'} onClick={() => this.next()}><FontAwesomeIcon icon={faChevronRight}/></div>
        </div>
        <div className={'main__ui-panel col-xs-12'}>
          <button className="btn" type="button"><span>Reload new quote</span></button>
        </div>
      </div>
    )
  }
}

export default Main