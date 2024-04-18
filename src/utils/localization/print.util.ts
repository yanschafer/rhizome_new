import engLocale from "./eng.locale";
import ruLocale from "./ru.locale";
class PrintUtil {
  private storageKey: string = "locale";
  private selectedLang: string;

  private locales = {
    eng: engLocale,
    ru: ruLocale,
  };

  public availableLocales = ["eng", "ru"];

  private setLocale() {
    const locale = localStorage.getItem(this.storageKey) || this.detectSystemLanguage();
    if (this.availableLocales.includes(locale))
      this.selectedLang = locale;
    else this.selectedLang = "ru"; // Default to Russian if the locale is not supported
    localStorage.setItem(this.storageKey, this.selectedLang); // Save the detected or default locale
  }

  private detectSystemLanguage() {
    const systemLang = navigator.language.slice(0, 2); // Get the first two characters of the system language
    return systemLang === "ru" ? "ru" : "eng"; // Default to English for any language other than Russian
  }


  constructor() {
    this.setLocale();
    if (this.selectedLang === "eng") {
      console.log("Thanks to my bro Ahmad Numan for testing out ENG locale.");
    }
  }

  public switchTo(locale: string) {
    localStorage.setItem(this.storageKey, locale);
    this.setLocale();
  }

  public getSelectedLang() {
    return this.selectedLang;
  }

  public localize(key: string, module: string = "default"): string {
    const localeModule = this.locales[this.selectedLang].modules[module];
    if (localeModule) return localeModule[key];
    else return `LOCALIZATION FOR ${module}.${key} NOT FOUND`;
  }
}

export default new PrintUtil();
