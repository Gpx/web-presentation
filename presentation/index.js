// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Image,
  CodePane,
  Code,
  Layout,
  Fill,
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

const images = {
  equilibrium: require("../assets/equilibrium.jpg"),
  oldOffice: require("../assets/old-office.jpg"),
  twitter: require("../assets/original-twitter.png"),
  cry: require("../assets/crying_baby-wide.jpg"),
  travelperkers: require("../assets/travelperkers.jpg"),
  createReactApp: require("../assets/create-react-app.gif"),
  backToTheFuture: require("../assets/back-to-the-future.jpg"),
  hayk: require("../assets/hayk-ananyan.jpg"),
};

preloader(images);

const theme = createTheme({
  primary: "white",
  secondary: "#1396e4",
  tertiary: "#07E976",
  quartenary: "#CECECE"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck progress="number" transition={[]} theme={theme}>
        <Slide>
          <Heading size={1} fit lineHeight={1} textColor="secondary">
            web
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            the why, what and what next
          </Text>
        </Slide>
        <Slide>
          <Layout>
            <Fill>
              <Code>web_client</Code>
            </Fill>
            <Fill>
              <Code>web</Code>
            </Fill>
          </Layout>
        </Slide>
        <Slide>
          <List>
            <ListItem>Why we decided to move</ListItem>
            <ListItem>What we learned</ListItem>
            <ListItem>What we're planning next</ListItem>
          </List>
        </Slide>
        <Slide>
          <Image display="inline" src={images.equilibrium} width="100vmin" />
        </Slide>
        <Slide>
          <Image display="inline" src={images.oldOffice} width="100vmin" />
        </Slide>
        <Slide>
          <Image display="inline" src={images.twitter} width="100vmin" />
        </Slide>
        <Slide>
          <CodePane lang="json">
{`{
  "id":20151,
  "is_manually_booked":false,
  "created_at":"2017-05-21T17:00:47.596733Z",
  "purpose":"Satin Intro London",
  "reference":"",
  "currency":"EUR"
  ,"expiry":"2017-05-22T17:11:36.057459Z",
  "status":"saved",
  "last_status":"saved",
  "status_changed_at":"2017-05-21T17:00:47.596708Z",
  "billing_center":2036,
  "user":7572,
  "manual_booker":null,
  "reason_manual_booking":null,
  "policy":{
    "id":2065,
    "company":1965,
    "company_name":"DevScore",
    "name":"DevScore standard policy",
    "active":true,
    "standard":3,
    "level":"standard",
    "is_company_default":true,
    "rule_allow_out_of_policy":true,
    "rule_require_approval":"none",
    "rule_hotel_max_stars":5,
    "rule_hotel_booking_window":0,
    "rule_hotel_budget_amount":null,
    "rule_hotel_budget_currency":"EUR",
    "rule_flight_max_cabin_class":"first",
    "rule_flight_booking_window":0},
    "requirements":[
      {
        "id":24398,"type":"flight",
        "selected_providers":null,
        "one_way":false,
        "origin_schema":"Sky",
        "origin":"PARI",
          "origin_name":"Paris (All), France",
          "origin_latlon":"48.879168,2.36215",
          "destination_schema":"Sky",
          "destination":"LOND",
          "destination_name":"London (All), United Kingdom",
          "destination_latlon":"51.506136,-0.120054",
          "start_date":"2017-06-08",
          "start_date_anchor":"",
          "start_time_from":"00:00:00",
          "start_time_until":"23:59:59",
          "end_date":"2017-06-09",
          "end_date_anchor":"",
          "end_time_from":"00:00:00",
          "end_time_until":"23:59:59",`}
          </CodePane>
        </Slide>
        <Slide>
          <Image display="inline" src={images.cry} width="100vmin" />
        </Slide>
        <Slide>
          <Image display="inline" src={images.travelperkers} width="100vmin" />
        </Slide>
        <Slide>
          <Heading size={1} fit textColor="secondary">
            <Code>create-react-app</Code>
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            FTW!!
          </Text>
        </Slide>
        <Slide>
          <Image display="inline" src={images.createReactApp} width="100vmin" />
        </Slide>
        <Slide>
          <List>
            <ListItem>Webpack</ListItem>
            <ListItem>Babel</ListItem>
            <ListItem>Jest</ListItem>
            <ListItem>Lint</ListItem>
            <ListItem>Free upgrades</ListItem>
          </List>
        </Slide>
        <Slide>
          <Heading size={1} fit textColor="secondary">&lt;Layout&gt; components</Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            with some help from styled-components 💅
          </Text>
        </Slide>
        <Slide>
          <Heading size={1} fit textColor="secondary">Prettier</Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            same style guide for everyone
          </Text>
        </Slide>
        <Slide>
          <Heading size={1} fit textColor="secondary">Jest + snapshot testing</Heading>
        </Slide>
        <Slide>
          <Heading size={1} fit textColor="secondary">We don't need Flux</Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} bold>
            (for now)
          </Text>
        </Slide>
        <Slide>
          <Heading size={1} fit textColor="secondary">Flow</Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            great when it works
          </Text>
        </Slide>
        <Slide>
          <Heading margin="0 0 10px" size={2} textColor="secondary">What's next?</Heading>
          <Image display="inline" src={images.backToTheFuture} width="100vmin" />
        </Slide>
        <Slide>
          <Heading size={1} fit textColor="secondary">✨New API✨</Heading>
        </Slide>
        <Slide>
          <Heading size={1} fit textColor="secondary">Move pages from web_client to web</Heading>
          <List>
            <ListItem>Users</ListItem>
            <ListItem>Invoices</ListItem>
            <ListItem>Reporting</ListItem>
            <ListItem>Trips</ListItem>
          </List>
        </Slide>
        <Slide>
          <Heading size={1} fit textColor="secondary">TravelPerk Mobile</Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            Maybe a completely separated app
          </Text>
        </Slide>
        <Slide>
          <Heading fit textColor="secondary">Don't call it responsive</Heading>
          <Image display="inline" src={images.hayk} width="100vmin" />
        </Slide>
        <Slide>
          <Heading size={1} fit textColor="secondary">
            Frontend development is such a pain!
          </Heading>
          <Heading size={1} fit textColor="secondary">
            But it doesn't have to be...
          </Heading>
        </Slide>
      </Deck>
    );
  }
}
