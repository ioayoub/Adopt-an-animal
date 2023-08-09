import React from "react";

function Footer() {
  return (
    <footer className="border-t-1">
      <div className="flex flex-col items-center justify-center py-4 text-gray-600">
        <p className="text-sm">Adopt An Animal</p>
        <p className="text-sm">
          Made with <span className="text-red-500">&hearts;</span> by{" "}
          <a href="https://github.com/ioayoub" target="_blank" rel="noreferrer">
            IOAyoub
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
