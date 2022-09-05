import React from "react";
import axios from "axios";
import { checkServerSideCookie } from "../redux/actions/authActions";
import Layout from "../components/layout/index";
import jwt from "jwt-decode";
import { wrapper } from "../redux";


const Discover = ({ }) => {
  return (
    <Layout title="discover">
      <div className="discover-layout">
        <span className="title">Discover The Biggest List Of Over Vetted Crypto Infulencers</span>
        <div className="social-user-info">          
          <div className="col-md-3 social-link"></div>          
          <div className="col-md-8 user-info"></div>
        </div>
        <div className="social-user-info-merged"></div>
        <div class="hr-theme-slash-2">
          <div class="hr-line"></div>
          <div class="hr-icon">
            <img src="/img/Mask group.png"></img>
          </div>
          <div class="hr-line"></div>
        </div>
      </div>
    </Layout>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  async (context) => {
    checkServerSideCookie(context);
    const token = context.store.getState().authentication.token;
    if (token) {
      const data = jwt(token);
      const user = "test";
      return {
        props: {
          user,
          token,
        },
      };
    }
  }
);

export default Discover;
