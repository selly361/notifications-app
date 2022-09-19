import { createGlobalStyle } from "styled-components";

// --body-bg: #141625;
// --sidebar-bg: #1e2139;
// --form-background: #141625;
// --form-field-bg: #1e2139;
// --form-field-border: #252945;
// --secondary-button-bg: #252945;
// --secondary-button-hover: #fff;
// --secondary-button-text: #dfe3fa;
// --tertiary-button-bg: #363b53;
// --tertiary-button-hover: #1e2139;
// --tertiary-button-text: #dfe3fa;
// --quaternary-button-bg: #252945;
// --quaternary-button-hover: #1e2139;
// --quaternary-button-text: #dfe3fa;
// --invoice-item-bg: #1e2139;
// --draft-invoice-bg: rgba(223,227,250,.06);
// --draft-invoice-text: #dfe3fa;
// --invoice-table-footer-bg: #0c0e16;
// --invoice-table-bg: #252945;
// --popup-bg: #1e2139;
// --filter-dropdown-bg: #252945;
// --filter-dropdown-shadow: rgba(0,0,0,.25);
// --filter-checkbox-bg: #1e2139;
// --text-heading: #fff;
// --second-text-color: #dfe3fa;
// --placeholder-color: ##fff;
// --link-color: #fff;
// --link-hover: #888eb0;
// --form-label: #dfe3fa;
// --small-text-color: #e0e4fb;

export const dark = {
  color: {
    body: {
      bg: "#141625",
    },

    heading: {
      color: "#fff",
    },
    text: {
      color: "white",
      hover: "hsl(219, 85%, 76%)",
    },

    notifArea: {
      bg: "#1e2139",
      boxShadow: "rgb(0 0 0 / 5%) -6px 6px 24px",
    },

    notificationMessage: {
      message: "hsl(219, 12%, 82%)",
      post: "hsl(219, 85%, 76%)",
    },

    privateMessage: "#3d5896",

    unread: {
      bg: "hsl(211, 68%, 24%)"
    }
  },

};

export const light = {
  color: {
    body: {
      bg: "hsl(211, 68%, 94%)",
    },

    heading: {
      color: "hsl(224, 21%, 14%)",
    },
    text: {
      color: "black",
      hover: "hsl(219, 85%, 26%)",
    },

    notifArea: {
      bg: "hsl(0, 0%, 100%)",
      boxShadow: "rgb(0 0 0 / 5%) -6px 6px 24px",
    },

    notificationMessage: {
      message: "hsl(219, 12%, 42%)",
      post: "hsl(219, 85%, 26%)",
    },

    privateMessage: "hsl(205, 33%, 90%)",

    unread: {
      bg: "hsl(211, 68%, 94%)"
    }
  },
};

export const GlobalStyles = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Plus Jakarta Sans', sans-serif;
    }


    body {
        min-height: 100vh;
        width: 100vw;
        overflow-x: hidden;
    }


    @media (max-width: 1000px){
        html {
            font-size: 12px;
        }
    }
`;
