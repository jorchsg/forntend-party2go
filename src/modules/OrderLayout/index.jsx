import React from "react";
import PropTypes from "prop-types";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Check from "@material-ui/icons/Check";
import StepConnector from "@material-ui/core/StepConnector";
import Salon from "../Salon/Salon";
import Sillas from "../Sillas/Sillas";
import "./style.scss";
import Mesas from "../Mesas/Mesas";
import Sonido from "../sonido/index";
import Pago from "../pago/index";
import Button from "../../components/Button/Button";
import { StepContext } from '../../components/ProviderStep';


import { useEffect } from "react";
import config from "../../config";
import axios from "axios";




const useQontoStepIconStyles = makeStyles({
  root: {
    color: "#eaeaf0",
    display: "flex",
    height: 22,
    alignItems: "center",
  },
  active: {
    color: "#784af4",
  },
  circle: {
    width: 8,
    height: 8,
    borderRadius: "50%",
    backgroundColor: "currentColor",
  },
  completed: {
    color: "#784af4",
    zIndex: 1,
    fontSize: 18,
  },
});

function QontoStepIcon(props) {
  const classes = useQontoStepIconStyles();
  const { active, completed } = props;

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
      })}
    >
      {completed ? (
        <Check className={classes.completed} />
      ) : (
        <div className={classes.circle} />
      )}
    </div>
  );
}

QontoStepIcon.propTypes = {
  /**
   * Whether this step is active.
   */
  active: PropTypes.bool,
  /**
   * Mark the step as completed. Is passed to child components.
   */
  completed: PropTypes.bool,
};

const ColorlibConnector = withStyles({
  alternativeLabel: {
    top: 15,
  },
  active: {
    "& $line": {
      background: "#F02748",
    },
  },
  completed: {
    "& $line": {
      background: "#F02748",
    },
  },
  line: {
    height: 10,
    border: 0,
    backgroundColor: "#C0C0C6",
    borderRadius: 1,
  },
})(StepConnector);

const useColorlibStepIconStyles = makeStyles({
  root: {
    backgroundColor: "white",
    border: "3px solid #9696A0",
    zIndex: 1,
    color: "#fff",
    width: 40,
    height: 40,
    display: "flex",
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
  active: {
    backgroundImage:
      "linear-gradient(142.75deg, #ED5026 -2.2%, #F02748 50.89%, #F71694 107.64%)",
    // boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
    border: "none",
  },
  completed: {
    backgroundImage:
      "linear-gradient(142.75deg, #ED5026 -2.2%, #F02748 50.89%, #F71694 107.64%)",
    border: "none",
  },
});

function ColorlibStepIcon(props) {
  const classes = useColorlibStepIconStyles();
  const { active, completed } = props;
  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed,
      })}
    >
      {/* {props.icon} */}
    </div>
  );
}

ColorlibStepIcon.propTypes = {
  /**
   * Whether this step is active.
   */
  active: PropTypes.bool,
  /**
   * Mark the step as completed. Is passed to child components.
   */
  completed: PropTypes.bool,
  /**
   * The label displayed in the step icon.
   */
  icon: PropTypes.node,
};

function getStepContent(step) {
  switch (step) {
    case 0:
      return Salon();
    case 1:
      return Mesas();
    case 2:
      return Sillas();
    case 3:
      return Sonido();
    case 4:
      return Pago();
    default:
      return "Unknown step";
  }
}

export default function CustomizedSteppers() {
  const [activeStep, setActiveStep] = React.useContext(StepContext);
  const steps = ["Salones", "Mesas", "Sillas", "Sonido", "Pago"];

  const nextStep = () => {
    if (activeStep < 4) {
      setActiveStep(activeStep + 1);
    }
  };
  console.log('Este es el step '+activeStep);


  

  return (
    
      <div className="steps-layout">
        <h2 className="title steps-layout-wrapper">Proceso de orden</h2>
        <Stepper
          className="steps-layout-wrapper"
          alternativeLabel
          activeStep={activeStep}
          connector={<ColorlibConnector />}
        >
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <div className="steps-content">{getStepContent(activeStep)}</div>
        <div className="steps-actions">
          <Button type="solid" onClick={nextStep}>
            Continuar
          </Button>
        </div>
      </div>
      
    
  );
}
