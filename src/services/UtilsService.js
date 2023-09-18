import { fetchPlus } from "src/modules/fetchModule";

export async function sendMail(to, content) {
  return fetchPlus({
    Url: `/utils/send-email/`, 
    Method: "POST",
    Query: {
      email: to,
      template: content
    }
  });
}
