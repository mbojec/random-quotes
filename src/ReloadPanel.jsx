import React from 'react';

function ReloadPanel({onReload}) {

  function handleClick() {
    if (typeof onReload === 'function') {
      onReload();
    }
  }


  return <button onClick={() => handleClick()} className="btn" type="button"><span>Reload new quote</span></button>
}

export default ReloadPanel