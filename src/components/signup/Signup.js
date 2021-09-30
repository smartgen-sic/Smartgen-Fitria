import React from "react";
import "./signup.css";

export default function Signup() {
    return (
        <body>
            <center>
        <h1 class="tittle">SmartGen</h1>
        <h3 class="subtittle">Sign up your account</h3>
        <input  class="field-signup" type="text" placeholder="Email address" aria-label=".form-control-sm example"></input> 
        <div class="signup">
          <i class="fas fa-user"></i>  </div>
        <input class="field-pw" type="password" placeholder="........" aria-label=".form-control-sm example"></input>
        <div class="password-icon"><i class="fas fa-lock"></i></div>
        <input class="field-pw-again" type="password" placeholder="password again" aria-label=".form-control-sm example"></input>
        <div class="password-icon-again"><i class="fas fa-lock"></i></div>
        <button type="button" class="button-sign-up">Sign up</button>
       
    
    
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-U1DAWAznBHeqEIlVSCgzq+c9gqGAJn5c/t99JyeKa9xxaYpSvHU5awsuZVVFIhvj" crossorigin="anonymous"></script>
    
      </center>
      </body>
    );
}