import { useTranslations } from "next-intl";
import { useState } from "react";
// import CONFIG from "../../constants/config";
import SendMSG from "./sendMSG";

export default function Form() {
  const t = useTranslations("FORM");
  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  async function validation(event) {
    if (
      !!contact.name &&
      !!contact.email &&
      !!contact.phone &&
      !!contact.message
    ) {
      await SendMSG(event, contact);
      setContact({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    }
  }

  const handleChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  return (
    <div className="container relative">
      <div className="mt-[10%]">
        <h3 className="text-center">{t("APPLY.TITLE")}</h3>
        <p>{t("APPLY.TEXT")}</p>
        <div className="flex justify-between items-center flex-col xl:items-start xl:flex-row ">
          <div className="mr-[40px] lg:w-[40%] w-[80%] my-[5%]">
            <form
              className="flex flex-col"
              method="post"
              action="https://api.staticforms.xyz/submit"
              onSubmit={async (event) => {
                validation(event);
              }}
            >
              <h3 className="mb-[30px]">{t("FORM_TEXT.TITLE")}</h3>
              <div className=" mb-[3.75rem] relative z-0">
                <input
                  name="name"
                  type="text"
                  placeholder={t("FORM_TEXT.NAME")}
                  onChange={handleChange}
                  required
                  value={contact.name}
                  className="bg-[#0000000f] w-full p-[5px]"
                />
              </div>
              <div className="mb-[3.75rem] relative z-0">
                <input
                  name="email"
                  type="text"
                  placeholder={t("FORM_TEXT.EMAIL")}
                  onChange={handleChange}
                  required
                  value={contact.email}
                  className="bg-[#0000000f] w-full p-[5px]"
                />
              </div>
              <div className="mb-[3.75rem] relative z-0">
                <input
                  name="phone"
                  type="text"
                  placeholder={t("FORM_TEXT.PHONE")}
                  onChange={handleChange}
                  required
                  value={contact.phone}
                  className="bg-[#0000000f] w-full p-[5px]"
                />
              </div>
              <div className="mb-[3.75rem] relative">
                <textarea
                  className="p-3 max-h-[171px] w-full bg-[#0000000f]"
                  name="message"
                  rows={4}
                  cols={50}
                  onChange={handleChange}
                  required
                  value={contact.message}
                  placeholder={t("FORM_TEXT.MESSAGE")}
                />
              </div>
              <button
                className="xl:py-[4%] py-[6%] text-center my-auto mx-0 text-black text-[20px] text-medium border rounded-lg border-solid xl:w-[50%] md:w-[80%] w-[80%]"
                type="submit"
              >
                {t("FORM_TEXT.FORM_BUTTON_TEXT")}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
