import React from 'react';
import {faChevronLeft} from "@fortawesome/free-solid-svg-icons";
import {faChevronRight} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
const list = ["All", "Inspire", "Management", "Sports", "Life", "Funny", "Love", "Art", "Students"];


function CategoryPanel({currentIndex, onPrev, onNext}) {

  function getPrevItem(currentIndex){
    let prevIndex = currentIndex === 0 ? 8 : (currentIndex - 1);
    return <li key={prevIndex}><p>{list[prevIndex]}</p><span className={'list__prev-item'}/></li>
  }

  function getCurrentItem(currentIndex){
    return <li key={currentIndex}><p className={'list__current-item'}>{list[currentIndex]}</p></li>
  }

  function getNextItem(currentIndex){
    let nextIndex = currentIndex === 8 ? 0 : (currentIndex + 1);
    return <li key={nextIndex}><p>{list[nextIndex]}</p><span className={'list__next-item'}/></li>
  }

  function handlePrevClick() {
    if (typeof onPrev === 'function') {
      onPrev();
    }
  }

  function handleNextClick() {
    if (typeof onNext === 'function') {
      onNext();
    }
  }

  return(
    <>
      <div style={{textAlign:'right'}} className={'col-xs-1'} onClick={() => handlePrevClick()}><FontAwesomeIcon icon={faChevronLeft}/></div>
      <div className={'col-xs-10 list'}>
        <ul>
          {getPrevItem(currentIndex)}
          {getCurrentItem(currentIndex)}
          {getNextItem(currentIndex)}
        </ul>
      </div>
      <div style={{textAlign:'left'}} className={'col-xs-1'} onClick={() => handleNextClick()}><FontAwesomeIcon icon={faChevronRight}/></div>
    </>
  )
};

export default CategoryPanel