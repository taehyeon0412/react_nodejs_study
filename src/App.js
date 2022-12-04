import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  console.log(`렌더링시 항상 실행됨`);

  useEffect(() => {
    console.log(`렌더링시 처음 한번만 실행됨`);
  }, []);

  useEffect(() => {
    if (keyword !== "" && keyword.length > 5) {
      console.log(`키워드 6글자이상부터 실행됨`, keyword);
    }
  }, [keyword]);
  useEffect(() => {
    if (counter !== 0) {
      console.log(`'counter'가 1이상이면 실행됨`);
    }
  }, [counter]);

  //keyword가 빈칸이 아니고 길이가 5이상일때 console.log를 실행한다

  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here..."
      />
      <h1 className={styles.title}>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
