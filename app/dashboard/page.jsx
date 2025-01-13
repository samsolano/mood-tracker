import React from 'react'
import Login from "@/components/Login";
import Dashboard from "@/components/Dashboard";

export const metadata = {
  title:"Broodl Dashboard"
};

export default function DashboardPage() {
  const isAuthenticated = true

  let pageDisplayed = (
    <Login />
  )


  if (isAuthenticated) {
    pageDisplayed = (
      <Dashboard />
    )
  }


  return (
    <div>
      {pageDisplayed}
    </div>
  )
}
