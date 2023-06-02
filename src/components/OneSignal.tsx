import OneSignal from "react-onesignal";
export default async function runOneSignal() {
  await OneSignal.init({
    appId: "60b3803b-28aa-4d68-b40d-e91d97bcf28c",
    allowLocalhostAsSecureOrigin: true,
  });
  OneSignal.showSlidedownPrompt();
}
