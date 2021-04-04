import type { Element } from "webdriverio";

export class HomePage {
  private userAccountDataSelector = "#account-selector";
  private attentionMessageForGuestsSelector = ".important";

  getUserBalanceSection(): Element<any> {
    $(this.userAccountDataSelector).waitForDisplayed();
    return $(this.userAccountDataSelector);
  }

  getAttentionMessage(): Element<any> {
    $(this.attentionMessageForGuestsSelector).waitForDisplayed();
    return $(this.attentionMessageForGuestsSelector);
  }
}

export default new HomePage();
