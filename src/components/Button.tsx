import { FunctionComponent } from "react";
import styles from "./Button.module.css";

export type ButtonType = {
  className?: string;
  iconLeading?: boolean;
  iconTrailing?: boolean;

  /** Variant props */
  destructive?: boolean;
  hierarchy?: string;
  icon?: string;
  size?: string;
  state?: string;
};

const Button: FunctionComponent<ButtonType> = ({
  className = "",
  destructive = false,
  hierarchy = "Primary",
  icon = "Dot leading",
  size = "md",
  state = "Default",
  iconLeading = true,
  iconTrailing = false,
}) => {
  return (
    <div
      className={[styles.button, className].join(" ")}
      data-destructive={destructive}
      data-hierarchy={hierarchy}
      data-icon={icon}
      data-size={size}
      data-state={state}
    >
      {!!iconLeading && (
        <img
          className={styles.transactionIcon}
          loading="lazy"
          alt=""
          src="/Transaction.svg"
        />
      )}
      <div className={styles.text}>CHARGING STATION TEMPLATE</div>
      {!!iconTrailing && (
        <img
          className={styles.placeholderIcon}
          alt=""
          src="/placeholder3.svg"
        />
      )}
    </div>
  );
};

export default Button;
