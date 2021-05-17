import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import possibleTypes from "./Cache/possibleTypes.json";
import { SessionProvider } from "./Contexts/SessionContext";
import { CookiesProvider } from "react-cookie";
import { BrowserRouter as Router } from "react-router-dom";
const client = new ApolloClient({
  uri: "http://ec2-3-230-171-229.compute-1.amazonaws.com:5001/graphql",
  cache: new InMemoryCache({
    possibleTypes,
    typePolicies: {
      Project: {
        fields: {
          members: {
            merge: false,
          },
        },
      },
    },
  }),
  credentials: "include",
});
ReactDOM.render(
  <React.StrictMode>
    <CookiesProvider>
      <Router>
        <ApolloProvider client={client}>
          <SessionProvider>
            <App />
          </SessionProvider>
        </ApolloProvider>
      </Router>
    </CookiesProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
