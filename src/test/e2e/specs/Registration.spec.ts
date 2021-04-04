import LoginPage from "../pages/Login.page";
import registration from "../../data/RegistrationProvider";
import DemoAccountDetailsModal from "../pages/DemoAccountDetailsModal.page";
import HomePage from "../pages/Home.page";

describe("Registration test.", () => {
  beforeEach(() => {
    LoginPage.open();
    LoginPage.acceptCookies();
  });

  it("Registration test", () => {
    const RegistrationPage = LoginPage.transferToRegistrationPage();
    RegistrationPage.setRegistrationDataAndProceed(
      registration.user.email,
      registration.user.phoneNumber,
      registration.user.firstName,
      registration.user.lastName
    );
    DemoAccountDetailsModal.closeModal();
    expect(HomePage.getUserBalanceSection()).toBeDisplayed();
  });
});
