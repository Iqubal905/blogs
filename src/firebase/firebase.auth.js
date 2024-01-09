

import app from './firebase.config'

import { GoogleAuthProvider, getAuth } from "firebase/auth";
const auth =getAuth(app)
export const googleProvider = new GoogleAuthProvider();
export default auth