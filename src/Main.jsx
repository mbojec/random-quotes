import React from 'react';

function Main() {
  return(
    <div className={'main'}>
        <div className={'main__blockquote col-xs-12'}>
          <blockquote cite={'https://theysaidso.com/quote/sally-blount-if-we-ever-stop-thinking-about-the-person-we-want-to-become-we-stop'}>
            <p>"If we ever stop thinking about the person we want to become, we stop learning and taking risks."</p>
            <span>Sally Blount</span>
          </blockquote>
        </div>
        <div className={'main__ui-panel col-xs-12'}>
          <button className="btn" type="button"><span>Reload new quote</span></button>
        </div>
    </div>
  )
}

export default Main