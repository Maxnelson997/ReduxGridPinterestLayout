import React, { Component } from 'react';
import heart from '../assets/heart.svg';
import heartFilled from '../assets/heartFilled.svg';

const PHOTOS = [
    'https://source.unsplash.com/collection/1538121',
    'https://source.unsplash.com/collection/219941',
    'https://source.unsplash.com/collection/1353730',
    'https://source.unsplash.com/collection/1708734',
    'https://source.unsplash.com/collection/531563',
]

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

    render() {
        const { title } = this.props;
        return (
            <div className='pinterest-grid'>
                <div className='pinterest-grid__title'>{title}</div>
                <div className='pinterest-grid__photos pinterest-grid-photos'>
                {
                    PHOTOS.map((photo, index) => {
                        return (
                            <div className='pinterest-grid-photos__brick' key={index}>
                                <img className='pinterest-grid-photos__brick__heart' src={heart}/>
                                <img className='pinterest-grid-photos__brick__heart-filled' src={heartFilled}/>
                                <div className='pinterest-grid-photos__brick__opaque-cover'></div>
                                <div className='pinterest-grid-photos__brick__photo'>
                                    <img className='pinterest-photo' src={photo}/>
                                </div>
                            </div>
                        )
                    })
                }
                </div>
            </div>
        )
    }
}

export default PinterestGrid;