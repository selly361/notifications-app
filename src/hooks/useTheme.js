import React, { useState, useEffect } from "react";

export const useTheme = () => {
  let defaultTheme = localStorage.getItem("theme") ||
    (window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light");

      const [theme, setTheme] = useState(defaultTheme)

      useEffect(() => {
        localStorage.setItem("theme", theme)
      })


      return [theme, setTheme]
};
