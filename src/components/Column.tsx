import { FunctionComponent, useMemo, type CSSProperties } from "react";
import TableHeader from "./TableHeader";
import styles from "./Column.module.css";

export type ColumnType = {
  className?: string;
  text1?: string;
  text2?: string;
  text3?: string;
  text4?: string;
  text5?: string;
  text6?: string;
  text7?: string;
  text8?: string;
  text9?: string;
  text?: string;

  /** Style props */
  tableHeaderCellPadding?: CSSProperties["padding"];
  tableCellPadding?: CSSProperties["padding"];
  tableCellPadding1?: CSSProperties["padding"];
  tableCellPadding2?: CSSProperties["padding"];
  tableCellPadding3?: CSSProperties["padding"];
  tableCellPadding4?: CSSProperties["padding"];
  tableCellPadding5?: CSSProperties["padding"];
  tableCellPadding6?: CSSProperties["padding"];
  tableCellPadding7?: CSSProperties["padding"];
  tableCellPadding8?: CSSProperties["padding"];
};

const Column: FunctionComponent<ColumnType> = ({
  className = "",
  tableHeaderCellPadding,
  tableCellPadding,
  text1,
  tableCellPadding1,
  text2,
  tableCellPadding2,
  text3,
  tableCellPadding3,
  text4,
  tableCellPadding4,
  text5,
  tableCellPadding5,
  text6,
  tableCellPadding6,
  text7,
  tableCellPadding7,
  text8,
  tableCellPadding8,
  text9,
  text,
}) => {
  const tableHeaderCellStyle: CSSProperties = useMemo(() => {
    return {
      padding: tableHeaderCellPadding,
    };
  }, [tableHeaderCellPadding]);

  const tableCellStyle: CSSProperties = useMemo(() => {
    return {
      padding: tableCellPadding,
    };
  }, [tableCellPadding]);

  const tableCell1Style: CSSProperties = useMemo(() => {
    return {
      padding: tableCellPadding1,
    };
  }, [tableCellPadding1]);

  const tableCell2Style: CSSProperties = useMemo(() => {
    return {
      padding: tableCellPadding2,
    };
  }, [tableCellPadding2]);

  const tableCell3Style: CSSProperties = useMemo(() => {
    return {
      padding: tableCellPadding3,
    };
  }, [tableCellPadding3]);

  const tableCell4Style: CSSProperties = useMemo(() => {
    return {
      padding: tableCellPadding4,
    };
  }, [tableCellPadding4]);

  const tableCell5Style: CSSProperties = useMemo(() => {
    return {
      padding: tableCellPadding5,
    };
  }, [tableCellPadding5]);

  const tableCell6Style: CSSProperties = useMemo(() => {
    return {
      padding: tableCellPadding6,
    };
  }, [tableCellPadding6]);

  const tableCell7Style: CSSProperties = useMemo(() => {
    return {
      padding: tableCellPadding7,
    };
  }, [tableCellPadding7]);

  const tableCell8Style: CSSProperties = useMemo(() => {
    return {
      padding: tableCellPadding8,
    };
  }, [tableCellPadding8]);

  return (
    <section className={[styles.column, className].join(" ")}>
      <div className={styles.tableHeaderCell} style={tableHeaderCellStyle}>
        <div className={styles.checkbox}>
          <div className={styles.checkboxBase} />
        </div>
        <TableHeader
          arrow="Down"
          helpIcon={false}
          state="Default"
          text={text}
        />
      </div>
      <div className={styles.tableCell} style={tableCellStyle}>
        <div className={styles.text}>{text1}</div>
      </div>
      <div className={styles.columnTableCell} style={tableCell1Style}>
        <div className={styles.text}>{text2}</div>
      </div>
      <div className={styles.tableCell} style={tableCell2Style}>
        <div className={styles.text}>{text3}</div>
      </div>
      <div className={styles.columnTableCell} style={tableCell3Style}>
        <div className={styles.text}>{text4}</div>
      </div>
      <div className={styles.tableCell} style={tableCell4Style}>
        <div className={styles.text}>{text5}</div>
      </div>
      <div className={styles.columnTableCell} style={tableCell5Style}>
        <div className={styles.text}>{text6}</div>
      </div>
      <div className={styles.tableCell} style={tableCell6Style}>
        <div className={styles.text}>{text7}</div>
      </div>
      <div className={styles.columnTableCell} style={tableCell7Style}>
        <div className={styles.text}>{text8}</div>
      </div>
      <div className={styles.tableCell} style={tableCell8Style}>
        <div className={styles.text}>{text9}</div>
      </div>
    </section>
  );
};

export default Column;
