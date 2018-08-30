import styled from "styled-components";

const width = 250;
const height = 200;
const red = "#db3727";
const fontFamily = `Arial, 'Helvetica Neue', Helvetica`;

export const Container = styled.div`
  position: relative;
  height: ${height}px;
  width: ${width}px;
  overflow: hidden;
`;

export const Header = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  opacity: 1;
  overflow: hidden;
  padding: 7px 10px 0;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  box-sizing: border-box;
  font-family: ${fontFamily};
  text-shadow: 0 0.5px 1px rgba(0, 0, 0, 0.3);
  z-index: 80;
  background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.22) 0,
      rgba(255, 255, 255, 0) 100%
    )
    rgba(0, 0, 0, 0);

  ${Container}:hover & {
    opacity: 0;
  }
`;

export const Grid = styled.a.attrs({
  href: props => props.href
})`
  display: table;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 100;

  ul {
    display: table-row;
    padding: 0;
    margin: 0;
  }

  li {
    display: table-cell;
    position: relative;
    opacity: 0;

    &:before {
      content: "";
      position: absolute;
      width: calc(100% - 4px);
      height: 3px;
      bottom: 0;
      margin: 2px 2px 3px;
      background: hsla(0, 0%, 100%, 0.8);
    }
  }

  li:hover:before {
    background-color: ${red};
  }

  &:hover li {
    opacity: 1;
  }
`;

export const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
`;

export const Shadow = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  text-align: center;
  padding-top: 67px;
  background: rgba(0, 0, 0, 0.5);
  z-index: 90;

  img {
    display: inline-block;
  }

  div {
    width: 100%;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-family: ${fontFamily};
    font-size: 13px;
    line-height: 17px;
    overflow: hidden;
  }
`;
