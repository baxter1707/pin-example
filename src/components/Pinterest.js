import React, {Component} from 'react';

export class Pinterest extends Component {

  constructor(props){
    super(props)
    this.state = {
      selectedPicture : ''
    }
    this.pictureSelected = this.pictureSelected.bind(this)
  }

  pictureSelected(picture){
    this.setState({
      selectedPicture: picture
    })
  }

  render(){
    return(
      <div>
        <h1>Pinterest</h1>
        <ImageListings pictureClickedCallback = {this.pictureSelected} helloFunction= {this.hello} />
        <PictureDetail pictureToDisplay = {this.state.selectedPicture}/>
      </div>
    )
  }
}

class ImageListings extends Component {
  pictureClicked(picture) {
    this.props.pictureClickedCallback(picture)

  }


  render(){


    let pictures = ['Picture 1','Picture 2', 'Picture 3','Picture 4','Picture 5' ]


    let pictureList = pictures.map(function(picture, index){
      return <div onClick={(e) => this.pictureClicked(picture)} key={index} className ='picture'>{picture}</div>
    }.bind(this))
    // for(let picture in pictures) {
    //   console.log(picture)
    // }

    return(
      <div className = 'pictureContainer'>
        {pictureList}
      </div>
    )
  }
}

export class PictureDetail extends Component {
  render() {

    console.log(this.props.pictureToDisplay)
    return (
      <h1> {this.props.pictureToDisplay} </h1>
    )
  }
}
