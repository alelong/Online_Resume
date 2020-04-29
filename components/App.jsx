import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { withRouter, Switch, Route, Redirect, Link } from 'react-router-dom';
import styled from 'styled-components';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import {Wrapper, Tile7} from './Skeleton.jsx';
import {WorkTile1, WorkTile2, WorkTile3, WorkTile4, WorkTile5, WorkTile6} from './Work.jsx';
import {LeisureTile1, LeisureTile2, LeisureTile3, LeisureTile4, LeisureTile5, LeisureTile6} from './Leisure.jsx';
import {HomeTile1, HomeTile2, HomeTile3, HomeTile4, HomeTile5, HomeTile6} from './Home.jsx';
import {OrganizationsTile1, OrganizationsTile2, OrganizationsTile3, OrganizationsTile4, OrganizationsTile5, OrganizationsTile6} from './Organizations.jsx';
import {EducationTile1, EducationTile2, EducationTile3, EducationTile4, EducationTile5, EducationTile6} from './Education.jsx';
import {SkillsTile1, SkillsTile2, SkillsTile3, SkillsTile4, SkillsTile5, SkillsTile6} from './Skills.jsx';
import {AboutTile1, AboutTile2, AboutTile3, AboutTile4, AboutTile5, AboutTile6} from './About.jsx';
import LeftNavigation from './LeftNavigation.jsx';
import RightNavigation from './RightNavigation.jsx';
import './../index.less';

const RightBarContainer = styled.div`
  display: grid;
  grid-template-rows: 8fr 1fr 6fr 3fr 7fr;
  width: 6%;
  height: 100%;
  z-index: 1;
  font-family: "Courier New", serif;
  font-size: 15px;
  position: relative;
`;

const LanguageSwitcherWrapper = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  color: white;
`;

const LanguageItem = styled.div`
  color: ${props => props.selected ? '#6d5b97' : 'white'}; 
  background-color: ${props => props.selected ? 'white' : '#6d5b97'};
  cursor:  pointer;
  visibility: visible;
  transition: opacity 0.5s;
