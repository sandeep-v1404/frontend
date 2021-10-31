import React from "react";
import "./cta.scss";
const CTA = () => {
  return (
    <>
      <div class="icon-set">
        <div class="icon-item">
          <div class="icon-container">
            <span class="lnr lnr-eye"></span>
          </div>
          <h1>EYE</h1>
          <p>
            Fugiat iusto eveniet quaerat aliquam quas similique expedita,
            molestias fugiat expedita.
          </p>
        </div>
        <div class="icon-item">
          <div class="icon-container">
            <span class="lnr lnr-magic-wand"></span>
          </div>
          <h1>MAGIC</h1>
          <p>
            Ipsum dolor sit amet consectetur adipisicing elit. Cumque repellat
            non molestias fugiat
          </p>
        </div>
        <div class="icon-item last">
          <div class="icon-container">
            <span class="lnr lnr-rocket"></span>
          </div>
          <h1>ROCKET</h1>
          <p>
            Cumque repellat non molestias fugiat iusto eveniet quaerat aliquam
            quas similique expedita.
          </p>
        </div>
        <div class="clearfix"></div>
      </div>
    </>
  );
};

export default CTA;
