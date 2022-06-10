import React from 'react';

function Header({number, increment}) {
    console.log("Header component re-rendered");
  return (

    <div>
      Header - {number}
      <br/>
      <br/>
      <br/>
    <button onClick={increment}>Arttır</button>
    </div>
  );
}

export default React.memo(Header);
