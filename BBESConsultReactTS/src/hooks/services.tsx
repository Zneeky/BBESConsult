import { useTranslation } from "react-i18next";

const useServices = () => {
  const { t } = useTranslation();

  const Services = [
    {
      image: "/images/law.jpg",
      title: t("services.Legal_and_administrative_services"),
      link: "",
      index: 1,
    },
    {
      image: "/images/RegOfFirms.jpg",
      title: t("services.Registration_of_firms_and_consultations"),
      link: "",
      index: 2,
    },
    {
      image: "/images/FinAdBudgeting.jpg",
      title: t("services.Financial_advice_budgeting_and_strategies"),
      link: "",
      index: 3,
    },
    {
      image: "/images/AcServ.png",
      title: t("services.Accounting_services"),
      link: "",
      index: 4,
    },
    {
      image: "/images/Labor-Salary-Services.png",
      title: t("services.Labor-and-Salary_Services_Human_resources_Personnel"),
      link: "",
      index: 5,
    },
    {
      image: "/images/Labor-safety.jpg",
      title: t("services.Labor_Safety"),
      link: "",
      index: 6,
    },
    {
      image: "/images/tax.jpg",
      title: t("services.Tax_advice_and_tax_protection"),
      link: "",
      index: 7,
    },
    {
      image: "/images/prep-of-tender-documentation.jpg",
      title: t("services.Preparation_of_tender_documentation"),
      link: "",
      index: 8,
    },
    {
      image: "/images/BI_ITC-Consult-1.jpg",
      title: t("services.Acquiring_the_status_of_Residence_of_foreigners"),
      link: "",
      index: 9,
    },
    {
      image: "/images/bulgarian-ids.png",
      title: t("services.Acquisition_and_restoration_of_Bulgarian_citizenship"),
      link: "",
      index: 10,
    },
    {
      image: "/images/investments.jpg",
      title: t("services.Investments_consultations_and_services"),
      link: "",
      index: 11,
    },
    {
        image: "/images/translation.jpg",
        title: t("services.Translation_services"),
        link: "",
        index: 12,
      },

    // ... other services
  ];

  return Services;
};

export default useServices;
