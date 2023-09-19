import React from "react";
import styles from "./css/LogoSlider.module.css";

const LogoSlider: React.FC = () => {
  const companies = [
    { name: "Zeko", logo: "/images/brands-logos/zeko_logo.png" },
    { name: "Company2", logo: "/path/to/logo2.png" },
    { name: "Company3", logo: "/images/brands-logos/LogoX.png" },
    { name: "Company4", logo: "/images/brands-logos/zeko_logo.png" },
    { name: "Company5", logo: "/images/brands-logos/zeko_logo.png" },
    { name: "Company6", logo: "/images/brands-logos/zeko_logo.png" },
    // ... add more companies
  ];
  return (
    <div className={styles.logos}>
      <div className={styles["logos-slide"]}>
        {/* <img src="./logos/3m.svg" />
        <img src="./logos/barstool-store.svg" />
        <img src="./logos/budweiser.svg" />
        <img src="./logos/buzzfeed.svg" />
        <img src="./logos/forbes.svg" />
        <img src="./logos/macys.svg" />
        <img src="./logos/menshealth.svg" />
        <img src="./logos/mrbeast.svg" /> */}
        {companies.map((company)=>(
            <img key={company.name} src={company.logo} alt={company.name} />
        ))}
      </div>

      <div className={styles["logos-slide"]}>
        {/* <img src="./logos/3m.svg" />
        <img src="./logos/barstool-store.svg" />
        <img src="./logos/budweiser.svg" />
        <img src="./logos/buzzfeed.svg" />
        <img src="./logos/forbes.svg" />
        <img src="./logos/macys.svg" />
        <img src="./logos/menshealth.svg" />
        <img src="./logos/mrbeast.svg" /> */}
        {companies.map((company)=>(
            <img key={company.name} src={company.logo} alt={company.name} />
        ))}
      </div>
      <div className={styles["logos-slide"]}>
        {/* <img src="./logos/3m.svg" />
        <img src="./logos/barstool-store.svg" />
        <img src="./logos/budweiser.svg" />
        <img src="./logos/buzzfeed.svg" />
        <img src="./logos/forbes.svg" />
        <img src="./logos/macys.svg" />
        <img src="./logos/menshealth.svg" />
        <img src="./logos/mrbeast.svg" /> */}
        {companies.map((company)=>(
            <img key={company.name} src={company.logo} alt={company.name} />
        ))}
      </div>
    </div>
  );
};

export default LogoSlider;
