import React, { Component } from 'react'
import NewSingle from './NewSingle'

class News extends Component {
    renderItems(){
        return this.props.items.map((item) => (
            <NewSingle  key={item.id} item={item}/>
        ));
    }
    render() {
        return (
            <div>
                <ul>{this.renderItems()}</ul>
            </div>
        )
    }
}

export default News
