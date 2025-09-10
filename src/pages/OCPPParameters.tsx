import { FunctionComponent, useState } from "react";
import HeaderSection from "../components/HeaderSection";
import Column from "../components/Column";
import styles from "./OCPPParameters.module.css";

const OCPPParameters: FunctionComponent = () => {
  const [columnItems] = useState([
    {
      tableHeaderCellPadding: "12px 12px 10px",
      tableCellPadding: "12px",
      text1: "8MFJ2T",
      tableCellPadding1: "12px",
      text2: "8MFJ2T",
      tableCellPadding2: "12px",
      text3: "8MFJ2T",
      tableCellPadding3: "12px",
      text4: "8MFJ2T",
      tableCellPadding4: "12px",
      text5: "8MFJ2T",
      tableCellPadding5: "12px",
      text6: "8MFJ2T",
      tableCellPadding6: "12px",
      text7: "8MFJ2T",
      tableCellPadding7: "12px",
      text8: "8MFJ2T",
      tableCellPadding8: "12px",
      text9: "8MFJ2T",
      text: "Charger ID",
    },
    {
      tableHeaderCellPadding: "",
      tableCellPadding: "",
      text1: "DynaChrg",
      tableCellPadding1: "",
      text2: "DynaChrg",
      tableCellPadding2: "",
      text3: "DynaChrg",
      tableCellPadding3: "",
      text4: "DynaChrg",
      tableCellPadding4: "",
      text5: "DynaChrg",
      tableCellPadding5: "",
      text6: "DynaChrg",
      tableCellPadding6: "",
      text7: "DynaChrg",
      tableCellPadding7: "",
      text8: "DynaChrg",
      tableCellPadding8: "",
      text9: "DynaChrg",
      text: "Tenant Name",
    },
    {
      tableHeaderCellPadding: "",
      tableCellPadding: "",
      text1: "15898119595455",
      tableCellPadding1: "",
      text2: "15898119595455",
      tableCellPadding2: "",
      text3: "15898119595455",
      tableCellPadding3: "",
      text4: "15898119595455",
      tableCellPadding4: "",
      text5: "15898119595455",
      tableCellPadding5: "",
      text6: "15898119595455",
      tableCellPadding6: "",
      text7: "15898119595455",
      tableCellPadding7: "",
      text8: "15898119595455",
      tableCellPadding8: "",
      text9: "15898119595455",
      text: "OCPP ID",
    },
    {
      tableHeaderCellPadding: "12px 24px 10px",
      tableCellPadding: "12px 24px",
      text1: "DynaChrg",
      tableCellPadding1: "12px 24px",
      text2: "DynaChrg",
      tableCellPadding2: "12px 24px",
      text3: "DynaChrg",
      tableCellPadding3: "12px 24px",
      text4: "DynaChrg",
      tableCellPadding4: "12px 24px",
      text5: "DynaChrg",
      tableCellPadding5: "12px 24px",
      text6: "DynaChrg",
      tableCellPadding6: "12px 24px",
      text7: "DynaChrg",
      tableCellPadding7: "12px 24px",
      text8: "DynaChrg",
      tableCellPadding8: "12px 24px",
      text9: "DynaChrg",
      text: "Site",
    },
    {
      tableHeaderCellPadding: "12px 24px 10px",
      tableCellPadding: "12px 24px",
      text1: "thuy An garage site area",
      tableCellPadding1: "12px 24px",
      text2: "thuy An garage site area",
      tableCellPadding2: "12px 24px",
      text3: "thuy An garage site area",
      tableCellPadding3: "12px 24px",
      text4: "thuy An garage site area",
      tableCellPadding4: "12px 24px",
      text5: "thuy An garage site area",
      tableCellPadding5: "12px 24px",
      text6: "thuy An garage site area",
      tableCellPadding6: "12px 24px",
      text7: "thuy An garage site area",
      tableCellPadding7: "12px 24px",
      text8: "thuy An garage site area",
      tableCellPadding8: "12px 24px",
      text9: "thuy An garage site area",
      text: "Site Area",
    },
    {
      tableHeaderCellPadding: "12px 24px 10px",
      tableCellPadding: "12px 24px",
      text1: "91826 Jade Underpass",
      tableCellPadding1: "12px 24px",
      text2: "56772 Santos Isle",
      tableCellPadding2: "12px 24px",
      text3: "2975 Trantow Radial",
      tableCellPadding3: "12px 24px",
      text4: "33390 Dietrich Mountains",
      tableCellPadding4: "12px 24px",
      text5: "8118 Towne Fords",
      tableCellPadding5: "12px 24px",
      text6: "8118 Towne Fords",
      tableCellPadding6: "12px 24px",
      text7: "863 Fahey Harbor",
      tableCellPadding7: "12px 24px",
      text8: "433 Turner Station",
      tableCellPadding8: "12px 24px",
      text9: "863 Fahey Harbor",
      text: "Address",
    },
    {
      tableHeaderCellPadding: "12px 24px 10px",
      tableCellPadding: "12px 24px",
      text1: "Installed",
      tableCellPadding1: "12px 24px",
      text2: "Installed",
      tableCellPadding2: "12px 24px",
      text3: "Commissioned",
      tableCellPadding3: "12px 24px",
      text4: "Active",
      tableCellPadding4: "12px 24px",
      text5: "Installed",
      tableCellPadding5: "12px 24px",
      text6: "Installed",
      tableCellPadding6: "12px 24px",
      text7: "Commissioned",
      tableCellPadding7: "12px 24px",
      text8: "Active",
      tableCellPadding8: "12px 24px",
      text9: "Installed",
      text: "Charger Status",
    },
  ]);
  return (
    <div className={styles.chargerTemplatesOcppParam}>
      <img
        className={styles.image3Icon}
        loading="lazy"
        alt=""
        src="/image-31@2x.png"
      />
      <main className={styles.mainWrap}>
        <HeaderSection />
        <section className={styles.main}>
          <div className={styles.arrowLeftParent}>
            <img
              className={styles.arrowLeftIcon}
              loading="lazy"
              alt=""
              src="/arrow-left.svg"
            />
            <h3 className={styles.text}>123456</h3>
            <div className={styles.button}>
              <img
                className={styles.mdifilterIcon}
                loading="lazy"
                alt=""
                src="/mdi-filter.svg"
              />
              <div className={styles.chargerTemplatesOcppParamText}>Create</div>
              <img
                className={styles.placeholderIcon}
                alt=""
                src="/placeholder2.svg"
              />
            </div>
            <div className={styles.chargerTemplatesOcppParamButton}>
              <img
                className={styles.mdifilterIcon}
                loading="lazy"
                alt=""
                src="/ic-sharp-cloud-download.svg"
              />
              <div className={styles.chargerTemplatesOcppParamText}>Create</div>
              <img
                className={styles.placeholderIcon}
                alt=""
                src="/placeholder2.svg"
              />
            </div>
            <div className={styles.chargerTemplatesOcppParamButton}>
              <img
                className={styles.mdifilterIcon}
                loading="lazy"
                alt=""
                src="/iconamoon-restart-fill.svg"
              />
              <div className={styles.chargerTemplatesOcppParamText}>Create</div>
              <img
                className={styles.placeholderIcon}
                alt=""
                src="/placeholder2.svg"
              />
            </div>
          </div>
          <div className={styles.metricItemParent}>
            <div className={styles.metricItem}>
              <img
                className={styles.fi8377918Icon}
                alt=""
                src="/fi-8377918.svg"
              />
              <div className={styles.headingParent}>
                <div className={styles.heading}>Total Transactions</div>
                <div className={styles.number}>52</div>
              </div>
            </div>
            <div className={styles.chargerTemplatesOcppParamMetricItem}>
              <img
                className={styles.fi8377918Icon}
                alt=""
                src="/fi-126229.svg"
              />
              <div className={styles.headingGroup}>
                <div className={styles.heading}>
                  Charged Amount Collected ($)
                </div>
                <div className={styles.number}>$ 3,000</div>
              </div>
            </div>
            <div className={styles.metricItem2}>
              <img
                className={styles.fi8377918Icon}
                alt=""
                src="/fi-1790169.svg"
              />
              <div className={styles.headingGroup}>
                <div className={styles.heading}>Total Transferred ($)</div>
                <div className={styles.number}>$ 5,500</div>
              </div>
            </div>
            <div className={styles.metricItem2}>
              <img
                className={styles.fi8377918Icon}
                alt=""
                src="/fi-2780186.svg"
              />
              <div className={styles.headingGroup}>
                <div className={styles.heading}>Pending Transfer ($)</div>
                <div className={styles.number}>$ 200</div>
              </div>
            </div>
          </div>
          <div className={styles.evesFinancialsTransfers}>
            <div className={styles.headerSection}>
              <div className={styles.text4}>transfer report - Draft</div>
            </div>
            <div className={styles.fi2891593Parent}>
              <img
                className={styles.fi2891593Icon}
                alt=""
                src="/fi-2891593.svg"
              />
              <div className={styles.label}>Edit</div>
            </div>
            <div className={styles.frameParent}>
              <div className={styles.tabsStandardassetsParent}>
                <div className={styles.tabsStandardassets}>
                  <img
                    className={styles.visibilityIcon}
                    alt=""
                    src="/Visibility@2x.png"
                  />
                  <div className={styles.chargerTemplatesOcppParamLabel}>
                    Vendor
                  </div>
                  <div className={styles.labelParent}>
                    <div className={styles.label2}>Injet New Energy</div>
                    <img
                      className={styles.dashiconsarrowUp}
                      alt=""
                      src="/dashicons-arrow-up.svg"
                    />
                  </div>
                </div>
                <div className={styles.tabsStandardassets}>
                  <img
                    className={styles.visibilityIcon}
                    alt=""
                    src="/Visibility@2x.png"
                  />
                  <div className={styles.chargerTemplatesOcppParamLabel}>
                    Model
                  </div>
                  <div className={styles.labelParent}>
                    <div className={styles.label2}>SingleSocketCharger</div>
                    <img
                      className={styles.dashiconsarrowUp}
                      alt=""
                      src="/dashicons-arrow-up.svg"
                    />
                  </div>
                </div>
                <div className={styles.tabsStandardassets}>
                  <img
                    className={styles.visibilityIcon}
                    alt=""
                    src="/Visibility@2x.png"
                  />
                  <div className={styles.chargerTemplatesOcppParamLabel}>
                    OCPP Version
                  </div>
                  <div className={styles.labelParent}>
                    <div className={styles.label2}>2.0.1</div>
                    <img
                      className={styles.dashiconsarrowUp}
                      alt=""
                      src="/dashicons-arrow-up.svg"
                    />
                  </div>
                </div>
                <div className={styles.tabsStandardassets}>
                  <img
                    className={styles.visibilityIcon}
                    alt=""
                    src="/Visibility@2x.png"
                  />
                  <div className={styles.chargerTemplatesOcppParamLabel}>
                    Firmware version
                  </div>
                  <div className={styles.labelWrapper}>
                    <div className={styles.label2}>AC_M3C_1.22.P111</div>
                  </div>
                </div>
              </div>
              <div className={styles.tabsStandardassetsGroup}>
                <div className={styles.tabsStandardassets}>
                  <img
                    className={styles.visibilityIcon}
                    alt=""
                    src="/Visibility@2x.png"
                  />
                  <div className={styles.chargerTemplatesOcppParamLabel}>
                    Total Platform Fees
                  </div>
                  <div className={styles.labelWrapper}>
                    <div className={styles.label2}>$10.72</div>
                  </div>
                </div>
                <div className={styles.tabsStandardassets}>
                  <img
                    className={styles.visibilityIcon}
                    alt=""
                    src="/Visibility@2x.png"
                  />
                  <div className={styles.chargerTemplatesOcppParamLabel}>
                    Total Transfer ($) to [CPO]
                  </div>
                  <div className={styles.labelWrapper}>
                    <div className={styles.label2}>$10.72</div>
                  </div>
                </div>
                <div className={styles.tabsStandardassets}>
                  <img
                    className={styles.visibilityIcon}
                    alt=""
                    src="/Visibility@2x.png"
                  />
                  <div className={styles.chargerTemplatesOcppParamLabel}>
                    Total Transfer ($) to [Site Owner]
                  </div>
                  <div className={styles.labelWrapper}>
                    <div className={styles.label2}>$10.72</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.radioParent}>
              <div className={styles.radio}>
                {columnItems.map((item, index) => (
                  <Column
                    key={index}
                    tableHeaderCellPadding={item.tableHeaderCellPadding}
                    tableCellPadding={item.tableCellPadding}
                    text1={item.text1}
                    tableCellPadding1={item.tableCellPadding1}
                    text2={item.text2}
                    tableCellPadding2={item.tableCellPadding2}
                    text3={item.text3}
                    tableCellPadding3={item.tableCellPadding3}
                    text4={item.text4}
                    tableCellPadding4={item.tableCellPadding4}
                    text5={item.text5}
                    tableCellPadding5={item.tableCellPadding5}
                    text6={item.text6}
                    tableCellPadding6={item.tableCellPadding6}
                    text7={item.text7}
                    tableCellPadding7={item.tableCellPadding7}
                    text8={item.text8}
                    tableCellPadding8={item.tableCellPadding8}
                    text9={item.text9}
                    text={item.text}
                  />
                ))}
              </div>
              <img
                className={styles.screenshot20250120At815}
                loading="lazy"
                alt=""
                src="/Screenshot-2025-01-20-at-8-15-28-PM-1@2x.png"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default OCPPParameters;
