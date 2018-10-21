import React from "react";

class LazyBackground extends React.Component {
    state = {
        imageReady: false
    }
    componentDidMount() {
        const img = new Image();
        img.onload = () => {
          this.setState({
            imageReady: true
          })
        };
        img.src = this.props.src;
    }
    render(){
        return(
            this.state.imageReady ? React.Children.map(this.props.children, (child) => {
                return React.cloneElement(child, {
                    style: {
                        backgroundImage: `url(${this.props.src})`,
                        ...child.props.style
                    }
                });
            }) : this.props.children
        )
    }
}

export default LazyBackground;
