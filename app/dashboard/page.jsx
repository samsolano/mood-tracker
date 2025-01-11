import React from 'react'
import Login from "@/components/Login";
import Dashboard from "@/components/Dashboard";

export const metadata = {
  title:"Broodl Dashboard"
};

const isAuthenticated = false

let pageDisplayed = (
  <Login />
)


if (isAuthenticated) {
  pageDisplayed = (
    <Dashboard />
  )
}

export default function page() {
  return (
    <div>{pageDisplayed}</div>
  )
}
