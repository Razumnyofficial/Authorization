import LoginAccount from "./components/FullLogin/FullLogin";
import myIlustr from "./assets/ilustr.png";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.App}>
      <div className={styles.wrapper}>
        <img src={myIlustr} alt="" />
        <LoginAccount />
      </div>
    </div>
  );
}

export default App;
