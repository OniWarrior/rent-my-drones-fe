/*
 * Author : Stephen Aranda
 * File   : login-form-sub-comp.jsx
 * Desc   : sub component for the login component. Contains the form container of login 
 * */

import LoginFormSchema from '../formSchemas/login-form-schema';
import { useValidation } from "../hooks/useValidation";
import { useNavigate } from 'react-router-dom';

import { connect } from "react-redux";
import { postLogin } from '../state/actions/login-actions';