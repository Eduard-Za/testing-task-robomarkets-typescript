import { HomePage } from "./Home.page";

export class RegistrationPage {
  private emailFieldSelector = ".input__field_mode_email";
  private phoneFieldSelector = ".quick-demo-acc-form__phone input";
  private firstNameFieldSelector = ".quick-demo-acc-form__name input";
  private lastNameFieldSelector = ".quick-demo-acc-form__surname input";
  private registrationBtnSelector = ".quick-demo-acc-form__button .button";

  setRegistrationDataAndProceed(
    email: string,
    phone: string,
    firstName: string,
    lastName: string
  ): HomePage {
    $(this.emailFieldSelector).waitForDisplayed();
    $(this.emailFieldSelector).setValue(email);
    $(this.phoneFieldSelector).setValue(phone);
    $(this.firstNameFieldSelector).setValue(firstName);
    $(this.lastNameFieldSelector).setValue(lastName);
    $(this.registrationBtnSelector).click();
    return new HomePage();
  }
}

export default new RegistrationPage();
