import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group' // ES6

export default class Carossel extends Component {
	constructor(){
		super()
		this.state = {
			images: [149181341, 149181340, 149181333, 149181332, 149181334, 149181339, 149181342, 149181331, 149181337, 149181329],
			currentImage: 0,
			working: false
		}
	}
	handleClick(direction){
		const { images, currentImage, working } = this.state
		this.setState({working: true})
		if(!working){
			console.log('working', working)
			if(direction === 'left'){
				if(currentImage > 0){
					this.setState({
						currentImage: currentImage - 1,
					})
				}
			}else {
				if(currentImage < images.length -2){
					this.setState({
						currentImage: currentImage + 1,
					})
				}
			}
		}
		var self = this;
		setTimeout(function(){ self.setState({ working: false}) }, 1000)
	}
  render() {
		const { images, currentImage } = this.state
		const firstA = currentImage === 0 ? {display: 'none'} : {}
		const secondA = currentImage === images.length -2 ? {display: 'none'} : {}
		var img = <img key={currentImage} 
		style={{
			position: 'absolute',
      zIndex: -1000,
			left: '0px',
      backgroundColor: '#FFFEF4',
    }} src={`https://dy4j078ec5vka.cloudfront.net/${images[currentImage]}/640x480`}/>
    return (
			<div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
				<i style={{...firstA, ...styles.icon, left: '30%'}} onClick={() => this.handleClick.call(this, 'left')} className="fa fa-caret-left fa-3x" aria-hidden="true"></i>
				<div style={{ position: 'relative', overflow: 'hidden', height: '480px', width: '640px', border: '1px solid black'}}>
				 <ReactCSSTransitionGroup
        	transitionName="background"
          transitionEnterTimeout={1000}
          transitionLeaveTimeout={1000}  
				>
          {img}
        </ReactCSSTransitionGroup>
				</div>
				<i style={{...secondA, ...styles.icon, right: '30%'}} onClick={() => this.handleClick.call(this, 'right')} className="fa fa-caret-right fa-3x" aria-hidden="true"></i>
      </div>
    );
  }
}

const styles = {
	icon: {
		cursor: 'pointer', 
		position: 'absolute', 
		top: '50%',
		color: 'white',
		textShadow: '0px 0px 5px black',
		zIndex: '1000'
	}
}
