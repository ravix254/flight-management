import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { MaintenanceRecordList } from "./maintenanceRecord/MaintenanceRecordList";
import { MaintenanceRecordCreate } from "./maintenanceRecord/MaintenanceRecordCreate";
import { MaintenanceRecordEdit } from "./maintenanceRecord/MaintenanceRecordEdit";
import { MaintenanceRecordShow } from "./maintenanceRecord/MaintenanceRecordShow";
import { AircraftList } from "./aircraft/AircraftList";
import { AircraftCreate } from "./aircraft/AircraftCreate";
import { AircraftEdit } from "./aircraft/AircraftEdit";
import { AircraftShow } from "./aircraft/AircraftShow";
import { FlightList } from "./flight/FlightList";
import { FlightCreate } from "./flight/FlightCreate";
import { FlightEdit } from "./flight/FlightEdit";
import { FlightShow } from "./flight/FlightShow";
import { PilotList } from "./pilot/PilotList";
import { PilotCreate } from "./pilot/PilotCreate";
import { PilotEdit } from "./pilot/PilotEdit";
import { PilotShow } from "./pilot/PilotShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"FlightManagementSystem"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="MaintenanceRecord"
          list={MaintenanceRecordList}
          edit={MaintenanceRecordEdit}
          create={MaintenanceRecordCreate}
          show={MaintenanceRecordShow}
        />
        <Resource
          name="Aircraft"
          list={AircraftList}
          edit={AircraftEdit}
          create={AircraftCreate}
          show={AircraftShow}
        />
        <Resource
          name="Flight"
          list={FlightList}
          edit={FlightEdit}
          create={FlightCreate}
          show={FlightShow}
        />
        <Resource
          name="Pilot"
          list={PilotList}
          edit={PilotEdit}
          create={PilotCreate}
          show={PilotShow}
        />
      </Admin>
    </div>
  );
};

export default App;
