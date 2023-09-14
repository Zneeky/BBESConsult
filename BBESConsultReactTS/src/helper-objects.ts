import { useTranslation } from 'react-i18next';

//Services for the slider and panels with image/title/link
// "services": {
//     "Legal_and_administrative_services": "Bulgaristan’da muhasebe hizmeti, mali, vergi, hukuki ve idari hizmetler sunmaktadır.",
//     "Registration_of_firms_and_consultations": "Bulgaristan’da Şirket kuruluş hizmetleri ve danışmanlı sunmaktadır.",
//     "Financial_advice_budgeting_and_strategies": "Bulgaristan’da Finans, bütçeleme ve strateji danışmanlığı sunmaktadır.",
//     "Accounting_services": "Bulgaristan’da Muhasebe, danışmanlık, Sofya’da mali hizmetler sunmaktadır.",
//     "Labor-and-Salary_Services_Human_resources_Personnel": "Bulgaristan’da yatırımlarınızda analizler ve program sunmaktadır.\nŞirket sahipleri ve yöneticilere daimi BG oturum hizmetleri sunmaktadır.",
//     "Labor_Safety": "Bulgaristan projeleri için Yabancı şirketlerin Bulgaristan İnşaat kamarası kayıt işlem hizmetleri sunmaktadır. Şirketinizin ihale için lisans takip işlemi sunmaktadır.",
//     "Tax_advice_and_tax_protection": "Bulgaristan’da Vergi danışmanlığı sunmaktadır. Yatırımlarda KDV iade ve prosedür hizmetleri sunmaktadır",
//     "Preparation_of_tender_documentation": "Bulgaristan’da İhale evraklarının hazırlanması hizmetleri sunmaktadır. AB ve Bulgaristan ihale bilgisi sunmaktadır.",
//     "Acquiring_the_status_of_Residence_of_foreigners": "Bulgaristan’da oturum, ikamet, yabancı vatandaşlar için AB ehliyet işlemleri, AB sağlık kart danışmanlığı ve hizmetleri sunmaktadır.",
//     "Acquisition_and_restoration_of_Bulgarian_citizenship": "Bulgaristan’da çalışma izinler, mavi kart, uzun ve kısa süreli çalışma izinleri, yabancı vatandaş çalışma izin ve oturum kart hizmetleri sunmaktadır.",
//     "Investments_consultations_and_services": "Bulgaristan’da Yatırım danışmanlığı ve hizmetleri sunmaktadır. Yatırım süreleri prosedürler ve kayıt işlemleri sunmaktadır.",
//     "Translation_services": "Bulgaristan’da Tercüme hizmetleri sunmaktadır. Yabancı vatandaşlar için diploma denklik hizmetleri sunmaktadır."
//   }
const { t  } = useTranslation();

export const Services = 
[
{
    image:"/images/AccountsImageBlueLayer.png",
    title:`${t("services.Legal_and_administrative_services")}`,
    link:"",
    index:1
},
{
    image:"/images/",
    title:"Service 2",
    link:"",
    index:2
},
{
    image:"/images/",
    title:"Service 3",
    link:"",
    index:3
},
{
    image:"/images/",
    title:"Service 4",
    link:"",
    index:4
},
{
    image:"/images/",
    title:"Service 5",
    link:"",
    index:5
},
{
    image:"/images/",
    title:"Service 6",
    link:"",
    index:6
}
]