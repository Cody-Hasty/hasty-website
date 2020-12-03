import React from 'react';
import { ImageGroup, Image } from 'react-fullscreen-image';
import ionPic from '../../../images/projects/ion/thumbnail.png';
import freeBody from '../../../images/projects/ion/freebody.png';
import coulombLaw from '../../../images/projects/ion/coulomb.png';
import distanceForm from '../../../images/projects/ion/distance.png';
import liBohrModel from '../../../images/projects/ion/bohrlimodel.png';
import stateSpace from '../../../images/projects/ion/statespace.png';
import simulinkLi2D from '../../../images/projects/ion/simulinkli2d.png';
import simulinkLi3D from '../../../images/projects/ion/simulinkli3d.png';
import repelBlock from '../../../images/projects/ion/repelblock.png';
import attractBlock from '../../../images/projects/ion/attractblock.png';
import initHeliumVal from '../../../images/projects/ion/initialheliumval.png';
import fourthOrder from '../../../images/projects/ion/fourthorder.png';
import rungeKutta from '../../../images/projects/ion/rungekutta.png';
import trapezoidMethod from '../../../images/projects/ion/trapezoidalmethod.png';
import testHeliumParams from '../../../images/projects/ion/testparams.png';
import allInitialValues from '../../../images/projects/ion/allinitialvalues.png';
import heliumAnalysis from '../../../images/projects/ion/heliumanalysis.png';
import heliumTrial1 from '../../../images/projects/ion/heltrial1.png';
import heliumTrial2 from '../../../images/projects/ion/heltrial2.png';
import heliumTrial3 from '../../../images/projects/ion/heltrial3.png';
import modelComparision from '../../../images/projects/ion/comparision.png';
import lithiumTrial1 from '../../../images/projects/ion/lithtrial1.png';
import lithiumTrial2 from '../../../images/projects/ion/lithtrial2.png';
import lithiumTrial3 from '../../../images/projects/ion/lithtrial3.png';
import threeDLithTrial from '../../../images/projects/ion/3dlithtrial.png';
import combinedGif from '../../../images/projects/ion/combinedgif.gif';

