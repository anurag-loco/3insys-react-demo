import { FunctionComponent } from "react";
import Button from "./Button";
import styles from "./HeaderSection.module.css";

export type HeaderSectionType = {
  className?: string;
};

const HeaderSection: FunctionComponent<HeaderSectionType> = ({
  className = "",
}) => {
  return (
    <header className={[styles.headerSection, className].join(" ")}>
      <div className={styles.buttonWrapper}>
        <Button
          destructive={false}
          hierarchy="Primary"
          icon="Default"
          size="lg"
          state="Default"
          iconLeading
          iconTrailing={false}
        />
      </div>
      <div className={styles.headerSectionInner}>
        <div className={styles.frameParent}>
          <img
            className={styles.frameChild}
            loading="lazy"
            alt=""
            src="/Frame-5620.svg"
          />
          <div className={styles.text}>Demo Only</div>
        </div>
      </div>
    </header>
  );
};

export default HeaderSection;
