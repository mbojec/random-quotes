import React from 'react';
import GithubLogo from "./resources/svg/githubLogo";
import LinkedinLogo from "./resources/svg/linkedinLogo";
import GmailLogo from "./resources/svg/gmailLogo";

function Footer() {
  return(
    <div className={'footer'}>
      <div className={'row'}>
        <div className={'col-xs-12'}><h2>Contact</h2></div>
        <div className={'col-xs-12 footer__icons-container'}>
          <a title={'mbojec'} href={'https://github.com/mbojec'}><GithubLogo/></a>
          <a title={'Marek Bojęć'} href={'https://www.linkedin.com/in/marek-boj%C4%99%C4%87-425b68117/'}><LinkedinLogo/></a>
          <a title={'mbojec.dev@gmail.com'} href={'mailto:mbojec.dev@gmail.com'}><GmailLogo/></a>
        </div>
      </div>
    </div>
  )
}

export default Footer