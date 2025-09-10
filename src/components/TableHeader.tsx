import { FunctionComponent } from "react";
import styles from "./TableHeader.module.css";

export type TableHeaderType = {
  className?: string;
  text?: string;

  /** Variant props */
  arrow?: string;
  helpIcon?: boolean;
  state?: string;
};

const TableHeader: FunctionComponent<TableHeaderType> = ({
  className = "",
  arrow = false,
  helpIcon = false,
  state = "Default",
  text,
}) => {
  return (
    <div
      className={[styles.tableHeader, className].join(" ")}
      data-arrow={arrow}
      data-helpIcon={helpIcon}
      data-state={state}
    >
      <div className={styles.text}>{text}</div>
      <img className={styles.arrowDownIcon} alt="" src="/arrow-down1.svg" />
    </div>
  );
};

export default TableHeader;
