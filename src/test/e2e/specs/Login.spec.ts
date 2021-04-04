import LoginPage from "../pages/Login.page";
import login from "../../data/login.json";
import loginProvider from "../../data/LoginProvider";

import type { HomePage } from "../pages/Home.page";

describe("Authentication test.", () => {
  beforeEach(() => {
    LoginPage.open();
    LoginPage.acceptCookies();
  });

  loginProvider.forEach(({ credentials: { email, password }, errors }) => {
    it(`Error messages are displayed if credentials are invalid ${email}:${password}`, () => {
      LoginPage.login(email, password);
      const errorMessagesFromTopOfTheLoginModal = LoginPage.getErrorMessagesFromTopOfTheLoginModal();
      expect(errorMessagesFromTopOfTheLoginModal).toBeElementsArrayOfSize(2);
      expect(
        errorMessagesFromTopOfTheLoginModal.map((e) => e.getText())
      ).toEqual(expect.arrayContaining(errors));

      const errorMessagesFromTheRightOfTheLoginModal = LoginPage.getErrorMessagesFromRightOfTheLoginModal();
      expect(errorMessagesFromTheRightOfTheLoginModal).toBeElementsArrayOfSize(
        2
      );
      expect(
        errorMessagesFromTheRightOfTheLoginModal.map((e) => e.getText())
      ).toEqual(expect.arrayContaining(errors));
    });
  });

  it("Login with valid credentials", () => {
    const homepage: HomePage = LoginPage.login(
      login.user.email,
      login.user.password
    );
    expect(homepage.getUserBalanceSection()).toBeDisplayed();
  });

  it("Login as guest", () => {
    const homepage: HomePage = LoginPage.loginAsGuest();
    expect(homepage.getAttentionMessage()).toBeDisplayed();
  });
});
