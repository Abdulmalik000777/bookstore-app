import faker from "faker";

export const getLocalizedFaker = (locale) => {
  try {
    faker.locale = locale;
    // Test if the locale supports commerce properties
    faker.commerce.productName();
  } catch (error) {
    // Fallback to en_US if the locale doesn't support commerce properties
    faker.locale = "en_US";
  }
  return faker;
};
