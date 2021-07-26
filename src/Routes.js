import {  Route } from "react-router-dom";
import { Dashboard } from "./component/Dashboard/Dashboard";
import { Diagnosis } from "./component/Diagnosis/Diagnosis";
import { Prescription } from "./component/Prescription/Prescription";
import Procedures from "./component/Procedures/Procedures";
import Consultation from "./component/Consultation/Consultation";
import { Billing } from "./component/Billing/Billing";
const Router = () => {
  return (
      <>
        <Route path="/People/dashboard" component={Dashboard} />
        <Route path="/People/Consultation" component={Consultation} />
        <Route path="/People/Procedures" component={Procedures} />
        <Route path="/People/Diagnosis" component={Diagnosis} />
        <Route path="/People/Prescription" component={Prescription} />
        <Route path="/People/billing" component={Billing} />
      </>
   
  );
};
export default Router;
