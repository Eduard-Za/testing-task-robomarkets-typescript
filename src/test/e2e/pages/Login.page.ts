import { HomePage } from "./Home.page";
import { RegistrationPage } from "./Registration.page";

class LoginPage {
  private loginBtnSelector = ".button_type_brand";
  private emailFieldSelector = ".input__field_mode_email";
  private passwordFieldSelector = ".password__field_mode_password";
  private errorMessagesFromTopSelector =
    ".tooltip_pos_top .err__txt:not(:empty)";
  private errorMessageFromRightSelector = ".tooltip_pos_right .err:not(:empty)";
  private loginAsGuestSelector = "#Without_Registration_Link";
  private acceptCookiesSelector = "#AllowCookies_Allow_ViewButton";
  private registrationBtnSelector = ".button_type_quick-demo";

  open() {
    browser.reloadSession();
    browser.url("/");
  }

  getErrorMessagesFromTopOfTheLoginModal() {
    return $$(this.errorMessagesFromTopSelector);
  }

  getErrorMessagesFromRightOfTheLoginModal() {
    return $$(this.errorMessageFromRightSelector);
  }

  login(email: string, password: string): HomePage {
    $(this.emailFieldSelector).waitForDisplayed();
    $(this.emailFieldSelector).setValue(email);
    $(this.passwordFieldSelector).setValue(password);
    $(this.loginBtnSelector).waitForClickable();
    $(this.loginBtnSelector).click();
    return new HomePage();
  }

  loginAsGuest(): HomePage {
    $(this.loginAsGuestSelector).waitForEnabled();
    $(this.loginAsGuestSelector).click();
    return new HomePage();
  }

  acceptCookies() {
    $(this.acceptCookiesSelector).waitForEnabled();
    return $(this.acceptCookiesSelector).click();
  }

  transferToRegistrationPage() {
    $(this.registrationBtnSelector).waitForEnabled();
    $(this.registrationBtnSelector).click();
    return new RegistrationPage();
  }
}

export default new LoginPage();