`;

const en_links = ['/en/home', '/en/work', '/en/about', '/en/skills', '/en/education', '/en/clubs', '/en/leisure'];
const fr_links = ['/fr/accueil', '/fr/travail', '/fr/a-propos', '/fr/competences', '/fr/scolarite', '/fr/clubs', '/fr/loisirs'];



class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      frIsSelected: true,
      enIsSelected: false,
      linksTable: fr_links,
    }
    this.selectFR = this.selectFR.bind(this);
    this.selectEN = this.selectEN.bind(this);
  }

  selectFR () {
    if (!this.state.frIsSelected){
      this.setState({
      frIsSelected: true,
      enIsSelected: false,
      linksTable: fr_links,
      }, function (){
        console.log(this.state.frIsSelected);
        console.log(this.state.enIsSelected);
      });
    } else {
      console.log(this.state.frIsSelected);
      console.log(this.state.enIsSelected);
    }
  }

  selectEN () {
    if (!this.state.enIsSelected){
      this.setState({
      frIsSelected: false,
      enIsSelected: true,
      linksTable: en_links,
      }, function (){
        console.log(this.state.frIsSelected);
        console.log(this.state.enIsSelected);
      });
    } else {
      console.log(this.state.lang1IsSelected);
      console.log(this.state.lang2IsSelected);
    }
  }

  render(){
    const {location}= this.props;
    const timeout = {enter: 1000, exit: 1000};
    return(
      <div>
        <LeftNavigation/>
        <Wrapper>
          <TransitionGroup component={null}>
            <CSSTransition key={location.key} timeout={timeout} classNames="slideDown">
              <Switch location={location}> /*location prop necessary to keep rendering old component after route has changed*/
                <Route exact path="/" component={HomeTile6} />
                <Route path="/home" component={HomeTile6} />
                <Route path="/work" component={WorkTile6} />
                <Route path="/about" component={AboutTile6} />
                <Route path="/skills" component={SkillsTile6} />
                <Route path="/education" component={EducationTile6} />
                <Route path="/organizations" component={OrganizationsTile6} />
                <Route path="/leisure" component={LeisureTile6} />
                <Route render={() => <div>Not Found</div>} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
          <TransitionGroup component={null}>
              <CSSTransition key={location.key} timeout={timeout} classNames="slideDown">
                <Switch location={location}>
                  <Route exact path="/" component={HomeTile5} />
                  <Route path="/home" component={HomeTile5} />
                  <Route path="/work" component={WorkTile5} />
                  <Route path="/about" component={AboutTile5} />
                  <Route path="/skills" component={SkillsTile5} />
                  <Route path="/education" component={EducationTile5} />
                  <Route path="/organizations" component={OrganizationsTile5} />
                  <Route path="/leisure" component={LeisureTile5} />
                  <Route render={() => <div>Not Found</div>} />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          <TransitionGroup component={null}>
            <CSSTransition key={location.key} timeout={timeout} classNames="slideRight">
              <Switch location={location}>
                <Route exact path="/" component={HomeTile4} />
                <Route path="/home" component={HomeTile4} />
                <Route path="/work" component={WorkTile4} />
                <Route path="/about" component={AboutTile4} />
                <Route path="/skills" component={SkillsTile4} />
                <Route path="/education" component={EducationTile4} />
                <Route path="/organizations" component={OrganizationsTile4} />
                <Route path="/leisure" component={LeisureTile4} />
                <Route render={() => <div>Not Found</div>} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
          <TransitionGroup component={null}>
            <CSSTransition key={location.key} timeout={timeout} classNames="slideLeft">
              <Switch location={location}>
                <Route exact path="/" component={HomeTile3} />
                <Route path="/home" component={HomeTile3} />
                <Route path="/work" component={WorkTile3} />
                <Route path="/about" component={AboutTile3} />
                <Route path="/skills" component={SkillsTile3} />
                <Route path="/education" component={EducationTile3} />
                <Route path="/organizations" component={OrganizationsTile3} />
                <Route path="/leisure" component={LeisureTile3} />
                <Route render={() => <div>Not Found</div>} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
          <TransitionGroup component={null}>
            <CSSTransition key={location.key} timeout={timeout} classNames="slideLeft">
              <Switch location={location}>
                <Route exact path="/" component={HomeTile2} />
                <Route path="/home" component={HomeTile2} />
                <Route path="/work" component={WorkTile2} />
                <Route path="/about" component={AboutTile2} />
                <Route path="/skills" component={SkillsTile2} />
                <Route path="/education" component={EducationTile2} />
                <Route path="/organizations" component={OrganizationsTile2} />
                <Route path="/leisure" component={LeisureTile2} />
                <Route render={() => <div>Not Found</div>} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
          <TransitionGroup component={null}>
            <CSSTransition key={location.key} timeout={timeout} classNames="slideUp">
              <Switch location={location}>
                <Route exact path="/" component={HomeTile1} />
                <Route path="/home" component={HomeTile1} />
                <Route path="/work" component={WorkTile1} />
                <Route path="/about" component={AboutTile1} />
                <Route path="/skills" component={SkillsTile1} />
                <Route path="/education" component={EducationTile1} />
                <Route path="/organizations" component={OrganizationsTile1} />
                <Route path="/leisure" component={LeisureTile1} />
                <Route render={() => <div>Not Found</div>} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        </Wrapper>
        <RightBarContainer>
          <LanguageSwitcherWrapper>
            <LanguageItem selected={this.state.frIsSelected} onClick={this.selectFR}>
              FR
            </LanguageItem>
            <div>|</div>
            <LanguageItem selected={this.state.enIsSelected} onClick={this.selectEN}>
              EN
            </LanguageItem>
          </LanguageSwitcherWrapper>
          <RightNavigation 
            toWork={this.state.linksTable[1]} 
            toEducation={this.state.linksTable[4]} 
            toLeisure={this.state.linksTable[6]}/>
        </RightBarContainer>
      </div>
    )
  }
};

export default withRouter(App);
