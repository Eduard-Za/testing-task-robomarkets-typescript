export class DemoAccountDetailsModalPage {
  private closeModalBtnSelector = ".demo-account-details__close .button";

  closeModal(): void {
    $(this.closeModalBtnSelector).waitForClickable();
    $(this.closeModalBtnSelector).click();
  }
}

export default new DemoAccountDetailsModalPage();
