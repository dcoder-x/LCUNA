
const footer = ` 
<style>
  /* About Footer */
footer {
  background: #000000;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: "Circular Std", sans-serif;
  padding: 6.25rem 0;
}
.footer div {
  margin: 1rem;
}
.column p {
  color: #ffffff;
}
.footer {
  width: 90%;
  margin: 0 auto;
}
.footer {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.footer a {
  color: #f5f5f5;
}
.footer {
  font-size: 1rem;
  line-height: 35px;
}
.footer h4 {
  color: #555555;
}
.copyright {
  color: #ffffff;
  text-align: center;
  margin-top: 6.25rem;
}
.socials a {
  margin-left: 3.5rem;
}
</style> 
<footer>
<div class="footer">
  <div class="column">
    <h4>Terms and conditions</h4>
    <p><a href="/bookNow">Privacy</a></p>
    <p><a href="/bookNow">Support</a></p>
  </div>
  <div class="column">
    <h4>LCUNA</h4>
    <p>
      Nimba County, Tappita <br />
      City Liberia
    </p>
  </div>
  <div class="column">
    <h4>Info</h4>
    <p>
      hello@lcuna.com <br />
      +000 000 0000
    </p>
  </div>
  <div class="socials">
    <a href=""
      ><img
        src="../images/Instagram.svg"
        alt="instagram"
        data-aos="fade-right"
    /></a>
    <a href=""
      ><img
        src="../images/Facebook.svg"
        alt="facebook"
        data-aos="fade-down"
    /></a>
    <a href=""
      ><img src="../images/Twitter.svg" alt="twitter" data-aos="fade-up"
    /></a>
    <a href=""
      ><img
        src="../images/LinkedIn.svg"
        alt="linkedIn"
        data-aos="fade-left"
    /></a>
  </div>
</div>
<p class="copyright">&#169; LCUNA</p>
</footer>
`

reuse('footer-component',footer,false,true)