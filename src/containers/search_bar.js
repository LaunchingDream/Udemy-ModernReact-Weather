import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index'

class SearchBar extends Component {
  constructor(props){
    super(props);
    this.state = { term: ''};
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault(); // 브라우저가 폼을 제출하지 않게 한다.
    // https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault

    // We need to go and fetch weather data
    this.props.fetchWeather(this.state.term);
    this.setState({ term: ''});
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder="Get a five-day forecast in your favorite cities"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }
}

/**
 * 액션 생성자로서, 호출될 때마다 dispatch와 함께 액션이 반환된다.
 * 이 액션이 미들웨어로 흘러가 리덕스 어플리케이션 안의 리듀서로 들어가는 것을 확인할 수 있다.
 *
 * @param dispatch
 * @returns {{fetchWeather: fetchWeather}|ActionCreator<any>|ActionCreatorsMapObject<any>}
 */
function mapDispatchToProps (dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}


export default connect(null, mapDispatchToProps)(SearchBar);