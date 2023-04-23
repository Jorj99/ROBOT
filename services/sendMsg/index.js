import address from "../../constants/config";

const SendMSG = async (e, object) => {
  e.preventDefault();
  try {
    await fetch("https://api.staticforms.xyz/submit", {
      method: "POST",
      body: JSON.stringify({
        name: Object.keys(object).map(
          (el) => `<br><strong>${el}</strong> - ${object[el]}`
        ),
        accessKey: address.accessKey,
      }),
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
};

export default SendMSG;