class Ion extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    
    render() {
        return (
            <div className="page">
                <div className="jumbotron">
                    <div className="container text-center">
                        <h2><strong>Ion - Atom Simulation</strong></h2><br />
                        <br />
                        <p>"Ion is a MATLAB / Simulink model of a Helium and Lithium atom"</p>
                    </div>
                </div>
                <div className="container-fluid bg-3 text-center">
                    <div className="row">
                        <div className="col-sm-1" />
                        <div className="col-sm-5 text-center">
                            <h4 className="list-title">Thumbnail:</h4>
                            <div className="fullscreen-container expand-element">
                                <ImageGroup>
                                    <ul className="images">
                                        <li>
                                            <Image src={ionPic} alt="lithium atom" />
                                        </li>
                                    </ul>
                                </ImageGroup>
                            </div>
                            <br /><h4 className="list-title">Free Body Diagram:</h4>
                            <div className="fullscreen-container expand-element">
                                <ImageGroup>
                                    <ul className="images">
                                        <li>
                                            <Image src={freeBody} alt="lithium free body diagram" />
                                        </li>
                                    </ul>
                                </ImageGroup>
                            </div>
                            <br /><h4 className="list-title">Lithium Bohr Model:</h4>
                            <div className="fullscreen-container expand-element">
                                <ImageGroup>
                                    <ul className="images">
                                        <li>
                                            <Image src={liBohrModel} alt="lithium bohr model" />
                                        </li>
                                    </ul>
                                </ImageGroup>
                            </div>
                            <br /><h4 className="list-title">Helium Model Trial Results for Comparision:</h4>
                            <div className="fullscreen-container expand-element">
                                <ImageGroup>
                                    <ul className="images">
                                        <li>
                                            <Image src={heliumTrial1} alt="first helium trial results" />
                                        </li>
                                    </ul>
                                </ImageGroup>
                            </div>
                            <br /><div className="fullscreen-container expand-element">
                                <ImageGroup>
                                    <ul className="images">
                                        <li>
                                            <Image src={heliumTrial2} alt="second helium trial results" />
                                        </li>
                                    </ul>
                                </ImageGroup>
                            </div>
                            <br /><div className="fullscreen-container expand-element">
                                <ImageGroup>
                                    <ul className="images">
                                        <li>
                                            <Image src={heliumTrial3} alt="third helium trial results" />
                                        </li>
                                    </ul>
                                </ImageGroup>
                            </div>
                            <br /><h4 className="list-title">Animated Helium Electrons:</h4>
                            <div className="fullscreen-container expand-element">
                                <ImageGroup>
                                    <ul className="images">
                                        <li>
                                            <Image src={combinedGif} alt="animated helium electrons" />
                                        </li>
                                    </ul>
                                </ImageGroup>
                            </div>
                            <br /><h4 className="list-title">Accepted Model vs Obtained Model:</h4>
                            <div className="fullscreen-container expand-element">
                                <ImageGroup>
                                    <ul className="images">
                                        <li>
                                            <Image src={modelComparision} alt="accepted model vs obtained model" />
                                        </li>
                                    </ul>
                                </ImageGroup>
                            </div>
                            <br /><h4 className="list-title">Lithium Model Trial Results:</h4>
                            <div className="fullscreen-container expand-element">
                                <ImageGroup>
                                    <ul className="images">
                                        <li>
                                            <Image src={lithiumTrial1} alt="first lithium trial results" />
                                        </li>
                                    </ul>
                                </ImageGroup>
                            </div>
                            <br /><div className="fullscreen-container expand-element">
                                <ImageGroup>
                                    <ul className="images">
                                        <li>
                                            <Image src={lithiumTrial2} alt="second lithium trial results" />
                                        </li>
                                    </ul>
                                </ImageGroup>
                            </div>
                            <br /><div className="fullscreen-container expand-element">
                                <ImageGroup>
                                    <ul className="images">
                                        <li>
                                            <Image src={lithiumTrial3} alt="third lithium trial results" />
                                        </li>
                                    </ul>
                                </ImageGroup>
                            </div>
                            <br /><h4 className="list-title">3D Lithium Model Trial Results:</h4>
                            <div className="fullscreen-container expand-element">
                                <ImageGroup>
                                    <ul className="images">
                                        <li>
                                            <Image src={threeDLithTrial} alt="3d lithium trial results" />
                                        </li>
                                    </ul>
                                </ImageGroup>
                            </div>
                        </div>
                        <div className="col-sm-5 text-left">
                            <h4 className="list-title">Overview:</h4>
                            <ul>
                                <p>
                                    This project was a fun exploration of 
                                    MATLAB's Simulink functionality inspired by 
                                    my Continuous Simulation class at ODU. 
                                    Through this, I got to use a lot of the 
                                    material I learned in class, and learned 
                                    more about the forces that hold us all 
                                    together along the way.
                                </p>
                                <p>
                                    (Note: Despite the project name "Ion", I'm 
                                    not modeling ions here, just atoms. Calling 
                                    it "Atom" just wasn't as catchy!)
                                </p>
                            </ul><br />
                            <h4 className="list-title">Technology:</h4>
                            <ul>
                                <li>MATLAB</li>
                                <li>Simulink</li>
                            </ul><br />
                            <h4 className="list-title">Methodology:</h4>
                            <ul>
                                <p>
                                    Simulating the movement of electrons within 
                                    an atom involves many complex interactions
                                    between every charged particle in the atom. 
                                    Modeling such a system is achieved by using 
                                    a simplified model of an atom, Bohr’s model, 
                                    to create movement similar to planetary 
                                    orbit. When only one electron is present, 
                                    the forces at work are almost identical to 
                                    planetary motion, with the positive charge 
                                    of the nucleus attracting the negative 
                                    charge of the electron. When more than one 
                                    electron is involved, an additional force is 
                                    added, as the electrons’ negative charges 
                                    repel each other.
                                </p>
                                <p>
                                    The attraction or repulsion from the 
                                    electrons and the nucleus can be modeled 
                                    using Coulomb’s law:
                                </p>
                                <p>
                                    <img src={coulombLaw} className="formula" alt="Coulomb's law"/>
                                </p>
                                <p>
                                    The distance (d) in Coulomb’s law can be 
                                    found by using the distance formula 
                                    inbetween both charges:
                                </p>
                                <p>
                                    <img src={distanceForm} className="formula" alt="Distance formula"/>
                                </p>
                                <p>
                                    Once the system is implemented, it can be 
                                    compared to the accepted Bohr’s model for 
                                    the lithium atom.
                                </p>
                                <p>
                                    The last issue that arises from the model is 
                                    one of translating a three-dimensional model 
                                    to two dimensions. The only stable orbit for 
                                    the Lithium atom when taking the real 
                                    physics equations into account relies 
                                    heavily on movement within the z axis. The 
                                    three-dimensional model for comparison takes 
                                    this into account.
                                </p>
                                <p>
                                    This leads to the formula that needs to be 
                                    implemented within Simulink to power this 
                                    simulation:
                                </p>
                                <p>
                                    <img src={stateSpace} className="formula" alt="state space model" />
                                </p>
                                <p>
                                    Two different models were prepared within 
                                    MATLAB’s Simulink program, one to represent 
                                    the two-dimensional model of this system, 
                                    and the other to represent the 
                                    three-dimensional model. The two-dimensional 
                                    model was slightly modified for verification 
                                    and validation purposes, to match the 
                                    accepted Simulink model for the Helium atom. 
                                    The modified blocks in the two-dimensional 
                                    model were as follows: deleting every block 
                                    associated with electron 3, changing the -3 
                                    constant block to a value of -2, changing 
                                    the final sum block from three inputs to 
                                    two, and modifying the initial conditions to 
                                    the ones given for the Helium model.
                                </p>
                                <p>
                                    <img src={initHeliumVal} className="formula" alt="initial values for Helium"/>
                                </p>
                                <p>
                                    The desired accuracy of this simulation 
                                    should be within 1 nanometer of the accepted 
                                    solution. Modifying the tolerance of the 
                                    simulation drastically changes its output, 
                                    so the ideal tolerance will be the highest 
                                    possible value that still gives an error of 
                                    less than 1 nanometer. Numerous trials were 
                                    also conducted using various methods to 
                                    determine the ideal parameters of this model 
                                    using the generated and accepted solutions 
                                    for the Helium atom. The chosen methods used 
                                    in order to simulate this model were 
                                    Runge-Kutta 4, Runge-Kutta 4/5, and the 
                                    trapezoidal method. The Runge-Kutta 4 method 
                                    is an explicit, fixed step, 4th order method 
                                    with the following equations:
                                </p>
                                <p>
                                    <img src={fourthOrder} className="formula" alt="fourth order Runge-Kutta"/>
                                </p>
                                <p>
                                    The Runge-Kutta 4/5 method is an explicit, 
                                    variable step, 5th order method with the 
                                    following equations:
                                </p>
                                <p>
                                    <img src={rungeKutta} className="formula" alt="Runge-Kutta formulas"/>
                                </p>
                                <p>
                                    The Trapezoidal method is an implicit, 
                                    variable step, 2nd order method with the 
                                    following equation:
                                </p>
                                <p>
                                    <img src={trapezoidMethod} className="formula" alt="trapezoidal formula"/>
                                </p>
                                <p>
                                    The trial with the smallest error compared 
                                    to the accepted solution would be the 
                                    parameters chosen for the simulation of the 
                                    lithium atom.
                                </p>
                                <p>
                                    <img src={testHeliumParams} className="formula" alt="2d helium parameters" />
                                </p>
                                <p>
                                    In order to determine the initial 
                                    conditions, the parameters determined by the 
                                    helium atom model would be used while 
                                    modifying the electrons so that they fall 
                                    into a stable orbit. The time needed for 
                                    these trials was increased to 500 seconds 
                                    for the observation of these orbital 
                                    patterns. Three trials were then conducted 
                                    to find the initial conditions, using slight 
                                    modifications to the initial conditions used 
                                    for the helium model. The most accurate 
                                    values were those that remained the most 
                                    stable. The initial values of the 
                                    three-dimensional model were obtained in the 
                                    same manner.
                                </p>
                                <p>
                                    <img src={allInitialValues} className="formula" alt="all initial values" />
                                </p>
                                <p>
                                    <img src={heliumAnalysis} className="formula" alt="analysis of collected data" />
                                </p>
                                <p>
                                    To validate this model, the accepted model 
                                    for the helium atom was compared with the
                                    generated model for the helium atom to 
                                    verify consistency with given physics laws. 
                                    The same parameters were then used by adding 
                                    one more electron to the atom and increasing 
                                    the charge of the nucleus to three.
                                </p>
                                <p>
                                    After running the two separate trials, the 
                                    Runge-Kutta 4/5 method worked the best, with 
                                    an error size of 1E-7, and the initial 
                                    conditions found in the third trial. The 
                                    system was not stiff, as any modifications 
                                    to the values made the system react 
                                    erratically and unpredictably. The 
                                    two-dimensional system was not stable, as 
                                    the only way this atom reaches stability in 
                                    the real system is by the inclusion of the 
                                    z-axis. In other words, this atom can not be 
                                    stable unless it is three-dimensional. This 
                                    is later reflected in the generated 
                                    three-dimensional system, in which all of 
                                    the electrons reach stability.
                                </p>
                                <p>
                                    The most cost-effective method was also the 
                                    Runge-Kutta 4/5, as the trapezoidal method 
                                    took far longer than both other methods 
                                    combined to run, in addition to its higher 
                                    error over RK4/5. This expensive run time 
                                    was likely due to the 119,121 steps it took 
                                    for completion for a total of 238,242 
                                    function calls. In comparison, the RK4/5 
                                    method only took 5,604 steps and 33,624 
                                    function calls, while the RK4 took 16,101 
                                    steps and 64,404 function calls.
                                </p>
                                <p>
                                    The two-dimensional model was the main model 
                                    of focus due to the verification and 
                                    validation that could be applied, even 
                                    though the solution is ultimately unstable 
                                    compared to the three-dimensional model. 
                                    This was the biggest trade-off undertaken in 
                                    using the accepted solution directly in
                                    implementation of the system.
                                </p>
                                <p>
                                    The initial conditions can be corrected 
                                    further for the three-dimensional model and 
                                    the two-dimensional model, and this is a 
                                    source of still existing errors in the 
                                    simulation. Additional errors may be caused 
                                    by the non-inclusion of the k-constant in 
                                    Coulomb’s law, as this constant was assumed 
                                    to simply speed up the simulation. An 
                                    additional assumption was that electrons 
                                    could be placed anywhere around the atom, 
                                    and would eventually fall into place in a 
                                    nice, steady orbit. The most important 
                                    lesson to be learned from the lithium atom 
                                    is that initial conditions can make all the 
                                    difference from a steady and stable orbit, 
                                    to an erratic and (likely radioactive) 
                                    outcome.
                                </p>
                            </ul>
                        </div>
                        <div className="col-sm-1" />
                    </div>
                </div>
                <br /><div className="container-fluid bg-3 text-center">
                    <div className="row">
                        <div className="col-sm-1" />
                        <div className="col-sm-10 text-center">
                            <h4 className="list-title">Simulink Diagram (2D Model):</h4>
                            <div className="fullscreen-container expand-mega-element">
                                <ImageGroup>
                                    <ul className="images">
                                        <li>
                                            <Image src={simulinkLi2D} alt="lithium 2d model in Simulink" />
                                        </li>
                                    </ul>
                                </ImageGroup>
                            </div>
                        </div>
                        <div className="col-sm-1" />
                    </div>
                </div>
                <br /><div className="container-fluid bg-3 text-center">
                    <div className="row">
                        <div className="col-sm-1" />
                        <div className="col-sm-10 text-center">
                            <h4 className="list-title">Simulink Diagram (3D Model):</h4>
                            <div className="fullscreen-container expand-mega-element">
                                <ImageGroup>
                                    <ul className="images">
                                        <li>
                                            <Image src={simulinkLi3D} alt="lithium 3d model in Simulink" />
                                        </li>
                                    </ul>
                                </ImageGroup>
                            </div>
                        </div>
                        <div className="col-sm-1" />
                    </div>
                </div>
                <br /><div className="container-fluid bg-3 text-center">
                    <div className="row">
                        <div className="col-sm-1" />
                        <div className="col-sm-5 text-center">
                            <h4 className="list-title">Inside 3D Model Repulsion Block:</h4>
                            <div className="fullscreen-container expand-element">
                                <ImageGroup>
                                    <ul className="images">
                                        <li>
                                            <Image src={repelBlock} alt="inside the repulsion block" />
                                        </li>
                                    </ul>
                                </ImageGroup>
                            </div>
                        </div>
                        <div className="col-sm-5 text-center">
                            <h4 className="list-title">Inside 3D Model Attraction Block:</h4>
                            <div className="fullscreen-container expand-element">
                                <ImageGroup>
                                    <ul className="images">
                                        <li>
                                            <Image src={attractBlock} alt="inside the attraction block" />
                                        </li>
                                    </ul>
                                </ImageGroup>
                            </div>
                        </div>
                        <div className="col-sm-1" />
                    </div>
                </div>
            </div>
        )
    }
}

export default Ion;