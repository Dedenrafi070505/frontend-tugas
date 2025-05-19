import { useState } from "react";
import Alert from "../Alert/Alert";
import styles from "./AddMovie.module.css";
function AddMovieForm(props) {
  // const [title, setTitle] = useState("");
  // const [date, setDate] = useState("");
  const [formData, setFormData] = useState({
    title: "",
    date: "",
  });
  const [isTitleError, setIsTitleError] = useState(false);
  const [isDateError, setIsDateError] = useState(false);
  const { movies, setMovies } = props;

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  // function handleTitle(e) {
  //   setTitle(e.target.value);
  // }

  // function handleDate(e) {
  //   setDate(e.target.value);
  // }

  function validate() {
    if (title === "") {
      setIsTitleError(true);
      return false;
    } else if (date === "") {
      setIsDateError(true);
      setIsTitleError(false);
      return false;
    } else {
      setIsTitleError(false);
      setIsDateError(false);
      return true;
    }
  }

  function addMovie() {
    const movie = {
      id: "xyz",
      title: title,
      year: date,
      type: "Movie",
      poster: "https://picsum.photos/300/400",
    };
    setMovies([...movies, movie]);
  }

  const { title, date } = formData;

  function handleSubmit(e) {
    e.preventDefault();
    validate() && addMovie();

    // if (title === "") {
    //   setIsTitleError(true);
    // } else if (date === "") {
    //   setIsDateError(true);
    // } else {

    //   setIsTitleError(false);
    //   setIsDateError(false);
    // }
  }

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <input
          className={styles.input_form}
          id="title"
          type="text"
          value={title}
          name="title"
          onChange={handleChange}
        />
        {isTitleError && <Alert>Title wajib diisi</Alert>}

        <input
          className={styles.input_form}
          id="date"
          type="text"
          value={date}
          name="date"
          onChange={handleChange}
        />
        {isDateError && <Alert>Date wajib diisi</Alert>}
        <button className={styles.button_form}>Add Movie</button>
      </form>
    </div>
  );
}
export default AddMovieForm;
