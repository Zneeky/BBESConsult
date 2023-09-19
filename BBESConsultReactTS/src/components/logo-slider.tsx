import React from "react";
import styles from "./css/LogoSlider.module.css";

const LogoSlider: React.FC = () => {
  const companies = [
    { name: "Zeko", logo: "/images/brands-logos/LogoX.png" },
    { name: "Company2", logo: "/images/brands-logos/LogoX2.png" },
    { name: "Company3", logo: "/images/brands-logos/LogoX.png" },
    { name: "Company4", logo: "/images/brands-logos/LogoX2.png" },
    { name: "Company5", logo: "/images/brands-logos/LogoX.png" },
    { name: "Company6", logo: "/images/brands-logos/LogoX2.png" },
    // ... add more companies
  ];
  return (
    <div className={styles.logos}>
      <div className={styles["logos-slide"]}>
        {companies.map((company)=>(
            <img key={company.name} src={company.logo} alt={company.name} />
        ))}
      </div>

      <div className={styles["logos-slide"]}>
        {companies.map((company)=>(
            <img key={company.name} src={company.logo} alt={company.name} />
        ))}
      </div>
      <div className={styles["logos-slide"]}>
        {companies.map((company)=>(
            <img key={company.name} src={company.logo} alt={company.name} />
        ))}
      </div>
    </div>
  );
};

export default LogoSlider;
