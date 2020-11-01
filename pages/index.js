import Uppy from "components/uppy";
import styles from "styles/Home.module.css";
import { useState } from "react";

export default function Home() {
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>S3 Upload / Fetch demo</h1>

        <p className={styles.description}>
          Start by upload some files retrie them at{" "}
          <code className={styles.code}>/objects/your-object-key</code>
        </p>

        <button
          className={styles.button}
          onClick={() => setIsUploadModalOpen(true)}
        >
          Upload
        </button>
      </main>
      <Uppy
        open={isUploadModalOpen}
        onClose={() => setIsUploadModalOpen(false)}
      />
    </div>
  );
}
