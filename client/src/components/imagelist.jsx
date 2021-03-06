import React from "react";

import ImageRow from "./imagerow.jsx";
import styles from "./styles.css";
import styled from 'styled-components';

class ImageList extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    console.log("Images:", this.props.images);
    let mainImg = this.props.images[0];
    let otherImages = this.props.images.slice(1);
    console.log("Main Images:", mainImg);
    console.log("Other Images:", otherImages);

    const LeftDiv = styled.div`
    background: yellow;

    border: solid black 1px;
    border-right: 0;
    width:50%;
    height:100%;
    overflow:hidden;
    `
    const LeftChild = styled.div`
    background-image: url('${mainImg}');
    background-size: 100% 100%;

    width:100%;
    height:100%;
    transition: all 0.5s ease;
    &:hover {
      transform: scale(1.2);
    }

    `;
    const RightDiv = styled.div`
    background: green;
    border: solid black 1px;
    border-left:0;
    border-top:0;
    display:flex;
     flex-direction: column;
     width:50%;
    height:100%
    `;
    const Container= styled.div`
    background : red;
  height:80vh;
  width:100%;
  display: flex;
    `;
    const imageRows=[];
    let rowNumber = -1;
    for(let i =0; i < otherImages.length ; i++){
      if (i % 2 === 0) {
        rowNumber +=1 ;
        let newRow=[];
        newRow.push(otherImages[i]);
        imageRows.push(newRow);
      } else {
        imageRows[rowNumber].push(otherImages[i]);
      }
    }

    console.log("Elements:", imageRows);

    return (
      <Container>
        <LeftDiv><LeftChild></LeftChild></LeftDiv>
        <RightDiv>
          {imageRows.map(row=>
            <ImageRow images={row}></ImageRow>
          )}
        </RightDiv>
      </Container>
    );
  }
}


// <Container>
// <LeftDiv><LeftChild></LeftChild></LeftDiv>
// <RightDiv>
//   <RightRow>
//     <RightChild></RightChild>
//     <RightChild></RightChild>
//   </RightRow>
//   <RightRow>
//     <RightChild></RightChild>
//     <RightChild></RightChild>
//   </RightRow>
// </RightDiv>
// </Container>

{/* <div className={styles.wrapper}>

<div className={styles.leftview} style={{backgroundSize: `100% 100%` backgroundImage: `url(${imgUrl})`}}>

</div>
 <div className={styles.rightview}>
  <div className={styles.rightrow}>
    <div className={styles.rightchild} style={{backgroundImage: `url(${imgUrl})`}}>

    </div>
    <div className={styles.rightchild} style={{backgroundImage: `url(${imgUrl})`}}>
    </div>
  </div>
  <div className={styles.rightrow}>
    <div className={styles.rightchild} style={{backgroundImage: `url(${imgUrl})`}}>
    </div>
    <div className={styles.rightchild} style={{backgroundImage: `url(${imgUrl})`}}>
    </div>
  </div>

</div>
</div> */}


export default ImageList;
