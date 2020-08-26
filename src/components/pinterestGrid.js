import React, { Component } from 'react';
import heart from '../assets/heart.svg';
import heartFilled from '../assets/heartFilled.svg';

import { connect } from 'react-redux';

class PinterestGrid extends Component {

    constructor() {
        super()

        const resizeMasonryItem = (item) => {
            var grid = document.getElementsByClassName('pinterest-grid-photos')[0]
            var rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'))
            var rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
                
            let heightWithGap = item.querySelector('.pinterest-grid-photos__brick__photo').getBoundingClientRect().height+rowGap
            let rowHeightWithGap = rowHeight+rowGap
            var rowSpan = Math.floor(heightWithGap/rowHeightWithGap);
        
            item.style.gridRowEnd = 'span '+rowSpan;
        }

        const resizeAllMasonryItems = () => {
            var allItems = document.getElementsByClassName('pinterest-grid-photos__brick');
            for(var i=0;i<allItems.length;i++){
            resizeMasonryItem(allItems[i]);
            }
        }
  
        var masonryEvents = ['load', 'resize'];
        masonryEvents.forEach(event => {
            window.addEventListener(event, resizeAllMasonryItems);
        });
  
    }

    handleHeartClick = () => {
        // 1. communicate with store to indicate favorite photo. -- this requires refactor of photo data, brb.
    }

    render() {
        const { title } = this.props;
        return (
            <div className='pinterest-grid'>
                <div className='pinterest-grid__title'>{title}</div>
                <div className='pinterest-grid__photos pinterest-grid-photos'>
                {
                    this.props.photos != null ? this.props.photos.map(photo => {
                        return (
                            <div className='pinterest-grid-photos__brick' key={photo._id}>
                                <img className='pinterest-grid-photos__brick__heart' onClick={() => this.handleHeartClick()} src={heart}/>
                                <img className='pinterest-grid-photos__brick__heart-filled' src={heartFilled}/>
                                <div className='pinterest-grid-photos__brick__opaque-cover'></div>
                                <div className='pinterest-grid-photos__brick__photo'>
                                    <img className='pinterest-photo' src={photo.imageURL}/>
                                </div>
                            </div>
                        )
                    }) : ''
                }
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        photos: state.photos.photos
    }
}

PinterestGrid = connect(mapStateToProps)(PinterestGrid);
export default PinterestGrid;