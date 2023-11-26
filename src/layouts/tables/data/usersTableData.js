/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";

// Images
import defaultPicture from "assets/images/logos/default_pfp.png";

import Moment from "react-moment";

export default function data(users) {
  const User = ({ image, name, email }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" />
      <MDBox ml={2} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {name}
        </MDTypography>
        <MDTypography variant="caption">{email}</MDTypography>
      </MDBox>
    </MDBox>
  );

  return {
    columns: [
      { Header: "user", accessor: "user", width: "45%", align: "left" },
      { Header: "created at", accessor: "createdAt", align: "center" },
      { Header: "updated at", accessor: "updatedAt", align: "center" },
      { Header: "edit", accessor: "edit", align: "center" },
      { Header: "delete", accessor: "delete", align: "center" },
    ],

    rows: users.map((user) => ({
      user: <User image={defaultPicture} name={user.name} email={user.email} />,
      createdAt: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          <Moment format="DD/MM/YYYY HH:mm">{user.created_at}</Moment>
        </MDTypography>
      ),
      updatedAt: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          <Moment format="DD/MM/YYYY HH:mm">{user.updated_at}</Moment>
        </MDTypography>
      ),
      edit: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          Edit
        </MDTypography>
      ),
      delete: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          delete
        </MDTypography>
      ),
    })),
  };
}
