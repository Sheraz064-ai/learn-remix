import { useTranslation } from "react-i18next";

function Root() {
  const { t } = useTranslation();
  return <div className="text-green-500	">{t("common:learnRemix")}</div>;
}

export default Root;
