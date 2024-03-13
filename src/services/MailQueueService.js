import { fetchPlus } from "src/modules/fetchModule";

export async function sendMail() {
    return fetchPlus({
      Url: "/mail_queue/send_mail",
      Method: "POST",
      hasUserauth: true
    });
  }

  export async function sendMailById(user_id) {
    return fetchPlus({
      Url: "/mail_queue/send_mail",
      Method: "POST",
      Query: {id: user_id},
      hasUserauth: true
    });
  }

  export async function sendMailById() {
    return fetchPlus({
      Url: "/mail_queue/count",
      hasUserauth: true
    });
  }

  export async function sendMailById() {
    return fetchPlus({
      Url: "/mail_queue/count",
      hasUserauth: true
    });
  }