import React, { Component } from 'react'
import Grid from 'material-ui/Grid'
import Layout from '../components/Layout'
import { SimpleChart, BrushChart, PieChartImpl, RadarChart, BarChart, DotChart } from '../components/Charts'

export default class Index extends Component {
  render() {
    return (
      <Layout>
        <Grid container spacing={16}>
          <Grid item xs={12} sm={6}>
            <SimpleChart />
          </Grid>
          <Grid item xs={12} sm={6}>
            <BrushChart />
          </Grid>
          <Grid item xs={12} sm={3}>
            <PieChartImpl />
          </Grid>
          <Grid item xs={12} sm={6}>
            <BarChart />
          </Grid>
          <Grid item xs={12} sm={3}>
            <RadarChart />
          </Grid>
          <Grid item xs={12} sm={9}>
            <DotChart />
          </Grid>
          <Grid item xs={12} sm={3}>
            <PieChartImpl />
          </Grid>
        </Grid>
      </Layout>
    )
  }
}
