import { useTranslations } from "next-intl";

export default function Explanation() {
  const t = useTranslations("EXPANATION");
  const items = t("TEXT").split("\n");
  return (
    <div className="container">
      <h4 className="mt-[15%] mb-[3%]">{t("TITLE")}</h4>
      {items.map((item, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <p className="pb-[30px]" key={i}>
          {item}
        </p>
      ))}
    </div>
  );
}
