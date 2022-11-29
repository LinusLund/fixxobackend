import React from 'react'
import { NavLink } from 'react-router-dom'

interface BreadcrumbType {
  currentPage: string
  parentPage?: string
}

const BreadcrumbSection :React.FC<BreadcrumbType> = ({currentPage, parentPage}) => {
  return (
    <section className = "breadcrumb">
        <div className = "container">
            <ul className = "breadcrumb_list">
                <li>
                  {
                    (parentPage != undefined) ? <li><NavLink to={`/${parentPage}`}>{parentPage}</NavLink></li> :""
                  }
                </li>
                <li>{currentPage}</li>
            </ul>
        </div>
    </section>
  )
}

export default BreadcrumbSection