import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import styles from "./One.module.css";

function One() {
  return (
    <div className={styles.App}>
      <h1 className="p-2 border-blue-500 border-4">helloWro</h1>
      <button>hello</button>
    </div>
  );
}

export default One;
