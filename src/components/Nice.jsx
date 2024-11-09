import React from "react";
import styles from "./Nice.module.css";
const Nice = () => {
  const myStyleOne = {
    "--duration": "15951ms",
    "--direction": "normal",
  };
  const myStyleTwo = {
    "--duration": "15951ms",
    "--direction": "reverse",
  };
  const myStyleThree = {
    "--duration": "10449ms",
    "--direction": "normal",
  };
  const myStyleFour = {
    "--duration": "16638ms",
    "--direction": "reverse",
  };
  const myStyleFive = {
    "--duration": "15936ms",
    "--direction": "normal",
  };

  return (
    <>
      <div className={styles.app}>
        <div className={styles.list}>
          <div className={styles.slider} style={myStyleOne}>
            <div className={styles.inner}>
              <div className={styles.tag}>
                <span>#</span> JavaScript
              </div>
              <div className={styles.tag}>
                <span>#</span> webdev
              </div>
              <div className={styles.tag}>
                <span>#</span> Typescript
              </div>
              <div className={styles.tag}>
                <span>#</span> Next.js
              </div>
              <div className={styles.tag}>
                <span>#</span> UI/UX
              </div>

              <div className={styles.tag}>
                <span>#</span> JavaScript
              </div>
              <div className={styles.tag}>
                <span>#</span> webdev
              </div>
              <div className={styles.tag}>
                <span>#</span> Typescript
              </div>
              <div className={styles.tag}>
                <span>#</span> Next.js
              </div>
              <div className={styles.tag}>
                <span>#</span> UI/UX
              </div>
            </div>
          </div>
          <div className={styles.slider} style={myStyleTwo}>
            <div className={styles.inner}>
              <div className={styles.tag}>
                <span>#</span> webdev
              </div>
              <div className={styles.tag}>
                <span>#</span> Gatsby
              </div>
              <div className={styles.tag}>
                <span>#</span> JavaScript
              </div>
              <div className={styles.tag}>
                <span>#</span> Tailwind
              </div>
              <div className={styles.tag}>
                <span>#</span> Typescript
              </div>

              <div className={styles.tag}>
                <span>#</span> webdev
              </div>
              <div className={styles.tag}>
                <span>#</span> Gatsby
              </div>
              <div className={styles.tag}>
                <span>#</span> JavaScript
              </div>
              <div className={styles.tag}>
                <span>#</span> Tailwind
              </div>
              <div className={styles.tag}>
                <span>#</span> Typescript
              </div>
            </div>
          </div>
          <div className={styles.slider} style={myStyleThree}>
            <div className={styles.inner}>
              <div className={styles.tag}>
                <span>#</span> animation
              </div>
              <div className={styles.tag}>
                <span>#</span> Tailwind
              </div>
              <div className={styles.tag}>
                <span>#</span> React
              </div>
              <div className={styles.tag}>
                <span>#</span> SVG
              </div>
              <div className={styles.tag}>
                <span>#</span> HTML
              </div>

              <div className={styles.tag}>
                <span>#</span> animation
              </div>
              <div className={styles.tag}>
                <span>#</span> Tailwind
              </div>
              <div className={styles.tag}>
                <span>#</span> React
              </div>
              <div className={styles.tag}>
                <span>#</span> SVG
              </div>
              <div className={styles.tag}>
                <span>#</span> HTML
              </div>
            </div>
          </div>
          <div className={styles.slider} style={myStyleFour}>
            <div className={styles.inner}>
              <div className={styles.tag}>
                <span>#</span> Gatsby
              </div>
              <div className={styles.tag}>
                <span>#</span> HTML
              </div>
              <div className={styles.tag}>
                <span>#</span> CSS
              </div>
              <div className={styles.tag}>
                <span>#</span> React
              </div>
              <div className={styles.tag}>
                <span>#</span> Next.js
              </div>

              <div className={styles.tag}>
                <span>#</span> Gatsby
              </div>
              <div className={styles.tag}>
                <span>#</span> HTML
              </div>
              <div className={styles.tag}>
                <span>#</span> CSS
              </div>
              <div className={styles.tag}>
                <span>#</span> React
              </div>
              <div className={styles.tag}>
                <span>#</span> Next.js
              </div>
            </div>
          </div>
          <div className={styles.slider} style={myStyleFive}>
            <div className={styles.inner}>
              <div className={styles.tag}>
                <span>#</span> Next.js
              </div>
              <div className={styles.tag}>
                <span>#</span> React
              </div>
              <div className={styles.tag}>
                <span>#</span> webdev
              </div>
              <div className={styles.tag}>
                <span>#</span> Typescript
              </div>
              <div className={styles.tag}>
                <span>#</span> Gatsby
              </div>

              <div className={styles.tag}>
                <span>#</span> Next.js
              </div>
              <div className={styles.tag}>
                <span>#</span> React
              </div>
              <div className={styles.tag}>
                <span>#</span> webdev
              </div>
              <div className={styles.tag}>
                <span>#</span> Typescript
              </div>
              <div className={styles.tag}>
                <span>#</span> Gatsby
              </div>
            </div>
          </div>
          <div className={styles.fade}></div>
        </div>
      </div>
    </>
  );
};

export default Nice;
