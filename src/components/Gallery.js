import React from "react";
import Gallery from "react-photo-gallery";
import Lightbox from "react-images";

export default class Gallerya extends React.Component {
  state = { currentImage: 0 };

  openLightbox = (event, obj) => {
    this.setState({
      currentImage: obj.index,
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
    return (
      <div>
        <Gallery
          photos={this.props.photos.map(p => ({
            src: p.src.replace("upload/", "upload/c_thumb,w_300,g_face/"),
            width: p.width,
            height: p.height
          }))}
          onClick={this.openLightbox}
        />
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
