import React, { Component } from "react";
import { //CardFooter, 
  Spinner } from "reactstrap";
import withAuth from "../services/withAuth";
//import { connect } from 'react-redux';
//import { addProfile, setCampaign, darkTheme,setAvatar } from '../../Redux/Actions/profile';
//import Navegador from "./temarioViews/ComponentsNavTemari/Navegador";
import BienvenidaView from "./temarioViews/BienvenidaView";
// import ObjetivoView from "./temarioViews/ObjetivoView";
// import InstruccionView from "./temarioViews/InstruccionView";

// import TA1View from "./temarioViews/TA1View";
// import TA2View from "./temarioViews/TA2View";
// import TA3View from "./temarioViews/TA3View";
// import TA4View from "./temarioViews/TA4View";
// import TA5View from "./temarioViews/TA5View";
// import TA6View from "./temarioViews/TA6View";
// import TA7View from "./temarioViews/TA7View";
// import TA8View from "./temarioViews/TA8View";
// import TA9View from "./temarioViews/TA9View";
// import TA10View from "./temarioViews/TA10View";
// import TA11View from "./temarioViews/TA11View";
// import TA12View from "./temarioViews/TA12View";
// import TA13View from "./temarioViews/TA13View";

//import RecapitulacionView from './temarioViews/RecapitulacionView'

class Inicio extends Component {
  loading = () => (
    <div className="animated fadeIn pt-3 text-center "><Spinner color="danger" /></div>
  );
  // state = {
  //   index: 0,
  // };
  // constructor() {
  //   super();
  //   this.setIndex = this.setIndex.bind(this);
  // }

  // setIndex(index) {
  //   this.setState({
  //     index: index,
  //   });
  // }
  render() {
    return (
      <div className="animated fadeIn">
        
      
        <BienvenidaView />
          {/* {this.state.index === 0 ? (
            <BienvenidaView />
          ) : this.state.index === 1 ? (
            <ObjetivoView />
          ) : this.state.index === 1 ? (
            <InstruccionView />
          ) : this.state.index === 2 ? (
            <TA1View />
          ) : this.state.index === 3 ? (
            <TA2View />
          ) : this.state.index === 4 ? (
            <TA3View />
          ) : this.state.index === 5 ? (
            <TA4View />
          ) : this.state.index === 6 ? (
            <TA5View />
          ) : this.state.index === 7 ? (
            <TA6View />
          ) : this.state.index === 8 ? (
            <TA7View />
          ) : this.state.index === 9 ? (
            <TA8View />
          ) : this.state.index === 10 ? (
            <TA9View />
          ) : this.state.index === 11 ? (
            <TA10View />
          ) : this.state.index === 12 ? (
            <TA11View />
          ) : this.state.index === 13 ? (
            <TA12View />
          ) : this.state.index === 14 ? (
            <TA13View />
          ) : null}
          <br />
          <CardFooter>
            <Navegador handleNavigation={this.setIndex} maxIndex={15} />
          </CardFooter> */}
        
      </div>
    );
  }
}

// const mapStateToProps = state => {
//   return {
//     profile: state.profile.profile,
//     campaign: state.campaign.campaign,
//     darkTheme: state.darkTheme.darkTheme
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     addProfile: (name) => {
//       dispatch(addProfile(name))
//     },
//     setCampaign: (id) => {
//       dispatch(setCampaign(id))
//     },
//     darkTheme: (isDarkTheme) => {
//       dispatch(darkTheme(isDarkTheme))
//     },
//     setAvatar: (data) => {
//       dispatch(setAvatar(data))
//     }

//   }
// }

//export default connect(mapStateToProps, mapDispatchToProps)(withAuth(Inicio));
export default withAuth(Inicio);
