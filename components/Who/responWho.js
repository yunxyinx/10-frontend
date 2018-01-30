import React, { Component } from 'react'
import Slider from '../Slider/slider'
import styled from 'styled-components'


const Img = styled.img`
width:15vw;

`
const Div = styled.div`
width:90vw;
  height:10vh;
  padding:1em;
  top:10vw;
  margin-bottom:10vh;
`
const Block = styled.div`
width:70vw;
height:15vh;
`
const IconData = [
  { id: 0, image: '/static/image/edu.png', topic: 'น้อง ๆ มัธยมศึกษาตอนปลาย', content: 'แผนกการเรียนวิทย์-คณิต, ศิลป์-คำนวณ'},
  { id: 1, image: '/static/image/computer.png', topic: 'น้อง ๆ ที่มีความสนใจด้านไอที' , content: 'หรือต้องการค้นหาตนเองเพื่อศึกษาต่อ'},
  { id: 2, image: '/static/image/Mom.png', topic: 'น้อง ๆ ที่ได้รับอนุญาตจากผู้ปกครอง' , content: 'โดยมีเอกสารเป็นลายลักษณ์อักษรถูกต้อง'},
  { id: 3, image: '/static/image/night.png', topic: 'น้อง ๆ ที่สามารถอยู่ร่วมค่ายค้างคืนได้' , content: 'ตลอดระยะเวลา 5 วัน'},
]

const Margin = styled.div`
  margin-left : -40px;
`
const Topic = styled.strong`
  
  @media (min-width : 750px){
    font-size :3.5vw;
  }
`
const Content = styled.span`
@media (min-width : 750px){
  font-size :3.5vw;
}
`

export default class AdaptiveHeight extends Component {
  render() {
    var settings = {
      className: '',
      dots: true,
      infinite: true,
      slidesToShow: 0.9,
      slidesToScroll: 1,
      adaptiveHeight: true
    };
    return (
      <div className="container">
          <div className=" col">
            <Slider {...settings}>
            {
              IconData.map((data, i)=> (
              <div key={i} className="container-fluid px-0">
                <Margin className="row justify-content-center">
                    <div className="col-3">
                      <Img src={data.image} />
                    </div>
                    <Block className="row">
                      <div className="col-9">
                      <Topic>{data.topic}</Topic>
                      <br/>
                      <Content>{data.content}</Content>
                      </div>
                    </Block>  
                  </Margin>
              </div>
              ))
            }
            </Slider>
          </div>
      </div>
    );
  }
}
