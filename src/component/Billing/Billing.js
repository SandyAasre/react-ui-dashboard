import React from "react";

import { Sidebar } from "../Sidebar/Sidebar";
import { Grid } from "../../style/Dashboard";
import { Header } from "../Header/Header";
import { Navbar } from "../Navbar/Navbar";
import { Container, CustomLink } from "../../style/Tab";
import { Dashboard } from "../Dashboard/Dashboard";
import Consultation from "../Consultation/Consultation";
import Procdures from "../Procedures/Procedures";
import { Diagnosis } from "../Diagnosis/Diagnosis";
import { Prescription } from "../Prescription/Prescription";
import { Logo2 } from "../logo/Logo";
//oi=mpo///
const Code = () => {
  return (
    <section class=" mt-3 custom-radius border border-secondary ">
      <nav class="navbar navbar-expand-lg  custom-radius  navbar-dark theme-color     p-0   ">
        <a
          class="navbar-brand  ms-4 fw-bold"
          href="#"
          style={{ fontSize: "12px" }}
        >
          Selected Mediation
        </a>

        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav offset-9 ">
            <li class="nav-item active">
              <a
                class="nav-link"
                href="#"
                style={{ fontSize: "13px", fontColor: "black" }}
              >
                Monograph <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link text-light"
                style={{ fontSize: "13px" }}
                href="#"
              >
                Leaflet
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <nav class="navbar navbar-expand-lg border    navbar-primary bg-white ">
        <a style={{ fontSize: "19px" }} class="navbar-brand  ms-4" href="#">
          Brilliant 90 MG Oral Tablet{" "}
        </a>

        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto " style={{ fontSize: "13px" }}>
            <li class="nav-item active">
              <a class="nav-link text-dark" href="#">
                Type <span class="text-secondary">Brand Rx</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-dark" href="#">
                formulary:<span class="text-secondary">Un</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-secondary" href="#">
                View Coverage
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <nav class="navbar navbar-expand-lg border   navbar-primary bg-white ">
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul
            class="navbar-nav offset-10 position-relative"
            style={{ fontSize: "13px", right: "40px" }}
          >
            <li class="nav-item ">
              <a class="nav-link text-dark   " href="#">
                <i
                  class="fa fa-check text-light  border"
                  style={{ padding: "5px", backgroundColor: "#22b0ef" }}
                  aria-hidden="true"
                ></i>
              </a>
            </li>
            <li class="nav-item ms-2">
              <a
                class="nav-link text-dark"
                style={{
                  width: "32px",
                  height: "35px",
                  marginTop: "-3px",
                  fontSize: "20px",
                }}
                href="#"
              >
                <i
                  class="far fa-money-bill-alt"
                  style={{ color: "#4eaa9f" }}
                ></i>
              </a>
            </li>
            <li class="nav-item ms-3">
              <a
                class="nav-link "
                style={{ color: "#4eaa9f", fontSize: "10px" }}
                href="#"
              >
                Coupan/guide <br />
                Available
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <nav class="navbar navbar-expand-lg   navbar-dark theme-color     p-0  ">
        <a
          class="navbar-brand  ms-4 fw-bolder"
          style={{ fontSize: "12px" }}
          href="#"
        >
          sig inforamtion
        </a>
      </nav>

      <div class="d-flex justify-content-evenly p-1">
        <button
          type="button"
          class="btn text-dark rounded-2 theme-font"
          style={{ backgroundColor: "#e6e6e6", width: "150px" }}
        >
          Action
        </button>
        <button
          type="button"
          class="btn text-dark rounded-2 theme-font"
          style={{ backgroundColor: "#e6e6e6", width: "150px" }}
        >
          Amount
        </button>
        <button
          type="button"
          class="btn text-dark rounded-2 theme-font"
          style={{ backgroundColor: "#e6e6e6", width: "150px" }}
        >
          Design form
        </button>
        <button
          type="button"
          class="btn text-dark rounded-2 theme-font"
          style={{ backgroundColor: "#e6e6e6", width: "150px" }}
        >
          Route
        </button>
        <button
          type="button"
          class="btn text-dark rounded-2 theme-font"
          style={{ backgroundColor: "#e6e6e6", width: "150px" }}
        >
          frequency
        </button>
      </div>
      <div class="d-flex justify-content-evenly p-3">
        <select
          name=""
          id=""
          class="form-select theme-font"
          aria-label="Default select example"
          style={{ width: "150px" }}
        >
          <option value="">Take</option>
          <option value=""></option>
        </select>
        <select
          name=""
          id=""
          class="form-select theme-font"
          style={{ width: "150px" }}
        >
          <option value="">1</option>
        </select>
        <select
          name=""
          id=""
          class="form-select theme-font"
          style={{ width: "150px" }}
        >
          <option value="">tablet</option>
        </select>
        <select
          name=""
          id=""
          class="form-select theme-font"
          style={{ width: "150px" }}
        >
          <option value="">orally</option>
        </select>
        <select
          name=""
          id=""
          class="form-select theme-font"
          style={{ width: "150px" }}
        >
          <option value="">2 times a day</option>
        </select>
      </div>
      <div class="mb-3 ms-3 row">
        <label for="staticEmail" class="col-sm-2 col-form-label theme-font">
          Addtional Drivers:
        </label>
        <div class="col-sm-9">
          <input
            type="text"
            class="form-control theme-font"
            id="staticEmail"
            value="email@example.com"
          />
        </div>
      </div>
      <div class="mb-3 ms-3  row">
        <label for="staticEmail" class="col-sm-2 col-form-label theme-font">
          Patient Direction: :
        </label>
        <div class="col-sm-4">
          <textarea
            name=""
            id=""
            cols="30"
            rows="5"
            class="form-control theme-font"
          >
            Day 1 - Start with 2 Tablets stat Day 2 onwards - Take 1 tablet
            orally 2 times
          </textarea>
        </div>
        <label
          for="staticEmail"
          class="col-sm-1 col-form-label mt-3"
          style={{ fontSize: "12px" }}
        >
          Day Supply{" "}
        </label>
        <div class="col-sm-2 mt-3">
          <input type="text" class="form-control" />
        </div>
        or
        <div class="col-sm-2 mt-3">
          <input type="text" class="form-control" />
        </div>
        <div class="position-absolute" style={{ left: "47%" }}>
          <div class="mb-3  mt-5 row">
            <label
              for="staticEmail"
              class="col-sm-1 col-form-label mt-3 "
              style={{ fontSize: "12px" }}
            >
              Dispence Amount
            </label>
            <div
              class="col-sm-1 mt-3"
              style={{
                marginLeft: "-25px",
              }}
            >
              <input type="text  " class="form-control w-100" />
            </div>
            <div class="col-sm-2 mt-3">
              <input type="text" class="form-control" />
            </div>
          </div>
        </div>
      </div>
      <div class="mb-3 ms-1 row" style={{ marginTop: "-10px" }}>
        <div class="col-md-6"></div>
        <label
          for="staticEmail"
          class="col-sm-1 col-form-label"
          style={{ fontSize: "12px" }}
        >
          Refills:
        </label>
        <div class="col-sm-2">
          <input
            type="text"
            class="form-control ms-2"
            id="staticEmail"
            value="0"
          />
        </div>
      </div>
      <div class="mb-3 ms-3 row">
        <label for="staticEmail" class="col-sm-2 theme-font col-form-label">
          Problem/Dx:
        </label>
        <div class="col-sm-9">
          <select name="" id="" class="form-select theme-font">
            <option value="">1</option>
          </select>
        </div>
      </div>
      <div class="mb-3 ms-3  row">
        <label for="staticEmail" class="col-sm-2 col-form-label theme-font">
          Pharmacy Notes:
        </label>
        <div class="col-sm-4">
          <textarea
            name=""
            id=""
            cols="30"
            rows="3"
            class="form-control theme-font"
          >
            Provider requests for you to Dispense as written (DAW) for Brilinta®
            (Ticagrelor). Brand medically necessary
          </textarea>
        </div>
        <div class="col-md-4">
          <div class="form-check mt-1 ms-5">
            <input class="form-check-input p-2" type="checkbox" value="" />
            <label for="" class="text-secondary ms-3 theme-font">
              Store Sig & Add to Prescriber’s List
            </label>
          </div>
          <div class="form-check ms-5 mt-3">
            <input
              class="form-check-input p-2"
              checked
              type="checkbox"
              value=""
            />
            <label for="" class="text-secondary ms-3 theme-font">
              DAW/DNS
            </label>
          </div>
        </div>
        <nav
          class="navbar   navbar-dark theme-color  mt-3    p-0  "
          style={{ marginLeft: "-15px" }}
        >
          <a class="navbar-brand theme-font ms-4" href="#">
            Alternative Medication
          </a>
          "
        </nav>
        <nav
          class="navbar navbar-expand-lg border    navbar-primary bg-white "
          style={{ marginLeft: "-15px" }}
        >
          <a style={{ fontSize: "19px" }} class="navbar-brand  ms-4" href="#">
            Plavix 75 MG Oral Tablet{" "}
          </a>

          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto ">
              <li class="nav-item active mt-3">
                <a
                  class="nav-link text-dark theme-font"
                  href="#"
                  style={{ fontSize: "9px" }}
                >
                  Type <span class="text-secondary">Brand Rx</span>
                </a>
              </li>
              <li class="nav-item mt-3">
                <a
                  class="nav-link text-dark theme-font"
                  href="#"
                  style={{ fontSize: "9px" }}
                >
                  formulary:<span class="text-secondary">Un</span>
                </a>
              </li>
              <li class="nav-item mt-3">
                <a
                  class="nav-link text-secondary theme-font"
                  href="#"
                  style={{ fontSize: "9px" }}
                >
                  View Coverage
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <nav
          class="navbar navbar-expand-lg border   navbar-primary bg-white "
          style={{ marginLeft: "-10px" }}
        >
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul
              class="navbar-nav offset-10 position-relative"
              style={{ fontSize: "13px", right: "40px" }}
            >
              <li class="nav-item ">
                <a class="nav-link text-dark   " href="#">
                  <i
                    class="fa fa-check text-light  border"
                    style={{ padding: "5px", backgroundColor: "#22b0ef" }}
                    aria-hidden="true"
                  ></i>
                </a>
              </li>
              <li class="nav-item ms-2">
                <a
                  class="nav-link text-dark"
                  style={{
                    width: "32px",
                    height: "35px",
                    marginTop: "-3px",
                    fontSize: "20px",
                  }}
                  href="#"
                >
                  <i
                    class="far fa-money-bill-alt"
                    style={{ color: "#4eaa9f" }}
                  ></i>
                </a>
              </li>
              <li class="nav-item ms-3">
                <a
                  class="nav-link "
                  style={{ color: "#4eaa9f", fontsize: "10px" }}
                  href="#"
                >
                  Coupan/guide <br />
                  Available
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <div class="col-md-6 offset-8 mt-3 ">
          <button
            class=" btn btn-sm text-light btn-shadowing  w-25 theme-btn"
            style={{ borderRadius: "50px" }}
          >
            Update
          </button>
          <button
            class=" btn btn-sm btn-seconday w-25 ms-3"
            style={{ borderRadius: "50px", backgroundColor: "#e6e6e6" }}
          >
            Close
          </button>
        </div>
      </div>
    </section>
  );
};
export const Billing = () => {

  return (
  
          <div style={{ width: "90%" }}>
              <Code/>
          </div>
       
  );
};
