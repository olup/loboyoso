import React from "react";
import styled from "styled-components";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import pattern from "../assets/pattern.svg";

const Container = styled.div`
  .email-form {
    padding: 20px;
    text-align: center;
    border: 1px solid #ccc;
    position: relative;
    .title {
      margin-bottom: 20px;
      text-transform: capitalize;
    }
    input {
      font-family: "Merriweather";
    }
    input.email {
      outline: none;
      border: 2px solid #222;
      padding: 10px 15px;
      &:focus {
        border: 2px solid #222;
      }
    }
    input.button {
      margin-left: -3px;
      color: #222;
      background-color: white;
      border: none;
      border: 2px solid #222;
      padding: 10px 15px;
      cursor: pointer;
      outline: none;
      &:hover {
        background-color: #222;
        color: white;
      }
    }
  }

  .email-box {
    position: relative;
    margin: 50px 0;
    font-family: "Merriweather";

    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: url(${pattern});
      background-size: 55%;
      background-position: -50px -93px;
      opacity: 0.1;
      z-index: -1;
    }

    .infos {
      position: absolute;
      top: 0;
      align-items: center;
      display: flex;
      justify-content: center;
      bottom: 0;
      left: 0;
      right: 0;
      &.success {
        background-color: rgba(255, 255, 255, 0.69);
      }
    }
  }
`;

export default class CustomForm extends React.Component {
  state = {
    EMAIL: ""
  };
  render() {
    return (
      <Container>
        <MailchimpSubscribe
          url={
            "https://loboyoso.us18.list-manage.com/subscribe/post?u=296d7bca5781c589845c7c933&amp;id=4650d8675a"
          }
          render={({ subscribe, status, message }) => (
            <div className="email-box">
              <div className="email-form">
                <div style={{ opacity: status ? 0 : 1 }}>
                  <div className="title">
                    Recevoir un email quand il y a quelque chose de nouveau
                  </div>
                  <input
                    className="email"
                    value={this.state.EMAIL}
                    onChange={event =>
                      this.setState({ EMAIL: event.target.value })
                    }
                    placeholder="Email"
                    id="email"
                    name="email"
                    type="email"
                  />
                  <input
                    className="button"
                    type="submit"
                    value="M'inscrire"
                    onClick={() => subscribe(this.state)}
                  />
                </div>
              </div>
              {status === "sending" && (
                <div className="infos">Vérification ...</div>
              )}
              {status === "error" && (
                <div className="infos">
                  Une erreur est survenue. Votre email est-il bien écrit ?
                </div>
              )}
              {status === "success" && (
                <div className="infos">
                  Très bien, à vous les petites nouvelles !
                </div>
              )}
            </div>
          )}
        />
      </Container>
    );
  }
}
