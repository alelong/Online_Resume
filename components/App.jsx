import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { withRouter, Switch, Route, Redirect, Link } from 'react-router-dom';
import styled from 'styled-components';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Header from './Header.jsx';
import TopMenu from './TopNavigation.jsx';
import {Wrapper, navBarWidth_desktop, navBarWidth_mobile, headerHeight_desktop, headerHeight_mobile, borderStyle, borderWidth, borderColor } from './Skeleton.jsx';
import {WorkTile1, WorkTile2, WorkTile3, WorkTile4, WorkTile5, WorkTile6} from './Work.jsx';
import {LeisureTile1, LeisureTile2, LeisureTile3, LeisureTile4, LeisureTile5, LeisureTile6} from './Leisure.jsx';
import {HomeTile1, HomeTile2, HomeTile3, HomeTile4, HomeTile5, HomeTile6} from './Home.jsx';
import {LanguagesTile1, LanguagesTile2, LanguagesTile3, LanguagesTile4, LanguagesTile5, LanguagesTile6} from './Languages.jsx';
import {EducationTile1, EducationTile2, EducationTile3, EducationTile4, EducationTile5, EducationTile6} from './Education.jsx';
import {SkillsTile1, SkillsTile2, SkillsTile3, SkillsTile4, SkillsTile5, SkillsTile6} from './Skills.jsx';
import {AboutTile1, AboutTile2, AboutTile3, AboutTile4, AboutTile5, AboutTile6} from './About.jsx';
import LeftNavigation from './LeftNavigation.jsx';
import RightNavigation from './RightNavigation.jsx';
import MobileNavigation from './MobileNavigation.jsx';
import './../index.less';

const color = '#111c2f';

const HeaderContainer = styled.div`
  width: 100%;
  height: ${headerHeight_desktop};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: white ;
  color: ${color} ;
  font-family: "Courier New", serif;
  font-size: 36px;
  border-bottom: double 5px;
  z-index: 2;
  position: relative;
  @media only screen 
    and (min-device-width: 375px) 
    and (max-device-width: 667px) 
    and (-webkit-min-device-pixel-ratio: 2)
    and (orientation: portrait) {
      height: ${headerHeight_mobile};
      font-size: 70px;
  }
`;

const BurgerMenu = styled.div`
  display: none;
  width: ${navBarWidth_mobile};
  height: 100%;
  background-image: url(../img/Burger.png);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  justify-content: center;
  @media only screen 
    and (min-device-width: 375px) 
    and (max-device-width: 667px) 
    and (-webkit-min-device-pixel-ratio: 2)
    and (orientation: portrait) {
      display: flex;
  }
`;

const FooterContainer = styled.div`
  width: 100%;
  height: ${headerHeight_desktop};
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  background-color: white ;
  color: ${color} ;
  font-family: "Courier New", serif;
  font-size: 36px;
  border-top: double 5px;
  z-index: 1;
  position: relative;
  @media only screen 
    and (min-device-width: 375px) 
    and (max-device-width: 667px) 
    and (-webkit-min-device-pixel-ratio: 2)
    and (orientation: portrait) {
      height: ${headerHeight_mobile};
  }
`;

const Body = styled.div`
  display: flex;
  flex-direction: row;
  height: 120%;
  width: 100%;
  @media only screen 
    and (min-device-width: 375px) 
    and (max-device-width: 667px) 
    and (-webkit-min-device-pixel-ratio: 2)
    and (orientation: portrait) {
      //top: ${headerHeight_mobile};
  }
`;

const LanguageSwitcherWrapper_Header = styled.div`
  width: ${navBarWidth_desktop};
  display: flex;
  justify-content: space-evenly;
  color: ${color};
  font-size: 20px;
  @media only screen 
    and (min-device-width: 375px) 
    and (max-device-width: 667px) 
    and (-webkit-min-device-pixel-ratio: 2)
    and (orientation: portrait) {
      font-size: 35px;
      flex-direction: column;
      text-align: center;
      width: ${navBarWidth_mobile};
  }
`;

const LanguageItem = styled(Link)`
  color: ${props => props.selected ? 'white' : color}; 
  background-color: ${props => props.selected ? color : 'white'};
  cursor:  pointer;
  visibility: visible;
  transition: opacity 0.5s;
  text-decoration: none;
  @media only screen 
    and (min-device-width: 375px) 
    and (max-device-width: 667px) 
    and (-webkit-min-device-pixel-ratio: 2)
    and (orientation: portrait) {
      width: 100%;
  }
`;

