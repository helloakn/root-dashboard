
import React from "react"

import MainLayout from "app/layouts/mainLayout";

import { HeaderRow, ServiceTitle, NavigationToggle } from 'app/components/common'
import {
  MainContainer, MainContainerBody,
  HeadAction, ATab,
  Table
} from './article-listing.elements'

import Button from "app/components/button/button.component";
import Pagination from "app/components/pagination/pagination.component";
import NavigationMenu from 'app/components/article/navigation-menu';

export default class ArticleListingTemplate extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [] // this is a good place to set Initial value
    };
  }

  render() {
    const rows = this.state.data.map(x => {
      return (
        <tr key={'tr' + x.id}>
          <td>{x.id}</td>
          <td>{x.name}</td>
          <td>{x.categories}</td>
          <td>{x.created_at}</td>
          <td>{x.updated_at}</td>
          <td>
            <Button
              caption="Setup"
              href="demo/setup"
              buttonType="default"
            />
            <br />
            <Button
              caption="Delete"
              href="demo/setup"
              buttonType="primary"
            />
          </td>
        </tr>
      )
    })

    return (
      <MainLayout>
        <MainContainer>
          <NavigationMenu />
          <MainContainerBody>
            
            <HeaderRow>
              <NavigationToggle onClick={this.notificationClick}>
                <i className={'fas fa-list-ul navigationtoggle'} ></i>
              </NavigationToggle>
              <ServiceTitle>
                <label>Article Service :</label> <label>Listing</label>
              </ServiceTitle>
              <HeadAction>
                <Button
                  caption="Setup"
                  href="article/setup"
                  buttonType="default"
                />
              </HeadAction>
            </HeaderRow>

            <Table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Categories</th>
                  <th>Created At</th>
                  <th>Updated At</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {rows}
              </tbody>
            </Table>
            <Pagination
              totalPage={100}
              maxLength={5}
              activePage={3}
              prefixHref={''}
              query={''}
            />
          </MainContainerBody>
        </MainContainer>
      </MainLayout>
    )
  }
}
