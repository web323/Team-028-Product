/* eslint-disable no-console */
/* eslint-disable quotes */
/*eslint quotes: ["error", "double"]*/
/*eslint-env es6*/
/* eslint no-console: "error" */
import React from "react";
import { Link, Redirect, BrowserRouter as Router, withRouter } from "react-router-dom";
import Container from "react-bootstrap/Container";
import serialize from "form-serialize";
import "../../styles/modal.css";
import About from "./About";
import Contact from "./Contact";
import Login from "./Login";
import Registration from "./Registration";
import "../../styles/modal.css";
import mapStateToLocals from "./stateToLocals";
import getTown from "./localsToTown";
import getTowns from "./localsToTown";

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showReg: false,
      showLog: false,
      showContact: false,
      showAbout: false,
      Password: "",
      confirmPassword: "",
      redirect: null
    };

    this.showRegistrationModal = this.showRegistrationModal.bind(this);
    this.closeRegistrationModal = this.closeRegistrationModal.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleConfirmPasswordChange = this.handleConfirmPasswordChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.mapStateToLGA = this.mapStateToLGA.bind(this);
    this.mapLGAToTown = this.mapLGAToTown.bind(this);
    this.confPassword = React.createRef();
    this.lga = React.createRef();
    this.town = React.createRef();
    this._state = React.createRef();

    this.showLoginModal = this.showLoginModal.bind(this);
    this.closeLoginModal = this.closeLoginModal.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.logFormText = React.createRef();

    this.showContactModal = this.showContactModal.bind(this);
    this.closeContactModal = this.closeContactModal.bind(this);

    this.showAboutModal = this.showAboutModal.bind(this);
    this.closeAboutModal = this.closeAboutModal.bind(this);
  }
  componentDidMount() {
    if (!localStorage.getItem("email") && !localStorage.getItem("password")) {
      // make api call with email as username and password
    }
  }

  showRegistrationModal(event) {
    event.preventDefault();
    this.setState({ showReg: true });
  }
  closeRegistrationModal() {
    this.setState({ showReg: false });
  }
  handleBlur(event) {
    event.preventDefault();
    if (this.state.password !== this.state.confirmPassword) {
      this.confPassword.current.classList.remove("d-none");
    }
  }
  submitRegistration(event) {
    event.preventDefault();
    /** const elements = document.querySelector(`form[name="registration"]`).elements;
    const requiredFields = {};
    for (let index = 0; index < elements.length; index++) {
      const item = elements.item(index);
      requiredFields[item.name] = item.value;
    } ***/

    const required = document.querySelectorAll(`input[required]`);
    // Check if all the fields are filled
    required.forEach((element) => {
      if (element.value === "") {
        // this.logFormText.current.classList.remove("d-none");
        return;
      }
    });

    const form = document.querySelector(`form[name="registration"]`);
    const formFields = serialize(form, { hash: true }); // Make api call with form
    console.log(formFields);
  }

  mapStateToLGA(event) {
    event.preventDefault();
    const select = this.lga.current;

    // Check if the select has options if it does remove the options
    if (select.options.length > 0) {
      let i,
        L = select.options.length - 1;
      for (i = L; i >= 0; i--) {
        select.remove(i);
      }
    }

    const st = event.target.value;
    const lgas = mapStateToLocals(st);

    for (let index = 0; index < lgas.length; index++) {
      const option = document.createElement("option");
      const element = lgas[parseInt(index)];
      option.setAttribute("name", element);
      option.setAttribute("id", element);
      option.textContent = element;
      select.appendChild(option);
    }
  }

  mapLGAToTown(event) {
    event.preventDefault();
    const select = this.town.current;

    // Check if the select has options if it does remove the options
    if (select.options !== 0) {
      let i,
        L = select.options.length - 1;
      for (i = L; i >= 0; i--) {
        select.remove(i);
      }
    }

    /***const lga = this.lga.current;
    const state = this._state.current;
    const lgaValue = lga.options[lga.selectedIndex].value;
    const stateValue = state.options[state.selectedIndex].value;

    const towns = getTowns(stateValue, lgaValue);

    for (let index = 0; index < towns.length; index++) {
      const option = document.createElement("option");
      const element = towns[index];
      option.setAttribute("name", element);
      option.setAttribute("id", element);
      option.textContent = element;
      select.appendChild(option);
    }***/
  }
  handleConfirmPasswordChange(event) {
    event.preventDefault();
    this.setState({ confirmPassword: event.target.value });
  }
  handlePasswordChange(event) {
    event.preventDefault();
    this.setState({ password: event.target.value });
  }

  showLoginModal(event) {
    event.preventDefault();
    this.setState({ showLog: true });
  }
  closeLoginModal() {
    this.setState({ showLog: false });
  }
  handleLogin(event) {
    event.preventDefault();
    const required = document.querySelectorAll(`input[required]`);
    // Check if all the fields are filled
    required.forEach((element) => {
      if (element.value === "") {
        this.logFormText.current.classList.remove("d-none");
        return;
      }
      this.props.history.push("/sme");
      // this.setState({ redirect: "/sme" });
    });

    const form = document.querySelector(`form[name="login"]`);
    const formFields = serialize(form, { hash: true }); // Make api call with form

    

    localStorage.setItem("email", formFields.emaill);
    localStorage.setItem("password", formFields.password);
  }

  showContactModal(event) {
    event.preventDefault();
    this.setState({ showContact: true });
  }
  closeContactModal() {
    this.setState({ showContact: false });
  }

  showAboutModal(event) {
    event.preventDefault();
    this.setState({ showAbout: true });
  }
  closeAboutModal() {
    this.setState({ showAbout: false });
  }

  render() {
    if (this.state.redirect) {
      return (
        <Router>
          <Redirect to={this.state.redirect} />
        </Router>
      );
    }
    return (
      <Container className="navbar">
        <ul className="nav">
          <Router>
            <li className="nav-item">
              <Link className="nav-link" onClick={this.showRegistrationModal} to="">
                Register
              </Link>
            </li>
            <li>
              <Link className="nav-link" onClick={this.showLoginModal} to="">
                Login
              </Link>
            </li>
            <li>
              <Link to="" onClick={this.showContactModal} className="nav-link">
                Contact
              </Link>
            </li>
            <li>
              <Link onClick={this.showAboutModal} to="" className="nav-link">
                About
              </Link>
            </li>
          </Router>
        </ul>
        <Registration
          showModal={this.state.showReg}
          closeModal={this.closeRegistrationModal}
          lga={this.lga}
          _state={this._state}
          town={this.town}
          register={this.submitRegistration}
          mapStateToLga={this.mapStateToLGA}
          mapLGAToTown={this.mapLGAToTown}
          handleBlur={this.handleBlur}
          handleConfirmPasswordChange={this.handleConfirmPasswordChange}
          handlePasswordChange={this.handlePasswordChange}
        />
        <Login
          showModal={this.state.showLog}
          closeModal={this.closeLoginModal}
          login={this.handleLogin}
          current={this.logFormText}
        />
        <Contact showModal={this.state.showContact} closeModal={this.closeContactModal} />
        <About showModal={this.state.showAbout} closeModal={this.closeAboutModal} />
      </Container>
    );
  }
}

export default withRouter(Nav);