const en_links = ['/en/home', '/en/work', '/en/about', '/en/skills', '/en/education', '/en/languages', '/en/leisure', '/'];
const fr_links = ['/fr/accueil', '/fr/travail', '/fr/a-propos', '/fr/competences', '/fr/scolarite', '/fr/langues', '/fr/loisirs','/'];

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      FR: true,
      EN: false,
      linksTable: fr_links,
      mobileMenuVisible: false,
    }
    this.selectFR = this.selectFR.bind(this);
    this.selectEN = this.selectEN.bind(this);
    this.toggleMobileMenu = this.toggleMobileMenu.bind(this);
  }

  selectFR () {
    if (!this.state.FR){
      this.setState({
      FR: true,
      EN: false,
      linksTable: fr_links,
      //lang: 'FR',
      }, function (){
        console.log(this.state.FR);
        console.log(this.state.EN);
      });
    } else {
      console.log(this.state.FR);
      console.log(this.state.EN);
    }
  }

  selectEN () {
    if (!this.state.EN){
      this.setState({
      FR: false,
      EN: true,
      linksTable: en_links,
      //lang: 'EN',
      }, function (){
        console.log(this.state.FR);
        console.log(this.state.EN);
      });
    } else {
      console.log(this.state.FR);
      console.log(this.state.EN);
    }
  }

  toggleMobileMenu () {
    this.setState({
      mobileMenuVisible: !this.state.mobileMenuVisible
    }, function (){
        console.log(this.state.mobileMenuVisible);
      });
  }

  render(){
    const {location} = this.props;
    const currentPath = this.props.location.pathname;
    const i = this.state.linksTable.indexOf(currentPath);
    const timeout = {enter: 1000, exit: 1000};
    const lang = this.state.FR ? 'FR' : 'EN';
    const links = this.state.linksTable;
    const homeLink = links[0];
    const workLink = links[1];
    const aboutLink = links[2];
    const skillsLink = links[3];
    const eduLink = links[4];
    const langLink = links[5];
    const leisureLink = links[6];
    const defaultLink = links[7];
    //const noAnim = !(currentPath==links[0] || currentPath==links[6] || currentPath==links[7]);
    return(
      <div>
          <HeaderContainer>
            <BurgerMenu onClick={this.toggleMobileMenu}/>
            <Header link_home={homeLink}/>
            <LanguageSwitcherWrapper_Header>
              <LanguageItem selected={this.state.FR} onClick={this.selectFR} to={fr_links[i]}>
                FR
              </LanguageItem>
              <div class="langSeparator_desktop">|</div>
              <div class="langSeparator_mobile">-</div>
              <LanguageItem selected={this.state.EN} onClick={this.selectEN} to={en_links[i]}>
                EN
              </LanguageItem>
            </LanguageSwitcherWrapper_Header>
          </HeaderContainer>
          <TopMenu
            copyLang={lang}
            link_home={homeLink}
            aboutLink={aboutLink}
            workLink={workLink}
            skillsLink={skillsLink}
            eduLink={eduLink}
            langLink={langLink}
            leisureLink={leisureLink}
          />
          <MobileNavigation
            visible={this.state.mobileMenuVisible}
            copyLang={lang}
            link_home={homeLink}
            aboutLink={aboutLink}
            workLink={workLink}
            skillsLink={skillsLink}
            eduLink={eduLink}
            langLink={langLink}
            leisureLink={leisureLink}
            onClick={this.toggleMobileMenu}
          />
          <Body>
          <LeftNavigation
            copyLang={lang}
            link_one={aboutLink} 
            link_two={skillsLink} 
            link_three={langLink}/>
          <Wrapper>
            <TransitionGroup component={null}>
              <CSSTransition key={location.key} timeout={timeout} classNames="slideRight">
                <Switch location={location}> /*location prop necessary to keep rendering old component after route has changed*/
                  <Route exact path={defaultLink} render={(props) => <HomeTile6 {...props} copyLang={lang} target={leisureLink} />} />
                  <Route path={homeLink} render={(props) => <HomeTile6 {...props} copyLang={lang} target={leisureLink} />} />
                  <Route path={workLink} render={(props) => <WorkTile6 {...props} copyLang={lang} />} />
                  <Route path={aboutLink} render={(props) => <AboutTile6 {...props} copyLang={lang} />} />
                  <Route path={skillsLink} render={(props) => <SkillsTile6 {...props} copyLang={lang} />} />
                  <Route path={eduLink} render={(props) => <EducationTile6 {...props} copyLang={lang} />} />
                  <Route path={langLink} render={(props) => <LanguagesTile6 {...props} copyLang={lang} />} />
                  <Route path={leisureLink} render={(props) => <LeisureTile6 {...props} copyLang={lang} />} />
                  <Route render={() => <div>Not Found</div>} />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
            <TransitionGroup component={null}>
              <CSSTransition key={location.key} timeout={timeout} classNames="slideLeft">
                <Switch location={location}>
                  <Route exact path={defaultLink} render={(props) => <HomeTile5 {...props} copyLang={lang} target={langLink} />} />
                  <Route path={homeLink} render={(props) => <HomeTile5 {...props} copyLang={lang} target={langLink} />} />
                  <Route path={workLink} render={(props) => <WorkTile5 {...props} copyLang={lang} />} />
                  <Route path={aboutLink} render={(props) => <AboutTile5 {...props} copyLang={lang} />} />
                  <Route path={skillsLink} render={(props) => <SkillsTile5 {...props} copyLang={lang} />} />
                  <Route path={eduLink} render={(props) => <EducationTile5 {...props} copyLang={lang} />} />
                  <Route path={langLink} render={(props) => <LanguagesTile5 {...props} copyLang={lang} />} />
                  <Route path={leisureLink} render={(props) => <LeisureTile5 {...props} copyLang={lang} />} />                  
                  <Route render={() => <div>Not Found</div>} />
                </Switch>
              </CSSTransition>
              </TransitionGroup>
            <TransitionGroup component={null}>
              <CSSTransition key={location.key} timeout={timeout} classNames="slideRight">
                <Switch location={location}>
                  <Route exact path={defaultLink} render={(props) => <HomeTile4 {...props} copyLang={lang} target={eduLink} />} />
                  <Route path={homeLink} render={(props) => <HomeTile4 {...props} copyLang={lang} target={eduLink} />} />
                  <Route path={workLink} render={(props) => <WorkTile4 {...props} copyLang={lang} />} />
                  <Route path={aboutLink} render={(props) => <AboutTile4 {...props} copyLang={lang} />} />
                  <Route path={skillsLink} render={(props) => <SkillsTile4 {...props} copyLang={lang} />} />
                  <Route path={eduLink} render={(props) => <EducationTile4 {...props} copyLang={lang} />} />
                  <Route path={langLink} render={(props) => <LanguagesTile4 {...props} copyLang={lang} />} />
                  <Route path={leisureLink} render={(props) => <LeisureTile4 {...props} copyLang={lang} />} />  
                  <Route render={() => <div>Not Found</div>} />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
            <TransitionGroup component={null}>
              <CSSTransition key={location.key} timeout={timeout} classNames="slideLeft">
                <Switch location={location}>
                  <Route exact path={defaultLink} render={(props) => <HomeTile3 {...props} copyLang={lang} target={skillsLink} />} />
                  <Route path={homeLink} render={(props) => <HomeTile3 {...props} copyLang={lang} target={skillsLink} />} />
                  <Route path={workLink} render={(props) => <WorkTile3 {...props} copyLang={lang} />} />
                  <Route path={aboutLink} render={(props) => <AboutTile3 {...props} copyLang={lang} />} />
                  <Route path={skillsLink} render={(props) => <SkillsTile3 {...props} copyLang={lang} />} />
                  <Route path={eduLink} render={(props) => <EducationTile3 {...props} copyLang={lang} />} />
                  <Route path={langLink} render={(props) => <LanguagesTile3 {...props} copyLang={lang} />} />
                  <Route path={leisureLink} render={(props) => <LeisureTile3 {...props} copyLang={lang} />} />  
                  <Route render={() => <div>Not Found</div>} />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
            <TransitionGroup component={null}>
              <CSSTransition key={location.key} timeout={timeout} classNames="slideLeft">
                <Switch location={location}>
                  <Route exact path={defaultLink} render={(props) => <HomeTile2 {...props} copyLang={lang} target={aboutLink} />} />
                  <Route path={homeLink} render={(props) => <HomeTile2 {...props} copyLang={lang} target={aboutLink} />} />
                  <Route path={workLink} render={(props) => <WorkTile2 {...props} copyLang={lang} />} />
                  <Route path={aboutLink} render={(props) => <AboutTile2 {...props} copyLang={lang} />} />
                  <Route path={skillsLink} render={(props) => <SkillsTile2 {...props} copyLang={lang} />} />
                  <Route path={eduLink} render={(props) => <EducationTile2 {...props} copyLang={lang} />} />
                  <Route path={langLink} render={(props) => <LanguagesTile2 {...props} copyLang={lang} />} />
                  <Route path={leisureLink} render={(props) => <LeisureTile2 {...props} copyLang={lang} />} />  
                  <Route render={() => <div>Not Found</div>} />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
            <TransitionGroup component={null}>
              <CSSTransition key={location.key} timeout={timeout} classNames="slideRight">
                <Switch location={location}>
                  <Route exact path={defaultLink} render={(props) => <HomeTile1 {...props} copyLang={lang} target={workLink} />} />
                  <Route path={homeLink} render={(props) => <HomeTile1 {...props} copyLang={lang} target={workLink} />} />
                  <Route path={workLink} render={(props) => <WorkTile1 {...props} copyLang={lang} />} />
                  <Route path={aboutLink} render={(props) => <AboutTile1 {...props} copyLang={lang} />} />
                  <Route path={skillsLink} render={(props) => <SkillsTile1 {...props} copyLang={lang} />} />
                  <Route path={eduLink} render={(props) => <EducationTile1 {...props} copyLang={lang} />} />
                  <Route path={langLink} render={(props) => <LanguagesTile1 {...props} copyLang={lang} />} />
                  <Route path={leisureLink} render={(props) => <LeisureTile1 {...props} copyLang={lang} />} />  
                  <Route render={() => <div>Not Found</div>} />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          </Wrapper>
          <RightNavigation
            copyLang={lang} 
            link_one={workLink} 
            link_two={eduLink} 
            link_three={leisureLink}/>
        </Body>
        <div class="scrollArrow"/>
        <FooterContainer>
          <div>Mentions légales</div>
          <div>Contact</div>
        </FooterContainer>
    </div>
    )
  }
};

export default withRouter(App);
