import React from "react";
import PropTypes from "prop-types";
import { Header, Grid, Images, Container, Shadow } from "./styled";

export default class Carousel extends React.Component {
  MAX_ITEMS = 5;

  state = {
    index: 0,
    monoMode: true // only one photo represent
  };

  componentWillMount() {
    this.items = Array.isArray(this.props.children)
      ? this.props.children.slice(0, this.MAX_ITEMS)
      : [this.props.children];
  }

  renderGrid() {
    if (this.state.monoMode) {
      return null;
    }

    return (
      <Grid href={this.props.href}>
        <ul>
          {this.items.map((item, index) => (
            <li
              img-index={index}
              onMouseEnter={this.handleItemMouseEnter}
              key={item.id}
            />
          ))}
        </ul>
      </Grid>
    );
  }

  renderImages() {
    return (
      <Images>
        {this.state.monoMode
          ? this.items[0]
          : this.items.map((child, index) => {
              if (index !== this.state.index) {
                return child;
              }

              return {
                ...child,
                ...child.props,
                active: true
              };
            })}
      </Images>
    );
  }

  renderShadow() {
    let counter = this.props.children.length - this.items.length;
    if (counter === 0 || this.state.index !== this.MAX_ITEMS - 1) {
      return null;
    }

    return (
      <Shadow>
        <img src={this.props.photoIcon} alt="фотоаппарат" />
        <div>More {counter} photo</div>
      </Shadow>
    );
  }

  render() {
    let { title, className } = this.props;

    return (
      <Container
        className={className}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        {title && <Header>{title}</Header>}
        {this.renderGrid()}
        {this.renderImages()}
        {this.renderShadow()}
      </Container>
    );
  }

  handleMouseEnter = () => {
    this.setState({ monoMode: false });
  };

  handleMouseLeave = () => {
    this.setState({ index: 0 });
  };

  handleItemMouseEnter = event => {
    const index = Number(event.target.getAttribute("img-index"));
    this.setState({ currentImageIndex: index });
  };
}

Carousel.propTypes = {
  photoIcon: PropTypes.string.isRequired, // base64 icon
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
  title: PropTypes.string,
  href: PropTypes.string
};
