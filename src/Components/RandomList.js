import React, { Component } from 'react';

class RandomList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: this.generateList()
    };
  }

  generateList() {
    let list = [];
    for (let i = 1; i <= 10000; i++) {
      list.push(i);
    }
    return this.shuffleArray(list);
  }

  shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  render() {
    return (
      <div className='RandomList'>
        <ul>
          {this.state.list.map((number) => (
            <li key={number}>{number}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default RandomList;
