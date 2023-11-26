// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import DataTable from "examples/Tables/DataTable";

// Data
import usersTableData from "layouts/tables/data/usersTableData";

import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getUsers } from "../../store/actions/userAction";
import MDButton from "components/MDButton";

// eslint-disable-next-line react/prop-types
const Tables = ({ users, getUsers }) => {
  const [search, setSearch] = useState("");
  useEffect(() => {
    getUsers();
  }, []);

  const { columns, rows } = usersTableData(users);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <MDTypography variant="h6" color="white">
                  Users Table
                </MDTypography>
                <MDButton variant="gradient" color="light" size="small">
                  Add User
                </MDButton>
              </MDBox>
              <MDBox pt={3}>
                <DataTable
                  table={{ columns, rows }}
                  isSorted={false}
                  entriesPerPage={{ defaultValue: 10, entries: [5, 10, 15, 20, 25] }}
                  showTotalEntries
                  noEndBorder
                  canSearch
                  search={search}
                  setSearch={setSearch}
                  doSearch={getUsers}
                  pagination={{ variant: "gradient", color: "info" }}
                />
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
    </DashboardLayout>
  );
};

const mapStateToProps = (state) => ({
  users: state.userReducer.users,
});
export default connect(mapStateToProps, { getUsers })(Tables);
