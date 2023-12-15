import "./App.css";
import styles from "./App.module.css";
import ButtonContainer from "./components/ButtonContainer.jsx";
import Display from "./components/Display.jsx";

function App() {
  return (
    <div>
      <div className={styles.calculator}>
        <Display />
        <ButtonContainer></ButtonContainer>
      </div>
    </div>
  );
}

export default App;
