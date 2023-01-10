import React from "react";
import HornedBeast from "./HornedBeast";
import data from './data/data.json'

class Main extends React.Component {
  render() {
    return (
      <>
        <main>
          {data.map((hornedbeast) => {
            return <HornedBeast title={hornedbeast.title} image_url={hornedbeast.image_url} description={hornedbeast.description} key={hornedbeast._id} />
          })}
        </main>
      </>
    )
  }
}

export default Main;