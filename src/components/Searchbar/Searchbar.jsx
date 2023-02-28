import PropTypes from 'prop-types';
import { AiOutlineSearch } from 'react-icons/ai';
import { useState } from 'react';
import styles from './Searchbar.module.css';

export const Searchbar = ({ getMoviesFromInput }) => {
  const [input, setInput] = useState('');
  const [page] = useState(1);

  const handleInput = e => {
    setInput(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (input.trim() !== '') {
      getMoviesFromInput(input, page);
    }
  };

  return (
    <form onClick={handleSubmit} className={styles.form}>
      <label className={styles.labelInput}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={handleInput}
          name="searchInput"
          value={input}
          className={styles.input}
        />
      </label>

      <button type="submit" className={styles.submit}>
        <AiOutlineSearch size="20px" color="white" />
      </button>
    </form>
  );
};

Searchbar.propTypes = {
  getMoviesFromInput: PropTypes.func.isRequired,
};
