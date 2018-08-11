import React from "react";
import Lightbox from "react-images";
import Square from "../components/Square";

export default class Gallerya extends React.Component {
  state = { currentImage: 0 };

  openLightbox = index => {
    this.setState({
      currentImage: index,
      lightboxIsOpen: true
    });
  };
  closeLightbox = () => {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false
    });
  };
  gotoPrevious = () => {
    this.setState({
      currentImage: this.state.currentImage - 1
    });
  };
  gotoNext = () => {
    this.setState({
      currentImage: this.state.currentImage + 1
    });
  };
  render() {
    const { photos } = this.props;
    return (
      <div>
        {photos.map((photo, index) => (
          <Square
            key={index}
            side="33%"
            margin="8px"
            style={{ cursor: "pointer" }}
          >
            <img
              src={photo.src.replace("upload/", "upload/c_thumb,w_300,h_300/")}
              onClick={() => this.openLightbox(index)}
            />
          </Square>
        ))}
        <Lightbox
          images={this.props.photos}
          onClose={this.closeLightbox}
          onClickPrev={this.gotoPrevious}
          onClickNext={this.gotoNext}
          currentImage={this.state.currentImage}
          isOpen={this.state.lightboxIsOpen}
        />
      </div>
    );
  }
}
