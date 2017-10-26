import 'babel-polyfill'
import reactPrimitives from 'react-primitives'
import {run} from "@iherb/ui-entrypoint-web"

const oldToken = "b1ea908c-70a5-4584-a8bf-42388c8a77f2"
const ugcToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiNGQ2NjM2ODUtMDVkMy00NjFkLTliOTItNWNiNzAxOGYyNTBkIiwibmJmIjoxNTA4Mjc1OTMxLCJleHAiOjE1MDg4ODA3MzEsImlzcyI6IlVHQ0FwaSJ9.X44YzGP3CAplg0pzFAoL1AJL353KYsl9nVY2DkLGdWU"
const checkoutApi = window._checkoutAPI
const myAccountApi = window._myaccountAPI
const loginToken = window._customerId;
const language = window._language;

export const {
  log, 
  store
} = run({
  checkoutApi,
  myAccountApi,
  loginToken,
  language
})
