import { Component } from 'react';
import styles from './Searchbar.module.css';

class Searchbar extends Component {
  state = {
    query: '',
  };

  handleChange = event => {
    const { value } = event.target;
    this.setState({ query: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { onSubmit } = this.props;
    const { query } = this.state;
    onSubmit(query);
    this.setState({ query: '' });
  };

  render() {
    const { query } = this.state;

    return (
      <div className={styles.searchFormContainer}>
        <header>
          <form className={styles.searchForm} onSubmit={this.handleSubmit}>
            <button type="submit" className={styles.searchFormButton}>
              <span className="button-label">Search</span>
            </button>

            <input
              className={styles.searchFormInput}
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              value={query}
              onChange={this.handleChange}
            />
          </form>
        </header>
      </div>
    );
  }
}

export default Searchbar;
