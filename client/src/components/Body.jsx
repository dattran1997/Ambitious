import React, { Component } from 'react';
import Person from '../person.png';
import Background from '../bg-masthead.jpg';
import '../css/Body.css'
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';

const items = [
  {
    src: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa1d%20text%20%7B%20fill%3A%23555%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa1d%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22285.921875%22%20y%3D%22218.3%22%3EFirst%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
  {
    src: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa20%20text%20%7B%20fill%3A%23444%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa20%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23666%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22247.3203125%22%20y%3D%22218.3%22%3ESecond%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
    altText: 'Slide 2',
    caption: 'Slide 2'
  },
  {
    src: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa21%20text%20%7B%20fill%3A%23333%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa21%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23555%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22277%22%20y%3D%22218.3%22%3EThird%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
    altText: 'Slide 3',
    caption: 'Slide 3'
  }
];

class Example extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  componentDidMount(){
      this.next()
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img className='w-100' style={{height:'100vh', minHeight:'40rem'}} src={item.src} alt={item.altText} />
          <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
        </CarouselItem>
      );
    });

    return (
        <section className='body'>
            <Carousel className='carousel-fade'
                activeIndex={activeIndex}
                next={this.next}
                previous={this.previous}
                // pause={false}
                // interval={3000}
            >   
                <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
                {slides}
                <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
            </Carousel>
            <section className='features py-5 bg-secondary'>
                <div className='container'>
                    <div className='row'> 
                        <div className='col-lg-4 text-left py-3'>
                         <i className='fas fa-bookmark fa-3x pb-2'></i>
                         <h4 className='title pb-2'>
                            <a>Lorem Ipsum Delino</a>
                         </h4>
                         <p className='description'>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
                        </div>
                        <div className='col-lg-4 text-left py-3'>
                         <i className='far fa-clock fa-3x pb-2'></i>
                         <h4 className='title pb-2'>
                            <a>Lorem Ipsum Delino</a>
                         </h4>
                         <p className='description'>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
                        </div>
                        <div className='col-lg-4 text-left py-3'>
                         <i className='fas fa-running fa-3x pb-2'></i>
                         <h4 className='title pb-2'>
                            <a>Lorem Ipsum Delino</a>
                         </h4>
                         <p className='description'>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='our-team text-center py-5'>
                <h1>Core Team</h1>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</p>
                <div className='container'>
                    <div className='row justify-content-center'>
                        <div className='col-lg-3 mr-lg-5'>
                            <img className='img-fluid' src={Person}  />
                        </div>
                        <div className='col-lg-3'>
                            <img className='img-fluid' src={Person}  />
                        </div>
                    </div>
                </div>
            </section>
            <section className='call to action text-white text-center py-5' style={{backgroundImage: `url(${Background})`, backgroundRepeat: 'no-repeat', backgroundAttachment: 'center', backgroundPosition: 'center',  }}>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-10 mx-auto mb-4'>
                            <h2>Ready to get started? Sign up now!</h2>
                        </div>
                        <div className='col-lg-5 mx-auto'>
                            <button className='btn btn-lg btn-primary'>Sign Up!</button>
                        </div>
                    </div>
                </div>
            </section>
            <section className='contact-us'>
                <div className='container mt-5'>
                    <div className='row'>
                        <div className='col-lg-4'>
                            <div className='card py-4 h-100 bg-light social'>
                                <div className='card-body text-center'>
                                    <i className='fas fa-map-marked-alt text-primary mb-2 '></i>
                                    <h4>ADDRESS</h4>
                                    <hr className='my-4'/>
                                    <p className='small'>4923 Market Street, Orlando FL</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='card py-4 h-100 bg-light social'>
                                <div className='card-body text-center'>
                                    <i className='fas fa-envelope text-primary mb-2 '></i>
                                    <h4>EMAIL</h4>
                                    <hr className='my-4'/>
                                    <a className='small' href='#'>Ambitious@gmail.com</a>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='card py-4 h-100 bg-light social'>
                                <div className='card-body text-center'>
                                    <i className='fas fa-mobile-alt text-primary mb-2 '></i>
                                    <h4>PHONE</h4>
                                    <hr className='my-4'/>
                                    <p className='small'>+ 0123 456 789</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    );
  }
}


export default Example;


